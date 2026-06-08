---
inclusion: manual
---

# Code Review Steering

Guide for performing PR code reviews in this repository using GitHub MCP tools.

## Review Workflow

### Step 1: Identify the PR

**Single PR review:** Ask the user for:

- The PR number to review
- The repository owner and name (default: the current repo)

**Batch review mode:** If the user does not mention a specific PR (e.g. "review my open PRs", "review all PRs"), use the batch review workflow described below.

### Batch Review Mode

When no specific PR is given, create a Kiro spec with tasks for each open PR:

1. **List open PRs**: Use `mcp_github_list_pull_requests` (state: `open`) to get all open PRs in the repository.
2. **Check for prior AI review timestamp**: For each PR, read its description body. Look for a section like:
    ```
    <!-- AI-REVIEW-TIMESTAMP: 2026-06-08T12:00:00Z -->
    ```
3. **Compare with latest commit**: Use the PR's `head.sha` and compare with `mcp_github_list_commits` to check if there are commits after the timestamp.
4. **Generate a spec with tasks**: Create a `.kiro/specs/code-review-batch/tasks.md` with one task per PR:
    - If a timestamp exists AND no new commits since then → mark the task as `optional` (skip review)
    - If no timestamp or new commits exist → mark the task as `pending` (needs review)
5. **Execute tasks**: Process each pending task using the normal review workflow (Steps 2–6).

### AI Review Timestamp

After completing a review for a PR, **always update the PR description** to include or update the AI review timestamp. Use `mcp_github_update_pull_request` to append/update this HTML comment at the end of the PR body:

```
<!-- AI-REVIEW-TIMESTAMP: <ISO-8601-UTC> -->
```

Example:

```
<!-- AI-REVIEW-TIMESTAMP: 2026-06-08T14:30:00Z -->
```

This allows subsequent batch reviews to skip PRs that haven't changed since the last review.

### Step 2: Gather PR Details and Checkout the Branch

First, get the PR details to determine the head branch:

1. Use `mcp_github_pull_request_read` with method `get` to get the PR details including the head branch name and head repository.
2. Ensure your local worktree is clean (`git status --short` should be empty). If not, stash or commit local changes first.
3. Fetch and checkout the PR branch:

```bash
# For PRs from the same repo:
git fetch origin <branch-name>
git checkout <branch-name>

# For PRs from forks (use PR ref):
git fetch origin pull/<number>/head:pr-<number>
git checkout pr-<number>
```

### Step 3: Gather PR Context

Use GitHub MCP tools to gather all necessary context:

1. **PR Details** — `mcp_github_pull_request_read` (method: `get`) for title, description, author, linked issues
2. **PR Diff** — `mcp_github_pull_request_read` (method: `get_diff`) to see all changes
3. **Changed Files** — `mcp_github_pull_request_read` (method: `get_files`) for file list and stats. **Paginate**: continue fetching with incrementing `page` until all files are retrieved.
4. **CI Status** — `mcp_github_pull_request_read` (method: `get_check_runs`) to check if tests pass
5. **Existing Reviews** — `mcp_github_pull_request_read` (method: `get_review_comments`) to see prior feedback threads. **Paginate**: follow `pageInfo.endCursor` with `after` parameter until `hasNextPage` is false.
6. **Review Summaries** — `mcp_github_pull_request_read` (method: `get_reviews`) for submitted approvals, change requests, or review bodies without inline threads.

**Important — Avoid duplicate feedback:** Before posting any comment, check the existing review threads (from step 5) and PR comments. Do not raise an issue that has already been:

- Raised in a prior review thread (resolved or unresolved)
- Dismissed by the PR author with a valid explanation
- Marked as outdated (the code was already changed)

Only comment on genuinely new or unaddressed issues.

### Step 4: Understand Business Context

- Read the linked issue (if any) using `mcp_github_issue_read`
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

Based on the DB UX Design System conventions:

- **Accessibility** — Are changes accessible? Semantic HTML elements, ARIA attributes as complementary annotations if needed, keyboard navigation, screen reader support
- **Design Tokens** — Are hardcoded values used instead of design tokens from foundations?
- **Cross-Framework** — If component changes: do they work across React, Angular, Vue, Web Components?
- **CSS/SCSS** — No `!important` abuse, proper use of CSS custom properties, no hardcoded colors/spacing
- **TypeScript** — No `any` types, proper type narrowing, follow existing project patterns (type aliases for component props)
- **Changesets** — Were changes made in `packages/components/src` or `packages/foundations/scss`? A changeset should be present with all required packages listed.

#### Phase 4: Mitosis & Component Architecture Checks

If the PR touches component source files (`.lite.tsx`, `model.ts`, SCSS, tests):

