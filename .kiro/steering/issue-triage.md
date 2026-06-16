---
inclusion: manual
---

# Issue Triage Steering

Automated issue triage for the `db-ux-design-system/core-web` repository using GitHub MCP tools. Validates issue quality, assigns labels, sets priority/effort, and posts an AI-generated summary comment.

## Repository Context

- **Owner**: `db-ux-design-system`
- **Repo**: `core-web`
- **CODEOWNERS** (team members): `mfranzke`, `nmerget`, `michaelmkraus`, `bruno-sch`

## Issue Templates

The repository has these issue templates:

1. **🐞 Bug Report** (`bug_report.yaml`) — Required fields: reproduction case, expected behaviour. Optional: affected generators, browser, screenshots, business unit, project.
2. **📄 GitHub Copilot Instructions feedback** (`github_copilot_instructions.yaml`) — Required fields: what didn't work as expected. Optional: model used, prompt, suggestions, IDE, clarity rating.

## Single Issue Triage Workflow

When the user provides an issue number, perform the following steps:

### Step 1: Fetch Issue Details

1. Use `mcp_github_issue_read` (method: `get`) to get the full issue including author, title, body, labels, and type.
2. Use `mcp_github_issue_read` (method: `get_labels`) to see currently assigned labels.
3. Use `mcp_github_issue_read` (method: `get_comments`) to read all comments (and/or timeline events). **Paginate** until all comments are retrieved. This is essential when re-triaging a `⏳ waiting-for-info` issue: the author often supplies the missing details in a follow-up comment rather than editing the body, so the completeness check in Step 2 must consider comments — not just the original body — to avoid asking for the same information again.

### Step 1b: Check for Duplicates and Existing Solutions

Search for related issues and PRs to avoid duplicate work:

1. **Search open issues**: Use `mcp_github_search_issues` with keywords from the issue title/body, scoped to `repo:db-ux-design-system/core-web state:open`. Look for issues addressing the same problem or feature.
2. **Search closed issues**: Same search with `state:closed` — check if this was already resolved or intentionally rejected.
3. **Search open PRs**: Use `mcp_github_search_pull_requests` with relevant keywords scoped to `repo:db-ux-design-system/core-web state:open`. Check if someone is already working on a fix.
4. **Search merged PRs**: Same search with `state:closed is:merged` — the fix may already be merged but the issue wasn't linked/closed.

**Always exclude the issue currently under review** from the candidate set before evaluating or reporting duplicates. Keyword searches derived from the issue's own title/body will return that same issue — for narrow searches it may be the only result — so filter out its number first to avoid reporting the issue as its own duplicate.

**If duplicates or solutions are found**, include them in the summary comment (Step 7):

```markdown
### 🔗 Related Issues & PRs

- **Possible duplicate**: #<number> — <title> (open/closed)
- **Related PR**: #<number> — <title> (open/merged)
- **Previously discussed in**: #<number>
```

If the issue is clearly a duplicate of an existing open issue, mention this prominently but **do not close the issue** — leave that decision to a human maintainer.

### Step 2: Validate Template Completeness

Determine which template was used based on the issue type and labels:

- **Bug Report**: Check that the body contains a "Reproduction case" section and "Expected Behaviour" section (both are required). Note any missing optional fields.
- **Copilot Instructions feedback**: Check that the required textarea is filled in. Match the exact form label `❗ What didn’t work as expected?` (note the ❗ emoji and the curly apostrophe `’`), or — more robustly — match by its field id `issue-description` rather than by heading text, to avoid marking valid feedback as incomplete.
- **No template used**: Flag this — the issue may lack structured information.

When deciding whether a required field is still missing, evaluate the issue body **together with the comments/timeline** fetched in Step 1 — an author may have provided the missing details in a follow-up comment rather than editing the original body.

Rate completeness:

- ✅ **Complete** — All required fields filled with meaningful content
- ⚠️ **Partial** — Required fields present but sparse or unclear
- ❌ **Incomplete** — Missing required fields or entirely unstructured

### Step 3: Community Feedback Label

Check if the issue author is a CODEOWNER (team member):

**Team members**: `mfranzke`, `nmerget`, `michaelmkraus`, `bruno-sch`

