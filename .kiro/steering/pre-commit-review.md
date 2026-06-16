---
inclusion: manual
---

# Pre-Commit Review Steering

Guide for self-reviewing code before committing and pushing to a new branch.

## When to Use

Activate this steering (`#pre-commit-review`) before committing changes to ensure code quality and compliance with project standards.

## Pre-Commit Review Workflow

### Step 1: Review Changed Files

Run `git status --short` to discover the complete set of changes (staged, unstaged, and untracked files). Then inspect the actual diffs:

- `git diff` — unstaged changes
- `git diff --cached` — staged changes
- For untracked files, read them directly

### Step 2: Self-Review Checklist

Go through the PR template checklist from `.github/PULL_REQUEST_TEMPLATE.md`:

<!-- markdownlint-disable MD018 -->

#[[file:.github/PULL_REQUEST_TEMPLATE.md]]

<!-- markdownlint-enable MD018 -->

Verify each item:

#### Code Quality

- [ ] Self-review the code — read every changed line as if reviewing someone else's PR
- [ ] No hardcoded values, magic numbers, or debug code left in (`console.log`, `debugger`, `TODO` hacks)
- [ ] No commented-out code left behind
- [ ] No unintended file changes (check `git status --short` for surprises)

#### Validation

- [ ] Tests added/updated that cover the changes
- [ ] Tested across all relevant frameworks (React, Angular, Vue) if applicable
- [ ] Run `pnpm run build` — verify it passes
- [ ] Run `pnpm run test` — verify tests pass
- [ ] Run `pnpm run lint` — verify no lint errors (known issue: may fail if Nuxt showcase hasn't been run — see AGENTS.md)
- [ ] Run `pnpm run build-outputs` — verify framework outputs build (required before every commit per AGENTS.md, especially for component changes)

#### General

- [ ] Commit message follows conventional commits format (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`)
- [ ] If architecture, structure, or conventions changed inside a `packages/*` folder, the corresponding `AGENTS.md` has been updated
- [ ] Changeset added if changes affect `packages/components/src` or `packages/foundations/scss`

#### Changeset Validation

If a changeset is required (changes in `packages/components/src` or `packages/foundations/scss`):

- For `packages/components/src` changes, verify the changeset frontmatter includes **up to five** required packages:
    - `@db-ux/core-components`
    - `@db-ux/ngx-core-components`
    - `@db-ux/react-core-components`
    - `@db-ux/wc-core-components`
- **Validate the bump level against the diff** — presence alone is not enough; an invalid `patch`/`minor` can publish a breaking change under a non-major version. For each affected package, confirm the declared bump matches the actual change:
    - **`major`** — a breaking change. Per `packages/components/AGENTS.md`, this is **required** whenever a prop in any `model.ts` is removed, renamed, or its type changed. Diff every changed `model.ts` to catch these.
    - **`minor`** — a new, backwards-compatible feature, e.g. of a prop is added in any `model.ts`
    - **`patch`** — a backwards-compatible bug fix
- If the diff warrants a `major` bump but the changeset declares `patch`/`minor` (or vice versa), fix the changeset before committing.
    - `@db-ux/v-core-components`
- For `packages/foundations/scss` changes, verify the changeset includes `@db-ux/core-foundations`

### Step 3: Design System Compliance

If changes touch component or styling code:

- [ ] No hardcoded colors — use `variables.$db-*` (SCSS) or `var(--db-*)` (CSS)
- [ ] No hardcoded spacing or sizing — use design tokens
- [ ] No `!important` in SCSS
- [ ] No excessive nesting in SCSS — keep it readable and maintainable
- [ ] SCSS files include `@use "@db-ux/core-foundations/build/styles/variables";` when using token variables
- [ ] No `border: 0` / `border: none` — use `@extend %transparent-border`
- [ ] Interactive elements use `@include helpers.hover { ... }` (no manual `cursor: pointer`)

### Step 4: Mitosis Checks (if `.lite.tsx` changed)

- [ ] No complex function calls in JSX property bindings that break code generation (simple helpers like `cls(...)` are fine)
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

1. **Create and switch to a new branch** (if not already on one):

    ```bash
    git switch -c <branch-name>
    ```

2. **Branch naming** — use `-` as separator (e.g. `feat-my-feature`, `fix-button-style`). Never use `/` — it breaks preview URLs.

3. **Stage specific files** — prefer `git add <file>` over `git add .`

4. **Commit message format**:

    ```markdown
    <type>: <short description>

    <summary of what changed and why>
    ```

5. **Let Husky run** — Do NOT use `--no-verify` unless Husky blocks due to a missing `.env` `COMMIT_MAIL`. The pre-commit hook validates the branch name, checks `COMMIT_MAIL`, and runs `lint-staged` (linting + Prettier). These checks must pass before pushing.

6. **Push with tracking**: `git push -u origin <branch-name>`

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
pnpm run build-outputs # ~2min — framework outputs build
```

## Common Pre-Commit Mistakes

- Forgetting to add a changeset for component/foundation changes
- Changeset missing required packages (component changes need all 5 framework packages)
- Leaving `console.log` or debug statements
- Committing generated `output/` files that should only change via `.lite.tsx`
- Branch names with `/` (breaks CI preview URLs)
- Using `--no-verify` unnecessarily — Husky runs branch name validation, `COMMIT_MAIL` check, and `lint-staged` (linting + Prettier). Only skip if `.env` `COMMIT_MAIL` is missing.
- Committing on `main` instead of creating a feature branch first
