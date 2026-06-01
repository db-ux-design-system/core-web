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

    **Interactive**: Will prompt to select frameworks (plain-html, angular, react, vue, stencil, etc.). Default selection is plain-html.
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

**Always add a new changeset when making changes inside the following folders:**

| Folder                      | Packages to include                                                                                                                             |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/components/src`   | `@db-ux/core-components`, `@db-ux/ngx-core-components`, `@db-ux/react-core-components`, `@db-ux/wc-core-components`, `@db-ux/v-core-components` |
| `packages/foundations/scss` | `@db-ux/core-foundations`                                                                                                                       |

Use the following bump types for changeset entries:

- **`patch`** — for bug fixes
- **`minor`** — for new features
- **`major`** — for breaking changes (e.g. a property in any `model.ts` has been added, removed, renamed, or its type has changed)

### How to Add a Changeset

Run the following command and follow the interactive prompts:

```bash
npx changeset
```

- Select the affected packages (see table above).
- Choose `patch` (fix), `minor` (feature), or `major` (breaking change) as the bump type.
- Write a short description of the change.

Alternatively, you can manually create a changeset file in `.changeset/` with a unique name (e.g. `.changeset/my-change.md`) with the packages listed in the YAML frontmatter and the description afterwards:

```markdown
---
"@db-ux/core-components": minor
---

Short description of the feature.
```

```markdown
---
"@db-ux/core-components": patch
---

Short description of the fix.
```

```markdown
---
"@db-ux/core-components": major
---

Short description of the breaking change.
```

## Common Tasks

### Working with Components

- **Generate new component**: `pnpm run generate:component`
- **Component build location**: `packages/components/build/`
- **Framework outputs**: `output/react/`, `output/vue/`, `output/angular/`, `output/stencil/`

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

### GitHub Actions / Pipelines

- Use `!cancelled()` instead of `always()` for controlling the step execution in GitHub Actions. This ensures that steps are skipped if the workflow run has been cancelled, preventing unnecessary execution and resource usage.

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

---

## Pull Request Workflow

When an agent completes a task and commits + pushes to a branch, it **must** follow this workflow:

### 1. Pre-commit Checklist

Before committing, go through every item in `.github/PULL_REQUEST_TEMPLATE.md` and verify it applies to your changes. Do not commit if any applicable item is unresolved.

### 2. Commit & Push

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

### 3. PR Description

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
