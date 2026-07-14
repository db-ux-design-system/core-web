# DB UX Design System v3 Core Web

DB UX Design System v3 Core Web is a monorepo containing CSS/SCSS styles, components, and framework-specific implementations (Angular, React, Vue, Web Components) for the Deutsche Bahn design system.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Required Prerequisites

- **Node.js 24**: Check `.nvmrc` file. Use `node --version` to verify current version.
- **pnpm**: Package manager for dependency management and build scripts.

### Bootstrap and Setup

1. **CRITICAL**: Copy `.env.template` to `.env` and add your email:

    ```bash
    cp .env.template .env
    # Edit .env file: Set COMMIT_MAIL=your.email@example.com
    ```

2. **Install dependencies**:

    ```bash
    pnpm install
    ```

### Build and Test

- **Build core packages**:

    ```bash
    pnpm run build
    ```

    **TIMING**: Takes ~30 seconds. NEVER CANCEL. Set timeout to 120+ seconds.

- **Build all framework outputs**:

    ```bash
    pnpm run build-outputs
    ```

    **TIMING**: Takes ~2 minutes. NEVER CANCEL. Set timeout to 300+ seconds.

- **Run tests**:
    ```bash
    pnpm run test
    ```
    **TIMING**: Takes ~10 seconds. NEVER CANCEL. Set timeout to 60+ seconds.

### Development

- **Start interactive development server**:

    ```bash
    pnpm run dev
    ```

    **Interactive**: Will prompt to select frameworks (angular, react, vue, stencil, etc.). Default selection is react.
    **TIMING**: Takes ~30 seconds to start. Runs on <http://localhost:5173/>

- **Start documentation site (Patternhub)**:
    ```bash
    pnpm run start
    ```
    **TIMING**: Takes ~2 minutes to start. NEVER CANCEL. Set timeout to 300+ seconds.
    **ACCESS**: Runs on <http://localhost:3000> - full design system documentation and examples.

## Validation

### Always Run These Commands Before Committing

```bash
pnpm run build         # Verify core packages build
pnpm run test          # Verify all tests pass, NOTE: May fail for some tests because of a Timeout
pnpm run lint          # NOTE: May fail if Nuxt showcase hasn't been run yet - this is known
pnpm run build-outputs # Verify framework outputs build
```

### Manual Validation Scenarios

**ALWAYS test actual functionality after making changes:**

**Framework-Specific Validation**: Run `pnpm run dev` and select target framework (react, vue, angular), test component integration in selected framework, verify framework-specific showcase builds: `pnpm run build-showcases`

### E2E Testing

Most showcases have a `test:ui` script that opens Playwright in UI mode for local visual testing:

```bash
# Run from the specific showcase directory, e.g.:
cd showcases/react-showcase && pnpm run test:ui
cd showcases/vue-showcase && pnpm run test:ui
cd showcases/angular-showcase && pnpm run test:ui
```

**Do NOT run `pnpm run regenerate:screenshots` locally.** Snapshots are generated automatically in CI/CD.

## Changesets