- If the author is **NOT** in the list above → add the label `👩‍👧‍👦communityFeedback`
- If the author **IS** a team member → do not add the community label

### Step 4: Determine Priority and Effort

Based on the issue content, estimate:

**Priority** (single-select: `Urgent`, `High`, `Medium`, `Low`):

- **Urgent** — Production-breaking, security vulnerability, blocks many users
- **High** — Significant bug affecting core functionality, many users impacted
- **Medium** — Non-critical bug, feature request with clear value, moderate impact
- **Low** — Nice-to-have improvement, cosmetic issue, edge case

**Effort** (single-select: `High`, `Medium`, `Low`):

- **High** — Requires architectural changes, multiple packages, extensive testing, or major refactoring
- **Medium** — Moderate code changes across a few files, some testing required
- **Low** — Small fix, documentation update, single-file change, straightforward implementation

Set these using `mcp_github_issue_write` with `issue_fields`. **This depends on a feature flag:** GitHub MCP only exposes `list_issue_fields` and the `issue_fields` write parameter when the `remote_mcp_issue_fields` feature flag is enabled (see the [GitHub MCP feature flags docs](https://github.com/github/github-mcp-server/blob/main/docs/feature-flags.md)). Treat this step as **conditional**, not mandatory:

1. First attempt `mcp_github_list_issue_fields` (owner/repo) to confirm the exact `Priority` and `Effort` field names and their valid option names for this repository.
2. **If the field tools are unavailable** (the flag is not enabled, or the call errors with an unknown-tool/feature-disabled error): skip setting Priority/Effort, record the estimated values in the summary comment (Step 7) instead, and **continue** with labels and the rest of the workflow. Do not abort triage.
3. **If available**: set the fields — `field_option_name` is validated against the field's options before the API call:

```json
{
	"issue_fields": [
		{ "field_name": "Priority", "field_option_name": "<chosen value>" },
		{ "field_name": "Effort", "field_option_name": "<chosen value>" }
	]
}
```

### Step 4b: Set Issue Type (if not already set)

If the issue does **not** have a type assigned (the `type` field returned by `mcp_github_issue_read` (method: `get`) is null or empty), consider assigning one — but only when there is enough information to do so reliably:

- **If completeness is ❌ Incomplete** (from Step 2): **do not assign a type yet.** Leave it unset so a sparse, possibly-misleading report doesn't get locked into a wrong guess. Request the missing information first (Step 6/7); the type can be assigned on a later triage run once the report is at least ⚠️ Partial.
- **If completeness is ⚠️ Partial or ✅ Complete**: determine and assign the type as below.

First call `mcp_github_list_issue_types` (owner: `db-ux-design-system`) to get the valid type values configured for the organization, then choose from them:

| Type    | When to assign                                                                                                         |
| ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `Bug`   | The issue describes broken behavior, a regression, or something not working as expected                                |
| `Task`  | A well-scoped piece of work: tooling improvement, refactor, chore, or low-effort feature (Effort = Low)                |
| `Story` | A broader feature request or improvement that requires discussion, design, or multiple tasks (Effort = Medium or High) |

**Heuristic**: If the estimated Effort is **Medium or High**, this is a strong indicator the issue should be a **Story** (unless it's clearly a bug). Low-effort improvements and chores are typically **Tasks**.

Set the type using `mcp_github_issue_write` (method: `update`) with the `type` parameter.

**Re-evaluate AI-assigned types after new information arrives.** Because future triage runs only reconsider the type when it is null, a type guessed from an initially sparse report would otherwise never be corrected. When re-triaging an issue (e.g. after the author clarifies in a comment), if the existing type was assigned by AI triage and the new information contradicts it, update the type to match — do not skip the type step just because a value is already present.

### Step 5: Match Existing Labels

Review the issue content and determine if any of these existing labels apply. Only add labels that are clearly relevant — do not over-label.

> **Verify before applying.** Label names must match the repository's actual labels exactly. Before adding any label, confirm it exists with `mcp_github_get_label` — assigning a non-existent label fails the whole update. The names in the tables below reflect the repository's current labels (for example, the bug label is `🐛bug`; a plain `bug` label does not exist). Skip any label that no longer exists rather than failing the update.

#### Bug / Issue Type Labels

| Label              | When to apply                                                  |
| ------------------ | -------------------------------------------------------------- |
| `🐛bug`            | Confirmed bug report                                           |
| `🍄🆙improvement`  | Feature request or enhancement                                 |
| `😍niceToHave`     | Nice-to-have, low-priority improvement                         |
| `❓question`       | Issue is asking a question rather than reporting a bug/feature |
| `💬assessment`     | Needs discussion / "we need to talk about it"                  |
| `📗story needed`   | Needs a story in the team backlog for further discussion       |
| `good first issue` | Simple enough for newcomers to tackle                          |

#### Area / Package Labels

| Label                   | When to apply                                |
| ----------------------- | -------------------------------------------- |
| `🏗foundations`         | Relates to `packages/foundations/`           |
| `📦foundations`         | Changes inside foundations folder            |
| `🏘components`          | Relates to `packages/components/`            |
| `🧱components`          | Changes inside components folder             |
| `📺showcases`           | Relates to showcase apps                     |
| `🛠️configuration`       | Relates to configuration/tooling             |
| `🚢📀cicd`              | Relates to CI/CD or GitHub Actions           |
| `🐙🐱‍👤github_actions` | Relates to GitHub Actions specifically       |
| `📕documentation`       | Documentation-related issue                  |
| `patternhub`            | Relates to the Patternhub documentation site |

#### Technology / Framework Labels

| Label           | When to apply                           |
| --------------- | --------------------------------------- |
| `🤘react`       | React-specific issue                    |
| `🅰angular`     | Angular-specific issue                  |
| `🏝vue`         | Vue-specific issue                      |
| `🎨(s)css`      | CSS/SCSS styling issue                  |
| `💻javascript`  | JavaScript-specific issue               |
| `🧬mitosis`     | Relates to Mitosis (component compiler) |
| `🐈‍⬛💨 tailwind` | Relates to Tailwind CSS                 |

#### Feature-Specific Labels

| Label                   | When to apply                           |
| ----------------------- | --------------------------------------- |
| `🧭navigation`          | Relates to Header/Navigation components |
| `💊tabs`                | Relates to Tabs component               |
| `↕️accordion`           | Relates to Accordion component          |
| `⏏️custom-select`       | Relates to Custom Select component      |
| `🛸 popover`            | Relates to Popover component            |
| `⚓️ anchor positioning` | Relates to CSS anchor positioning       |
| `👾SSR`                 | Server-Side Rendering issues            |
| `👂accessibility`       | Accessibility issues/improvements       |

#### Process Labels

| Label              | When to apply                                  |
| ------------------ | ---------------------------------------------- |
| `🧪test`           | Relates to testing                             |
| `💡copilot`        | Relates to AI/copilot tooling                  |
| `🕵🏻‍♂️ MCP`           | Relates to MCP server tooling                  |
| `🔥breakingChange` | Issue describes or requires a breaking change  |
| `🚗🥇🚬alpha`      | Relates to components currently in alpha state |
| `legacy`           | Relates to legacy code/patterns                |

Add matching labels alongside the `🤖ai-triaged` label (see next step).

### Step 6: Add AI Triage Label

Add the label `🤖ai-triaged` to mark that this issue has been processed by the AI triage bot.

**Label creation**: Before assigning any label, verify it exists using `mcp_github_get_label`. The GitHub REST API does **not** auto-create labels on assignment — applying a non-existent label fails the entire update with a validation error and the issue is never marked, so the batch run keeps re-selecting it.
The configured GitHub MCP toolset has no label-creation tool, so if `🤖ai-triaged` does not exist, it must be created out-of-band first: ask a maintainer to create it, or create it via `gh label create "🤖ai-triaged" --color 7057ff --description "Issue triaged by AI bot"`. Never attempt to assign a label that does not yet exist.

**Preserving existing labels**: To avoid accidentally removing labels added by other users or automations, always **re-read the current labels** immediately before updating (using `mcp_github_issue_read` method `get_labels`). Then merge the new labels into the current set. Use `mcp_github_issue_write` (method: `update`) with the **complete merged label list** (all existing labels + new labels to add).

### Step 7: Post Summary Comment

Post a comment on the issue using `mcp_github_add_issue_comment` with this structure:

```markdown
🤖 **AI Triage Summary**

> ⚠️ This is an automated analysis generated by a bot. It may contain inaccuracies. A human maintainer will review this issue.

### Template Completeness

<completeness assessment — ✅/⚠️/❌ with details on what's present and what's missing>

### 🔗 Related Issues & PRs

<list any duplicate issues, related open/closed issues, or PRs that address the same topic. If nothing found, state "No related issues or PRs found.">

### Suggested Solution

<brief analysis of what a solution could look like, referencing relevant packages/files if possible>

### Temporary Workaround

<if applicable, describe a workaround users can apply until this is resolved. If no workaround is apparent, state "No obvious workaround identified.">

### Triage Details

| Field              | Value    |
| ------------------ | -------- |
| Priority           | <value>  |
| Effort             | <value>  |
| Labels added       | <list>   |
| Community feedback | <yes/no> |

---

<sub>🤖 Generated by AI triage bot · [How this works](https://github.com/db-ux-design-system/core-web/blob/main/.kiro/steering/issue-triage.md)</sub>
```

### Step 8: Handle Missing Information

If the issue is rated ❌ **Incomplete**, also ask the author for clarification in the comment:

```markdown
### ❓ Missing Information

To help us resolve this faster, please provide:

- <list specific missing required fields>
```

**Important**: For incomplete issues, do **NOT** add the `🤖ai-triaged` label yet. Instead, add a `⏳waiting-for-info` label (or equivalent). This ensures the issue will be re-triaged in subsequent batch runs once the author provides the missing information. Only add `🤖ai-triaged` after the issue is rated ✅ Complete or ⚠️ Partial.

---

## Batch Issue Triage

When the user asks to triage all new/unprocessed issues (e.g. "check all new issues", "triage open issues"), follow this workflow:

### Step 1: Fetch Untriaged Issues

Search for open issues that do NOT have the `🤖ai-triaged` label:

```markdown
Use mcp_github_list_issues with:

- owner: db-ux-design-system
- repo: core-web
- state: OPEN
- perPage: 100
```

**Paginate**: Follow `pageInfo.endCursor` with `after` parameter until `hasNextPage` is false. Collect all pages before filtering.

Then filter out:

- Issues that already have the `🤖ai-triaged` label.
- Issues that carry the `⏳waiting-for-info` label **and** have not been updated since they were last triaged. Compare the issue's `updatedAt` with the timestamp of the bot's last triage comment (or the time the label was applied): only re-triage a waiting issue once its `updatedAt` is newer — i.e. the author has actually added the missing information. This prevents reprocessing unchanged incomplete issues and posting a duplicate missing-information comment on every batch run.

### Step 2: Generate Spec with Tasks

Create a spec file at `.kiro/specs/issue-triage-batch/tasks.md` listing each untriaged issue as a task:

```markdown
# Issue Triage Batch

Triage all open issues that haven't been processed by the AI bot yet.

## Tasks

- [ ] Triage issue #<number>: <title>
- [ ] Triage issue #<number>: <title>
- [ ] Triage issue #<number>: <title>
      ...
```

### Step 3: Execute Tasks

Process each task sequentially using the **Single Issue Triage Workflow** (Steps 1–8 above).

After completing each issue, mark the task as done in the spec file:

```markdown
- [x] Triage issue #<number>: <title>
```

### Step 4: Cleanup

After all tasks are processed, delete the `.kiro/specs/issue-triage-batch/` directory to avoid accumulating stale spec files.

---

## Notes

- **Never close issues** — Only triage and annotate. Humans decide on resolution.
- **Be conservative with Priority** — When unsure, lean toward Medium.
- **Effort is about implementation complexity** — Not urgency. A simple but urgent fix is Low effort + High priority.
- **Respect existing labels** — Do not remove labels that were already on the issue. Only add new ones.
- **Multiple issues in one run** — Use the batch workflow to avoid rate limiting and keep progress tracked.
