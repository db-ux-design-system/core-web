---
inclusion: manual
---

# Code Review Steering

Guide for performing PR code reviews in this repository using GitHub MCP tools.

## Review Workflow

### Step 1: Identify the PR

Ask the user for:

- The PR number to review
- The repository owner and name (default: the current repo)

### Step 2: Checkout the Branch

```bash
git fetch origin
git checkout <branch-name>
```

Use `mcp_github_pull_request_read` with method `get` to get the PR details including the head branch name.

### Step 3: Gather PR Context

Use GitHub MCP tools to gather all necessary context:

1. **PR Details** — `mcp_github_pull_request_read` (method: `get`) for title, description, author, linked issues
2. **PR Diff** — `mcp_github_pull_request_read` (method: `get_diff`) to see all changes
3. **Changed Files** — `mcp_github_pull_request_read` (method: `get_files`) for file list and stats
4. **CI Status** — `mcp_github_pull_request_read` (method: `get_check_runs`) to check if tests pass
5. **Existing Reviews** — `mcp_github_pull_request_read` (method: `get_review_comments`) to see prior feedback

### Step 4: Understand Business Context

- Read the linked issue (if any) using `mcp_github_issue_read`
- Check PR description against the PR template checklist in `.github/PULL_REQUEST_TEMPLATE.md`
- Understand the scope: is this a feature, bugfix, refactor, or chore?

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

- **Accessibility** — Are changes accessible? ARIA attributes, keyboard navigation, screen reader support
- **Design Tokens** — Are hardcoded values used instead of design tokens from foundations?
- **Cross-Framework** — If component changes: do they work across React, Angular, Vue, Web Components?
- **CSS/SCSS** — No `!important` abuse, proper use of CSS custom properties, no hardcoded colors/spacing
- **TypeScript** — No `any` types, proper type narrowing, interfaces over type aliases for objects
- **Changesets** — Were changes made in `packages/components/src` or `packages/foundations/scss`? A changeset should be present.

#### Phase 4: Mitosis & Component Architecture Checks

If the PR touches component source files (`.lite.tsx`, `model.ts`, SCSS, tests):

**Mitosis Rules:**

- `.lite.tsx` is the ONLY editable component source — never edit `output/` directly
- No function calls inside JSX property bindings (e.g. `prop={state.fn()}`) — store in state, update via `onUpdate`
- No `_ref` access inside `onMount` — use `onUpdate` with the initialized-pattern
- No getter functions in `useStore` for derived values — compute in `onMount`/`onUpdate`
- Internal state variables use `_` prefix (e.g. `_active`), never `internal`
- Element ID binding: `id={props.id ?? props.propOverrides?.id}` — never `id={props.id}` alone

**SCSS Rules:**

- Line 1 MUST be: `@use "@db-ux/core-foundations/build/styles/variables";`
- Root selector: `.db-<name>`
- Variants via `data-*` attribute selectors: `&[data-variant="brand"]`
- No `border: 0` or `border: none` — use `@extend %transparent-border` (High Contrast Mode)
- No manual `cursor: pointer` — use `@include helpers.hover { ... }`
- No nesting deeper than 3 levels
- No `!important`
- No hardcoded colors, spacings, sizings, or border-radius values

**model.ts Rules:**

- Props type: `DB<ComponentName>Props`
- Every prop MUST have a JSDoc comment
- Variant lists MUST be `as const` arrays with derived union types

**Testing Rules:**

- Every component MUST have a `.spec.tsx` (Playwright + Axe-Core)
- ALL variants must be tested with `toHaveScreenshot()` (visual regression)
- Include `ariaSnapshot()` + `toMatchSnapshot()` (accessibility structure)
- Wrap tests in `test.describe('DB<Name>', () => { ... })`
- Use `DEFAULT_VIEWPORT` for viewport setting

**File Structure:**

- Check that new components have the complete file tree: `.lite.tsx`, `.scss`, `.spec.tsx`, `model.ts`, `index.ts`, `index.html`, `docs/`, `examples/`, `showcase/`
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

Use `mcp_github_pull_request_review_write` to submit the review:

- **APPROVE** — No blocking issues, code is ready to merge
- **COMMENT** — Minor suggestions, non-blocking feedback
- **REQUEST_CHANGES** — Blocking issues that must be addressed

For individual line comments, use `mcp_github_add_comment_to_pending_review`.

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
- [ ] If component change: all variants tested with `toHaveScreenshot()` and `ariaSnapshot()`

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
- Snapshot differences (handled in CI)

## Common Anti-Patterns to Flag

### TypeScript

- Using `any` instead of `unknown` with type guards
- Missing error handling in async functions
- Floating promises (unhandled `Promise`)
- Overly complex generics where simpler types work
- Missing JSDoc comments on props in `model.ts`

### CSS/SCSS

- `transition: all` (specify properties explicitly)
- Nesting deeper than 3 levels
- Using `!important`
- Hardcoded colors/spacing instead of design tokens (`variables.$db-*` or `var(--db-*)`)
- Animating layout properties (width, height, top, left)
- `border: 0` or `border: none` instead of `@extend %transparent-border`
- Manual `cursor: pointer` instead of `@include helpers.hover { ... }`
- Missing `@use "@db-ux/core-foundations/build/styles/variables";` as line 1
- Overriding `padding`/`font-size` via `[data-density="..."]` (tokens should resolve automatically)

### Mitosis / Components

- Function calls inside JSX property bindings (`prop={state.fn()}`)
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
- Missing component files (incomplete file structure per architecture spec)
