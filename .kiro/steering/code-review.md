---
inclusion: manual
---

# Code Review Steering

Guide for performing PR code reviews in this repository using GitHub MCP tools.

The conventions and anti-patterns to check are documented in a shared reference:

<!-- markdownlint-disable MD018 -->

#[[file:docs/code-review-conventions.md]]

<!-- markdownlint-enable MD018 -->

## Review Workflow

### Step 1: Identify the PR

Reviews always target **the currently checked-out repository**. Derive the `owner`/`repo` for the GitHub MCP tools from the local `origin` remote (`git remote get-url origin`) rather than asking the user — this guarantees the MCP calls and the local `git checkout` operations (Step 2) act on the same repository, so the reviewer can never inspect a same-named branch from an unrelated repo.

**Single PR review:** Ask the user only for the PR number to review.

**Batch review mode:** If the user does not mention a specific PR (e.g. "review my open PRs", "review all PRs"), use the batch review workflow described below.

### Batch Review Mode

When no specific PR is given, create a Kiro spec with tasks for each open PR:

1. **List open PRs**: Use `mcp_github_list_pull_requests` (state: `open`) to get all open PRs in the repository. **Paginate**: continue fetching with incrementing `page` until all PRs are retrieved. If the user asks for reviewing their specific PRs (e.g. "review my open PRs"), use `search_pull_requests` with an author qualifier or filter the returned PRs by the current user before generating tasks.
2. **Check for prior AI review marker**: For each PR, read its comments using `mcp_github_pull_request_read` (method: `get_comments`). **Paginate**: continue fetching with incrementing `page` until all comments are retrieved, so a marker on a later page isn't missed (which would otherwise re-review an unchanged PR and post duplicate feedback). Look for a comment containing, that has been posted by a user with the phrase "[bot]" included:
    ```markdown
    <!-- AI-REVIEW: sha=<head.sha> timestamp=<ISO-8601-UTC> -->
    ```
3. **Compare with current head SHA**: Get the PR's current `head.sha` from its details. If the stored SHA matches the current head → the PR hasn't changed since last review.
4. **Generate a spec with tasks**: Create a `.kiro/specs/code-review-batch/tasks.md` with one task per PR:
    - If a marker exists AND the stored SHA matches the current `head.sha` → mark the task as `optional` (skip review)
    - If no marker exists or the SHA differs → mark the task as `pending` (needs review)
5. **Execute tasks**: Process each pending task using the normal review workflow (Steps 2–6).
6. **Cleanup**: After all tasks are processed, delete the `.kiro/specs/code-review-batch/` directory to avoid accumulating stale spec files.

### AI Review Timestamp

After completing a review for a PR, **always post a PR comment** (using `mcp_github_add_issue_comment`) containing the reviewed head SHA and timestamp as an HTML comment:

```markdown
<!-- AI-REVIEW: sha=<head.sha> timestamp=<ISO-8601-UTC> -->
```

Use a PR comment rather than modifying the PR description body — this avoids overwriting author-formatted descriptions and prevents timestamps from being lost if the author edits their description later.

**Important**: Store the reviewed `head.sha` (from the PR details) in the marker. When checking if a PR needs re-review in batch mode, compare the stored SHA directly with the current `head.sha` — this is more reliable than timestamp comparison, which can miss commits pushed during an in-progress review.

This allows subsequent batch reviews to skip PRs that haven't changed since the last review.

### Step 2: Gather PR Details and Checkout the Branch

First, get the PR details to determine the head branch:

1. Use `mcp_github_pull_request_read` with method `get` to get the PR details including the head branch name and head repository.
2. Ensure your local worktree is clean (`git status --short` should be empty). If not, stash or commit local changes first.
3. Fetch the PR head into `FETCH_HEAD` and check it out in **detached HEAD**. This always inspects the PR's current tip without creating or moving any named local branch, so a reviewer's existing local branch (and any unpushed commits on it) is never reset or discarded:

```bash
# For PRs from the same repo (force refspec + ensures a force-pushed
# branch updates cleanly instead of being rejected as non-fast-forward):
git fetch origin +<branch-name>
git checkout --detach FETCH_HEAD

# For PRs from forks:
git fetch origin +refs/pull/<number>/head
git checkout --detach FETCH_HEAD
```

Checking out `FETCH_HEAD` detached guarantees repeat reviews always target the PR's current head while leaving all local branches untouched.

> If you prefer a named branch (or need to push fixes), first verify the target branch has no local-only commits — e.g. `git log origin/<branch-name>..<branch-name>` should be empty — or use a dedicated `git worktree` so existing branches are never reset.

### Step 3: Gather PR Context

Use GitHub MCP tools to gather all necessary context:

1. **PR Details** — `mcp_github_pull_request_read` (method: `get`) for title, description, author
2. **PR Diff** — prefer the paginated **Changed Files** list (below) plus **local, file-by-file diff inspection** after checkout (e.g. `git diff <base>...HEAD -- <path>` per file). Avoid relying on `mcp_github_pull_request_read` (method: `get_diff`) for large PRs: it returns the entire raw diff in one unpaginated response, which can overflow the client context or abort the review when generated/very large changes are present. Use `get_diff` only as a convenience for small PRs.
3. **Changed Files** — `mcp_github_pull_request_read` (method: `get_files`) for file list and stats. **Paginate**: continue fetching with incrementing `page` until all files are retrieved.
4. **CI Status** — `mcp_github_pull_request_read` (method: `get_check_runs`) to check if tests pass. **Paginate**: this repository's default pipeline (`.github/workflows/default.yml`) defines dozens of jobs, so request a large `perPage` and continue fetching with incrementing `page` until all check runs are retrieved. A single unpaginated call can omit a later failed job and wrongly report the PR as green.
5. **Existing Reviews** — `mcp_github_pull_request_read` (method: `get_review_comments`) to see prior feedback threads. **Paginate**: follow `pageInfo.endCursor` with `after` parameter until `hasNextPage` is false.
6. **Review Summaries** — `mcp_github_pull_request_read` (method: `get_reviews`) for submitted approvals, change requests, or review bodies without inline threads. **Paginate**: continue fetching with incrementing `page` until all reviews are retrieved, so an earlier review body that already raised the same concern isn't missed.

7. **PR Comments** — `mcp_github_pull_request_read` (method: `get_comments`) for top-level PR comments (non-review). **Paginate**: continue fetching with incrementing `page` until all comments are retrieved.

**Important — Avoid duplicate feedback:** Before posting any comment, check the existing review threads (from step 5), review summaries (from step 6), and PR comments (from step 7). Do not raise an issue that has already been:

- Raised in a prior review thread (unresolved, or resolved but without a clear explanation that it's e.g. a false positive or would get addressed in another issue)
- Dismissed by the PR author with a valid explanation
- Raised as a top-level PR comment

**Handling outdated threads:** Do not blanket-skip outdated threads. A thread being "outdated" only means its original diff position no longer maps to the current patch — it does NOT prove the reported defect was fixed. Inspect the current code to verify whether the underlying concern is actually addressed before skipping.

Only comment on genuinely new or unaddressed issues.

### Step 4: Understand Business Context

- **Resolve linked issues explicitly** — do not rely on `pull_request_read` (method `get`), which returns minimal PR fields and omits GitHub's linked/closing-issue references. A PR linked through the **Development sidebar** (rather than a `closes #123` keyword in the body) has no issue number anywhere in the PR details. Resolve linked issues in this order:
    1. Query the PR's `closingIssuesReferences` (GraphQL) or the issue **timeline**/cross-reference events to get issues linked via the Development sidebar or closing keywords.
    2. Fall back to parsing the PR body/title for `#<number>` and `closes/fixes/resolves` keywords only if the above yields nothing.
- Read each resolved issue using `mcp_github_issue_read`
- Check PR description against the PR template checklist in `.github/PULL_REQUEST_TEMPLATE.md`
- Understand the scope: is this a feature, bugfix, refactor, or chore?
- **Read scoped AGENTS.md files**: For each changed file under `packages/*`, read the corresponding `packages/<name>/AGENTS.md` to understand package-specific conventions before reviewing.

### Step 5: Perform the Review

Review the code changes in phases:

#### Phase 1: High-Level Review

- Does the solution fit the problem described in the issue/PR description?
- Are files in the right locations per project structure?
- Is the change scope appropriate (not too broad, not mixing concerns)?
- Are there architectural concerns?

#### Phase 2: Line-by-Line Review

For each changed file, check:

- **Logic & Correctness** — Edge cases, off-by-one errors, null checks, race conditions
- **Security** — Input validation, injection risks, XSS, sensitive data exposure
- **Performance** — Unnecessary loops, memory leaks, expensive operations
- **Maintainability** — Clear naming, single responsibility, appropriate comments
- **Reuse** — Is new code duplicating existing utilities? Check `packages/foundations/` and shared helpers

#### Phase 3: Project-Specific Checks

Apply the conventions from `docs/code-review-conventions.md` (included above via file reference).

### Step 5b: Verify Husky Compliance

When reviewing a PR, check that the Husky pre-commit hook would pass for the changes:

- **Branch name validation** — branch name follows the `-` separator convention (no `/`)
- **lint-staged** — changed files pass linting and Prettier formatting
- If the PR has CI lint failures that correspond to lint-staged checks, flag them — the author likely bypassed Husky with `--no-verify`

### Step 6: Submit the Review

Use `mcp_github_pull_request_review_write` to submit the review.

**AI Review Identification:** Since the review is posted via a personal access token (PAT) under a human user's avatar, **always prefix the review body and every line comment with 🤖** to make it clear this is an AI-generated review. Example: "🤖 **AI Review** — ..." for the summary body, and "🤖 ..." for each line comment.

**Always add inline line comments** for every specific issue found during review. Each issue should have a comment on the exact line(s) it refers to. Additionally, include a summary body in the review submission that provides an overview of all findings.

**Never APPROVE directly** (the review is posted under a human user's PAT — auto-approving could bypass branch protection intent and misrepresent human sign-off). Instead:

1. Submit the review as **COMMENT** (not APPROVE).
2. If the PR looks good and has no blocking issues, add a separate PR comment (using `mcp_github_add_issue_comment`) that:
    - Tags the user like `@nmerget` to inform them the PR can be approved
    - Includes a short message like "🤖 Hey @nmerget — this PR looks good to go! You can approve and merge. 🎉🚀"

**Correct sequence for reviews with findings:**

1. **Create a pending review**: Call `mcp_github_pull_request_review_write` with method `create` (omit `event` to keep it pending)
2. **Add line comments**: Call `mcp_github_add_comment_to_pending_review` for each specific issue, placed on the relevant line in the diff. Every actionable finding must have its own line comment — do not only summarize in the review body. Prefix each comment with 🤖.
    - **Findings without a changed line**: Some defects have no line in the current diff to attach to (e.g. a missing test, deleted validation, or an omitted required file). For these, add a **file-level** comment by setting `subjectType: FILE` on `mcp_github_add_comment_to_pending_review` (this works for existing and deleted files), or include the finding in the review body / a top-level PR comment. Do not force such comments onto unrelated lines.
3. **Submit the review**: Call `mcp_github_pull_request_review_write` with method `submit_pending` with event **COMMENT** (never APPROVE, never REQUEST_CHANGES):
    - **COMMENT** — Always use this. Describe blocking severity in the body text using the severity labels (🔴 `[blocking]`, 🟡 `[important]`, etc.) rather than using GitHub's formal review state.
    - **Never REQUEST_CHANGES** — This records a formal blocking review under the human PAT holder, which has the same identity-misrepresentation concern as auto-approving. It can prevent merging in a way the human didn't authorize. Express blocking concerns through comment severity labels instead.
    - Prefix the summary body with "🤖 **AI Review**"

**For reviews without issues** (PR looks good), submit as **COMMENT** with a body like "🤖 **AI Review** — No issues found. LGTM!" and then post a separate issue comment tagging the user with a celebratory message (🎉🚀).

## Responding to Review Feedback

When fixing issues raised in a code review, **always reply to each review thread** explaining what was changed, and **resolve the thread** once the fix is applied:

1. **Reply to every conversation**: After pushing fixes, go through each open review thread and add a reply using `mcp_github_add_reply_to_pull_request_comment`.
2. **Explain what was done**: State which commit contains the fix and briefly describe what was changed and why. Example: "Fixed in abc1234. Changed X to Y because Z."
3. **Resolve the thread**: After replying, call `mcp_github_pull_request_review_write` with method `resolve_thread` and the thread's `threadId` (node ID, e.g. `PRRT_kwDOxxx`). This closes the conversation so it no longer blocks merging.
4. **Do not leave threads unanswered or unresolved**: Unresolved conversations block merging in many repositories. Even if the fix is obvious, a short acknowledgment helps reviewers verify the fix without re-reading the full diff.
5. **For threads you disagree with**: Explain your reasoning respectfully. If you choose not to make the suggested change, say why — but **do NOT resolve the thread**. Leave it open for the original reviewer or a maintainer to resolve. Resolving a disagreed-upon thread hides the reviewer's concern and may bypass required-conversation-resolution branch rules without proper sign-off.

## Feedback Guidelines

### Severity Labels

Use these markers to indicate priority:

- 🔴 `[blocking]` — Must fix before merge
- 🟡 `[important]` — Should fix, discuss if disagree
- 🟢 `[nit]` — Nice to have, not blocking
- 💡 `[suggestion]` — Alternative approach to consider
- 🎉 `[praise]` — Good work, highlight positive patterns

### Feedback Style

- Be specific and actionable — explain what's wrong and suggest a fix
- Use the question approach: "What happens if X is null here?" instead of "This will crash"
- Focus on the code, not the person
- Balance criticism with praise — highlight good patterns too
- Differentiate between blocking issues and nice-to-haves

### Example Comments

```markdown
🔴 [blocking] This could cause a race condition when multiple users update simultaneously.
Consider wrapping this in a transaction or using optimistic locking.

🟡 [important] This hardcoded color `#282D37` should use the design token
`var(--db-current-color-on-bg-basic-emphasis-100-default)` instead.

🟢 [nit] Consider using `Array.from()` instead of spread here for clarity,
though both work fine.

💡 [suggestion] You could simplify this with the existing `mergeClassNames` utility
from `@db-ux/core-components`.

🎉 [praise] Great use of discriminated unions here — makes the type narrowing very clean.
```