**Mitosis Rules:**

- `.lite.tsx` is the ONLY editable component source — never edit `output/` directly
- No complex function calls inside JSX property bindings that break code generation — simple helper calls like `cls(...)`, `getBooleanAsString(...)`, `getBoolean(...)` are acceptable as they are established patterns in the codebase
- No `_ref` access inside `onMount` — use `onUpdate` with the initialized-pattern
- No getter functions in `useStore` for derived values — compute in `onMount`/`onUpdate`
- Internal state variables use `_` prefix (e.g. `_active`), never `internal`
- Element ID binding: `id={props.id ?? props.propOverrides?.id}` — never `id={props.id}` alone

**SCSS Rules:**

- Include `@use "@db-ux/core-foundations/build/styles/variables";` when using design token variables (some files may need other imports first, e.g. `@use "sass:map"`)
- Root selector: `.db-<name>`
- Variants via `data-*` attribute selectors: `&[data-variant="brand"]`
- No `border: 0` or `border: none` — use `@extend %transparent-border` (support for High Contrast Mode)
- No manual `cursor: pointer` — use `@include helpers.hover { ... }`
- No excessive nesting — keep it readable and maintainable
- No `!important`
- No hardcoded colors, spacings, sizings, or border-radius values

**model.ts Rules:**

- Props type: `DB<ComponentName>Props` (use type aliases — this is the established project pattern)
- Every prop MUST have a JSDoc comment
- Variant lists MUST be `as const` arrays with derived union types

**Testing Rules (for public standalone components):**

- Every public component MUST have a `.spec.tsx` (Playwright + Axe-Core)
- Include representative screenshot tests with `toHaveScreenshot()` (visual regression) — exhaustive variant coverage is handled by the showcase/E2E snapshot layer
- Include `ariaSnapshot()` + `toMatchSnapshot()` (accessibility structure)
- Wrap tests in `test.describe('DB<Name>', () => { ... })`
- Use `DEFAULT_VIEWPORT` for viewport setting
- Internal/helper components (e.g. `custom-select-dropdown`, `tab-item`) may be tested through their parent component instead of standalone specs

**File Structure (for public standalone components):**

- Check that new public components have the complete file tree: `.lite.tsx`, `.scss`, `.spec.tsx`, `model.ts`, `index.ts`, `index.html`, `docs/`, `examples/`, `showcase/`
- Internal/helper components only need: source, style, model, and index files
- `index.ts` export path must be `./<name>` WITHOUT `.lite` suffix
- Do NOT re-export `./model` in `index.ts`

**Forbidden Patterns (immediate rejection):**

- Inline styles with pixel values
- Invented icon names (must verify via MCP `list_icons`)
- Editing files in `output/`
- Skipping `model.ts`
- Guessing Figma specs without Figma URL
- `aria-disabled` on native `<button>` (use native `disabled`)
- Excluding files in `mitosis.storybook.config.cjs` — fix the example instead

### Step 6: Submit the Review

Use `mcp_github_pull_request_review_write` to submit the review.

**AI Review Identification:** Since the review is posted via a personal access token (PAT) under a human user's avatar, **always prefix the review body and every line comment with 🤖** to make it clear this is an AI-generated review. Example: "🤖 **AI Review** — ..." for the summary body, and "🤖 ..." for each line comment.

**Always add inline line comments** for every specific issue found during review. Each issue should have a comment on the exact line(s) it refers to. Additionally, include a summary body in the review submission that provides an overview of all findings.

**Never APPROVE directly.** Instead:

1. Submit the review as **COMMENT** (not APPROVE).
2. If the PR looks good and has no blocking issues, add a separate PR comment (using `mcp_github_add_issue_comment`) that:
    - Tags the user like `@nmerget` to inform them the PR can be approved
    - Includes a short message like "🤖 Hey @nmerget — this PR looks good to go! You can approve and merge."
    - Includes a fun/celebratory GIF (use a markdown image link to a gif, e.g. from giphy: `![LGTM](https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif)`)

**Correct sequence for reviews with findings:**

1. **Create a pending review**: Call `mcp_github_pull_request_review_write` with method `create` (omit `event` to keep it pending)
2. **Add line comments**: Call `mcp_github_add_comment_to_pending_review` for each specific issue, placed on the relevant line in the diff. Every actionable finding must have its own line comment — do not only summarize in the review body. Prefix each comment with 🤖.
3. **Submit the review**: Call `mcp_github_pull_request_review_write` with method `submit_pending` with event **COMMENT** or **REQUEST_CHANGES** (never APPROVE):
    - **COMMENT** — Minor suggestions, non-blocking feedback
    - **REQUEST_CHANGES** — Blocking issues that must be addressed
    - Prefix the summary body with "🤖 **AI Review**"