This repository uses [Changesets](https://github.com/changesets/changesets) to manage versioning and changelogs.

### When to Add a Changeset

**Always add a new changeset when making developer-facing changes inside the following folders:**

> **No changeset needed for code-style-only changes.** If a change is purely cosmetic (formatting, linting fixes, comment rewording, import reordering, renaming internal variables without API impact), it does not require a changeset. Changesets are only necessary when the change affects logic, styling (SCSS/CSS), public APIs, behavior, or any other aspect that is visible to consumers of the packages.

| Folder                      | Packages to include                                                                                                                                                                                 |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/components/src`   | `@db-ux/core-components` (only if the changes also affect styling: SCSS/CSS), `@db-ux/ngx-core-components`, `@db-ux/react-core-components`, `@db-ux/wc-core-components`, `@db-ux/v-core-components` |
| `packages/foundations/scss` | `@db-ux/core-foundations`                                                                                                                                                                           |

Use the following bump types for changeset entries:

- **`patch`** — for bug fixes
- **`minor`** — for new features (e.g. a property in any `model.ts` has been added)
- **`major`** — for breaking changes (e.g. a property in any `model.ts` has been removed, renamed, or its type has changed)

### How to Add a Changeset

Run the following command and follow the interactive prompts:

```bash
pnpm exec changeset
```

- Select the affected packages (see table above).
- Choose `patch` (fix), `minor` (feature), or `major` (breaking change) as the bump type.
- Write a short description of the change.

Alternatively, you can manually create a changeset file in `.changeset/` with a unique name (e.g. `.changeset/my-change.md`) with the packages listed in the YAML frontmatter and the description afterwards.

### Changeset Description Format

The changeset description **must** follow the same conventional prefix style used for git commits (`<type>: <short description>`). Common prefixes (compare to our [conventions](docs/conventions.md)):

- `feat:` — new feature
- `fix:` — bug fix
- `refactor:` — code restructuring without behavior change
- `docs:` — documentation changes

**Examples:**

```markdown
---
"@db-ux/core-components": minor
---

feat: add `size` property to DBButton component
```

```markdown
---
"@db-ux/core-components": patch
---

fix: resolve incorrect focus ring color in high-contrast mode
```

```markdown
---
"@db-ux/core-components": major
---

refactor: rename `colour` property to `color` across all components
```

### Migration Guides for Major Changes

Most `major` changeset entries indicate a breaking change that requires consumers to update their code. In these cases, **always create or update a migration guide** in `docs/migration/`.

- Use the naming convention `vX.x.x-to-vY.0.0.md` (e.g. `v4.x.x-to-v5.0.0.md`).
- If a migration guide for the upcoming major version (determined by the current `version` e.g. in `packages/foundations/package.json`) already exists, append your breaking change to it.
- If none exists yet, create one following the structure of existing guides (see `docs/migration/` for examples).
- Each breaking change entry should have a heading describing what changed and a brief explanation of how to migrate. A table of changed properties could help our users to understand the necessary changes easier than a thousand words.
- **When creating a new migration guide file**, also add it to the migration index list in `README.md` (under "In between DB UX Design System Core versions") so consumers can discover it. Insert it at the top of the list following the existing format.
- **PR labeling:** If the GitHub MCP is available, add the `Breaking Change` label to the pull request. If the MCP is not available, inform the developer to add the `Breaking Change` label manually.

## Common Tasks

### Working with Components

- **Generate new component**: `pnpm run generate:component`
- **Component build location**: `packages/components/build/`
- **Framework outputs**: `output/react/`, `output/vue/`, `output/angular/`, `output/stencil/`
- **Attribute pass-through**: All `data-*` and `aria-*` attributes are automatically forwarded to the element with the `_ref` on it (the component's root or primary element). **Do not create typed props for standard HTML attributes like `aria-label`, `aria-labelledby`, `aria-describedby`, etc.** — they work out of the box in every framework output.

### Working with Figma Code Connect

- **Full guide**: See ["How to Connect Figma Components" documentation](packages/components/docs/how-to-figma-connect.md) for setup, property types, and publishing.
- **Update snapshots** after any change to `.figma.ts` or `.figma.lite.tsx` files:
    ```bash
    pnpm run test:update --workspace=react-figma
    pnpm run test:update --workspace=angular-figma
    pnpm run test:update --workspace=vue-figma
    ```
- **Generate Figma files**: `pnpm run generate:figma --workspace=@db-ux/core-components`
- **Run Figma tests**: `pnpm run test --workspace=react-figma`

### Working with Styles

- **Foundation styles**: `packages/foundations/`
- **Component styles**: `packages/components/src/styles/`
- **Build artifacts**: `packages/foundations/build/` and `packages/components/build/`

### Key Repository Locations

```text
├── packages/
│   ├── foundations/        # Base CSS/SCSS styles and design tokens
│   ├── components/         # Component CSS and build definitions
│   ├── migration/          # Migration utilities between versions
│   └── stylelint/          # DB UX Design System Stylelint plugin for QS
├── output/                 # Framework-specific generated code
│   ├── angular/            # Angular components (@db-ux/ngx-core-components)
│   ├── react/              # React components (@db-ux/react-core-components)
│   ├── vue/                # Vue 3 components (@db-ux/v-core-components)
│   └── stencil/            # Web Components (@db-ux/wc-core-components)
├── showcases/              # Example applications for each framework
└── docs/                   # Documentation files
```

### Package Scripts Reference

```bash
# Development
pnpm run dev                 # Interactive dev server (framework selection)
pnpm run start              # Start Patternhub documentation site

# Building
pnpm run build              # Build core packages (~30 seconds)
pnpm run build-outputs      # Build all framework outputs (~2 minutes)
pnpm run build-showcases    # Build example applications

# Testing & Quality
pnpm run test               # Run test suite (~10 seconds)
pnpm run lint               # Run all linters (known issue: may fail if Nuxt showcase hasn't been run yet; see "Known Issues and Workarounds" below)
# Utilities
pnpm run clean              # Clean build artifacts
pnpm run generate:component # Generate new component scaffolding
```

### Knip: `@public` / `@internal` export tagging

Knip reports unused exports unless they carry a `@public` JSDoc tag. When adding new exports to published packages (`packages/components`, `packages/foundations`, `packages/vite-plugin`, etc.), tag them:

- **`@public`** — intentional public API for consumers. Knip ignores these.
- **`@internal`** or untagged — internal helpers. Knip reports these if unused.

```ts
/** @public */
export function myPublicUtility() {
	/* ... */
}
```

See `docs/conventions.md` for the full convention.

## Known Issues and Workarounds

### Installation Issues

- **chromedriver fails**: Use `pnpm install --ignore-scripts` - this is expected in restricted network environments
- **Font decoding fails**: Expected with placeholder credentials - does not affect basic development

### Build Issues

- **Nuxt-related linting failures**: May fail if Nuxt showcase hasn't been run yet (requires `showcases/nuxt-showcase/.nuxt/tsconfig.json` to be generated)
- **Stencil warnings**: Component prop name conflicts are expected and documented

### Git hook issues

**Husky blocking git commit**: To prevent Husky blocking commits due to missing `COMMIT_MAIL` within `.env` file, just add `--no-verify` to your `git commit` command:

```bash
git commit -m "Your commit message" --no-verify
```

### Network Restrictions

- **Asset downloads**: DB Theme assets require valid credentials from Deutsche Bahn Marketing Portal

## Development Workflows

If possible, start by writing a test that you could use to verify your solution, as well as we could use for ongoing regression testing throughout the product's development.

### Adding a New Component

1. `pnpm run generate:component` - Follow interactive prompts
2. Implement component in `packages/components/src/components/[name]/`
3. Build and test: `pnpm run build && pnpm run test`
4. Generate framework outputs: `pnpm run build-outputs`
5. Test in development server: `pnpm run dev`

### Modifying Existing Components

1. Make changes in `packages/components/src/components/[name]/`
2. Update examples in `packages/components/src/components/[name]/examples/`; showcase files are generated from these and must not be edited manually.
3. **Always run**: `pnpm run build && pnpm run dev`
4. **Manual validation**: Test component behavior in browser
5. **Before committing**: `pnpm run test && pnpm run build-outputs`

### Debugging Build Issues

1. **Check Node.js version**: Must be v24 (see `.nvmrc`)
2. **Clean rebuild**: `pnpm run clean && pnpm run build`
3. **Check dependencies**: `pnpm install --ignore-scripts`
4. **Isolate issue**: Build individual packages using workspace commands

Remember: This is a design system used by Deutsche Bahn applications. Always ensure changes maintain accessibility, consistency, and brand compliance.

## General code styles and approaches

### Dependency pinning and package execution

All npm dependencies are pinned to **exact versions** (no `^` or `~` ranges) for supply-chain security, reproducibility, and deterministic builds. See `docs/dependency-update-strategy.md` for the full rationale.

**Always use `pnpm exec` to run CLI tools** — never `npx` or `pnpm dlx`:

| Command           | Behavior                                                              | Allowed |
| ----------------- | --------------------------------------------------------------------- | ------- |
| `pnpm exec <bin>` | Runs only from locally installed, pinned packages                     | ✅ Yes  |
| `pnpm dlx <pkg>`  | Fetches latest from registry and executes (equivalent to `npx --yes`) | ❌ No   |
| `npx <bin>`       | May fetch latest from registry if not installed locally               | ❌ No   |

`pnpm dlx` and `npx` bypass the lockfile and execute unreviewed code from the registry, defeating the purpose of pinning.

### GitHub Actions / Pipelines

- Use `!cancelled()` instead of `always()` for controlling the step execution in GitHub Actions. This ensures that steps are skipped if the workflow run has been cancelled, preventing unnecessary execution and resource usage.
- **Pin all third-party Actions to full commit SHAs** (not tags) for supply-chain security. Dependabot manages updates. See `docs/dependency-update-strategy.md` for the full rationale.

## Additional Resources

- `packages/agent-cli/AGENTS.md` — CLI tool for generating AI agent instructions
- `packages/components/AGENTS.md` — component authoring, Mitosis, changeset rules
- `packages/foundations/AGENTS.md` — design tokens, assets, SCSS structure
- `packages/migration/AGENTS.md` — migration CLI development
- `packages/postcss-plugin/AGENTS.md` — PostCSS flatten plugin
- `packages/stylelint/AGENTS.md` — Stylelint plugin rules
- `packages/vite-plugin/AGENTS.md` — Vite plugin for optimized CSS
- `packages/eslint-plugin/AGENTS.md` — ESLint plugin rule development
- `packages/mcp-server/AGENTS.md` — MCP server development

**Keep package-level `AGENTS.md` files up to date.** When making changes inside a `packages/*` folder that affect architecture, structure, workflows, or conventions (e.g. adding a new plugin system, deprecating a pattern, introducing a new shared abstraction), update the corresponding `AGENTS.md` in that package as part of the same commit.

## Kiro Steering Files

Manual-inclusion steering files for specialized workflows. Activate in Kiro chat with `#<name>`:

| Steering             | File                                  | Purpose                                                                                                    |
| -------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `#code-review`       | `.kiro/steering/code-review.md`       | Perform a PR code review using GitHub MCP tools (checkout branch, gather context, review, submit feedback) |
| `#pre-commit-review` | `.kiro/steering/pre-commit-review.md` | Self-review checklist before committing and pushing to a new branch                                        |
| `#issue-triage`      | `.kiro/steering/issue-triage.md`      | Triage issues: validate template, label, set priority/effort, post AI summary, batch-process new issues    |

### Kiro File Includes and Linting

Kiro steering files support including external files via `#[[file:<relative_path>]]`. Because this syntax starts with `#` followed by a non-space character, markdownlint flags it as **MD018** (no space after hash on atx-style heading) and Prettier may reformat it. Wrap every Kiro include with lint-suppression comments:

```markdown
<!-- markdownlint-disable MD018 --><!-- prettier-ignore -->

#[[file]]

<!-- markdownlint-enable MD018 -->
```

Always add these comments when creating or editing a `#[[file:...]]` include in any Markdown file.

---

## Pull Request Workflow

When an agent completes a task and commits + pushes to a branch, it **must** follow this workflow:

### 1. Scope Guard — keep the PR focused (run before every commit)

**Run this check automatically as the first step of every commit.** Its goal is to keep a PR strictly limited to its linked issue and to prevent feature creep. Do not skip it, even for small changes.

#### 1.1 Scope analysis

- Determine the linked issue: read it from the branch name, a `resolves #<n>` reference in the PR body/commit, or ask the developer if it cannot be inferred. If the work is genuinely issue-less (e.g. a small chore), treat the task description the developer gave as the scope.
- Compare the full working-tree diff — staged, unstaged, and relevant untracked files (`git status`, `git diff`, `git diff --staged`) — against that scope.
- Classify every change as **in-scope** (required to resolve the issue) or **out-of-scope** (unrelated refactors, drive-by fixes, reformatting of otherwise-untouched files, changes in unrelated packages/components, dependency bumps not needed by the fix, etc.).
- **Generated/expected artifacts count as in-scope** when they are the direct consequence of an in-scope source change: framework outputs (`output/*`), generated showcase files, Playwright snapshots, `pnpm-lock.yaml` updates caused by an in-scope manifest change, and a matching changeset. Do not flag these as feature creep.

#### 1.2 Isolation & proposal

- If everything is in scope, continue with the normal commit workflow below.
- If out-of-scope changes are found, **do not block or silently drop them.** Instead, list the affected files/code blocks and ask the developer, e.g.:
    > "These changes don't appear to belong to the core issue (`#<n>`): `<file/…>`. Should I move them to a separate branch and open a dedicated PR for them?"
- **Wait for an explicit decision. Never commit, push, or extract without the developer's go** (this also satisfies the repo's "commit only on request" rule).

#### 1.3 Automatic extraction (only after approval)

When the developer agrees, extract the out-of-scope changes into their own branch/PR:

1. **Preserve** the out-of-scope changes — `git stash push -- <files…>` (or record the diff / note the commit hashes) so they are not lost.
2. **Branch from the up-to-date target branch** (usually `main`), using `-` as separator (never `/`, it breaks preview URLs):

    ```bash
    git checkout main && git pull --ff-only
    git checkout -b chore-extract-<topic>
    ```

3. **Apply, commit & push** only the extracted changes:
    - restore the stash / re-apply the diff, then stage precisely those files (`git add <files…>`)
    - `git commit -m "<type>: <short description>" -m "<what changed and why>"` (add `--no-verify` if Husky blocks on a missing `.env`)
    - **add a changeset** if the extracted changes touch `packages/components/src` (SCSS/CSS) or `packages/foundations/scss` **and** affect logic, styling, or public APIs — not for code-style-only changes (see "Changesets")
    - `git push origin chore-extract-<topic>`
4. **Open a new PR** via `gh pr create` (or the GitHub MCP) using `.github/PULL_REQUEST_TEMPLATE.md` as the body; link the related issue if one exists.
5. **Clean up the original branch** so the current PR stays focused:
    - `git checkout <original-branch>`
    - revert the extracted changes there, e.g. `git restore --source=main --staged --worktree <files…>` (or `git checkout main -- <files…>`)
    - re-run the Scope Guard to confirm the diff is now scope-clean, then commit the cleanup and push

#### 1.4 Verify both branches

After an extraction, run the relevant checks (`pnpm run build`, `pnpm run test`, `pnpm run lint`) on **both** the original and the extracted branch so neither is left in a broken state.

### 2. Pre-commit Checklist

Before committing, go through every item in `.github/PULL_REQUEST_TEMPLATE.md` and verify it applies to your changes. Do not commit if any applicable item is unresolved.

### 3. Commit & Push

```bash
git add .
git commit -m "<type>: <short description>" -m "<summary of what changed and why>"
git push origin <branch-name>
```

> Branch names must use `-` as separator (e.g. `feat-my-feature`, `fix-button-style`). Never use `/` — it breaks preview URLs.
>
> The second `-m` is the commit body. Always include a concise summary of **what** was changed and **why**. This is used as the PR description.
>
> If Husky blocks the commit due to a missing `.env`, add `--no-verify` (see "Git hook issues" above).

### 4. PR Description

When opening a pull request, use `.github/PULL_REQUEST_TEMPLATE.md` as the PR body. Fill in the `Proposed changes` section with a concise summary of:

- **What** was changed and **why**
- The linked issue number (if applicable)
- Any notable decisions or trade-offs made

Check every checklist item that applies to the changes made.

**Example:**

```markdown
## Proposed changes

Adds `no-missing-label` ESLint rule for `DBInput` that reports when the `label` prop is missing.
Covers React, Angular, and Vue. Includes unit tests and README documentation.

resolves #123
```
