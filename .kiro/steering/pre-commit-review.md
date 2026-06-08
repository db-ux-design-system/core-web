---
inclusion: manual
---

# Pre-Commit Review Steering

Guide for self-reviewing code before committing and pushing to a new branch.

## When to Use

Activate this steering (`#pre-commit-review`) before committing changes to ensure code quality and compliance with project standards.

## Pre-Commit Review Workflow

### Step 1: Review Changed Files

Run `git diff --stat` and `git diff` to identify all modified, added, or deleted files.

### Step 2: Self-Review Checklist

Go through the PR template checklist from `.github/PULL_REQUEST_TEMPLATE.md`:

#[[file:.github/PULL_REQUEST_TEMPLATE.md]]

Verify each item:

#### Code Quality

- [ ] Self-review the code — read every changed line as if reviewing someone else's PR
- [ ] No hardcoded values, magic numbers, or debug code left in (`console.log`, `debugger`, `TODO` hacks)
- [ ] No commented-out code left behind
- [ ] No unintended file changes (check `git diff --stat` for surprises)

#### Validation

- [ ] Tests added/updated that cover the changes
- [ ] Tested across all relevant frameworks (React, Angular, Vue) if applicable
- [ ] Run `pnpm run build` — verify it passes
- [ ] Run `pnpm run test` — verify tests pass
- [ ] Run `pnpm run lint` — verify no lint errors

#### General

- [ ] Commit message follows conventional commits format (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`)
- [ ] If architecture, structure, or conventions changed inside a `packages/*` folder, the corresponding `AGENTS.md` has been updated
- [ ] Changeset added if changes affect `packages/components/src` or `packages/foundations/scss`

### Step 3: Design System Compliance

If changes touch component or styling code:

- [ ] No hardcoded colors — use `variables.$db-*` (SCSS) or `var(--db-*)` (CSS)
- [ ] No hardcoded spacing or sizing — use design tokens
- [ ] No `!important` in SCSS
- [ ] SCSS nesting max 3 levels deep
- [ ] SCSS files start with `@use "@db-ux/core-foundations/build/styles/variables";`
- [ ] No `border: 0` / `border: none` — use `@extend %transparent-border`
- [ ] Interactive elements use `@include helpers.hover { ... }` (no manual `cursor: pointer`)

### Step 4: Mitosis Checks (if `.lite.tsx` changed)

- [ ] No function calls in JSX property bindings
- [ ] No `_ref` access in `onMount` — use `onUpdate` with initialized-pattern
- [ ] Internal state uses `_` prefix
- [ ] `id={props.id ?? props.propOverrides?.id}` pattern used
- [ ] `model.ts` has JSDoc on all props
- [ ] No direct edits to `output/` directory

### Step 5: Security & Sensitive Data

- [ ] No secrets, API keys, or credentials in code
- [ ] No `.env` values committed
- [ ] No sensitive data in test fixtures

### Step 6: Branch & Commit

Once all checks pass:

1. **Stage specific files** — prefer `git add <file>` over `git add .`
2. **Branch naming** — use `-` as separator (e.g. `feat-my-feature`, `fix-button-style`). Never use `/` — it breaks preview URLs.
3. **Commit message format**:

    ```
    <type>: <short description>

    <summary of what changed and why>
    ```

4. **Push with tracking**: `git push -u origin <branch-name>`

### Step 7: PR Description Preparation

Prepare a PR description based on `.github/PULL_REQUEST_TEMPLATE.md`:

- Fill in `Proposed changes` with what was changed and why
- Link the related issue number if applicable
- Check all applicable checklist items
- Note any trade-offs or decisions made

## Quick Validation Commands

```bash
pnpm run build         # ~30s — core packages compile
pnpm run test          # ~10s — tests pass
pnpm run lint          # lint checks (may fail if Nuxt showcase not run)
pnpm run build-outputs # ~2min — framework outputs build (if component changes)
```

## Common Pre-Commit Mistakes

- Forgetting to add a changeset for component/foundation changes
- Leaving `console.log` or debug statements
- Committing generated `output/` files that should only change via `.lite.tsx`
- Branch names with `/` (breaks CI preview URLs)
- Missing `--no-verify` when Husky blocks due to missing `.env` `COMMIT_MAIL`