**For reviews without issues** (PR looks good), submit as **COMMENT** with a body like "🤖 **AI Review** — No issues found. LGTM!" and then post a separate issue comment tagging the user with a GIF.

## Responding to Review Feedback

When fixing issues raised in a code review, **always reply to each review thread** explaining what was changed:

1. **Reply to every conversation**: After pushing fixes, go through each open review thread and add a reply using `mcp_github_add_reply_to_pull_request_comment`.
2. **Explain what was done**: State which commit contains the fix and briefly describe what was changed and why. Example: "Fixed in abc1234. Changed X to Y because Z."
3. **Do not leave threads unanswered**: Unresolved conversations block merging in many repositories. Even if the fix is obvious, a short acknowledgment helps reviewers verify the fix without re-reading the full diff.
4. **For threads you disagree with**: Explain your reasoning respectfully. If you choose not to make the suggested change, say why.

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

## Review Checklist (Project-Specific)

Based on `.github/PULL_REQUEST_TEMPLATE.md`:

### Code Quality

- [ ] No hardcoded values, magic numbers, or debug code
- [ ] No `any` types in TypeScript
- [ ] Proper error handling
- [ ] No code duplication with existing utilities

### Design System Compliance

- [ ] Uses design tokens from foundations (`variables.$db-*` in SCSS, `var(--db-*)` in CSS)
- [ ] No hardcoded colors, spacing, sizing, or border-radius values
- [ ] Follows component API conventions (consistent prop naming: `DB<Name>Props`)
- [ ] Accessible (WCAG 2.1 AA compliance patterns)
- [ ] Works across supported browsers (check `.browserslistrc`)
- [ ] Mitosis source (`.lite.tsx`) is the only component source edited — not `output/`

### Testing

- [ ] Tests added/updated for the changes
- [ ] Edge cases covered
- [ ] Tests pass in CI (`get_check_runs`)
- [ ] If component change: representative variants tested with `toHaveScreenshot()` and `ariaSnapshot()`

### Documentation & Changesets

- [ ] PR title follows conventional commits (`feat:`, `fix:`, `chore:`)
- [ ] Changeset added if `packages/components/src` or `packages/foundations/scss` changed
- [ ] `AGENTS.md` updated if architecture/conventions changed in a package

### Framework Coverage

- [ ] Changes in `packages/components/src` work for all framework outputs
- [ ] Examples updated in `packages/components/src/components/[name]/examples/`

## What NOT to Review Manually

These are handled by tooling (linters, formatters, CI):

- Code formatting (Prettier)
- Import ordering
- Linting violations (ESLint, Stylelint)
- Spelling (CSpell)

## Common Anti-Patterns to Flag

### TypeScript

- Using `any` instead of `unknown` with type guards
- Missing error handling in async functions
- Floating promises (unhandled `Promise`)
- Overly complex generics where simpler types work
- Missing JSDoc comments on props in `model.ts`

### CSS/SCSS

- `transition: all` (specify properties explicitly)
- Excessive nesting that hurts readability
- Using `!important`
- Hardcoded colors/spacing instead of design tokens (`variables.$db-*` or `var(--db-*)`)
- Animating layout properties (width, height, top, left)
- `border: 0` or `border: none` instead of `@extend %transparent-border`
- Manual `cursor: pointer` instead of `@include helpers.hover { ... }`
- Missing `@use "@db-ux/core-foundations/build/styles/variables";` when token variables are used
- Overriding `padding`/`font-size` via `[data-density="..."]` (tokens should resolve automatically)

### Mitosis / Components

- Complex function calls inside JSX property bindings that break code generation (simple helpers like `cls(...)` are fine)
- Accessing `_ref` inside `onMount` instead of `onUpdate` with initialized-pattern
- Getter functions in `useStore` for derived values
- Internal state without `_` prefix
- Missing `propOverrides?.id` fallback in element ID binding
- Props without proper TypeScript types in `model.ts`
- Missing accessibility attributes (aria-label, role, etc.)
- Exposing dedicated `ariaLabel`/`ariaDescribedby` props (frameworks handle these natively)
- `event.preventDefault()` in button click handlers without form-submission context
- Using `name` prop for labels (use `label` — `name` is for form-grouping)
- Editing generated files in `output/` instead of `.lite.tsx` source
- Inline styles instead of proper CSS classes

### Architecture

- Code in wrong package (foundation code in components, or vice versa)
- Breaking changes without a major changeset
- New dependencies without justification
- Mixing concerns (UI logic + business logic in same file)
- Adding files to `exclude` in `mitosis.storybook.config.cjs` (fix the example instead)
- Missing component files (incomplete file structure for public components)
