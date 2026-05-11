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
    pnpm install --ignore-scripts
    ```

    **NOTE**: Use the `--ignore-scripts` flag because the chromedriver package attempts to download binaries during installation, which fails in restricted corporate networks (e.g., behind firewalls or proxies). This workaround prevents installation errors in such environments.

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
pnpm run test          # Verify all tests pass
pnpm run lint          # NOTE: May fail if Nuxt showcase hasn't been run yet - this is known
pnpm run build-outputs # Verify framework outputs build
```

### Manual Validation Scenarios

**ALWAYS test actual functionality after making changes:**

1. **Component Development Validation**:
    - Run `pnpm run dev` and select `plain-html`
    - Open <http://localhost:5173/> in browser
    - Navigate to components and verify visual rendering
    - Test interactive components (buttons, forms, etc.)

2. **Documentation Site Validation**:
    - Run `pnpm run start`
    - Open <http://localhost:3000> in browser
    - Navigate through component documentation
    - Verify code examples render correctly

3. **Framework-Specific Validation**:
    - Run `pnpm run dev` and select target framework (react, vue, angular)
    - Test component integration in selected framework
    - Verify framework-specific showcase builds: `pnpm run build-showcases`

### Visual Regression Testing

**E2E testing with Playwright** (requires Docker):

```bash
# Generate/update screenshots:
pnpm run regenerate:screenshots
```

**TIMING**: Visual tests take 10+ minutes. NEVER CANCEL. Set timeout to 1800+ seconds.

## Changesets

This repository uses [Changesets](https://github.com/changesets/changesets) to manage versioning and changelogs.

### When to Add a Changeset

**Always add a new changeset when making changes inside the following folders:**

| Folder                                                | Packages to include                                                                                                                             |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/components/src` (if JavaScript is involved) | `@db-ux/core-components`, `@db-ux/ngx-core-components`, `@db-ux/react-core-components`, `@db-ux/wc-core-components`, `@db-ux/v-core-components` |
| `packages/foundations/scss`                           | `@db-ux/core-foundations`                                                                                                                       |

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
pnpm run regenerate:screenshots  # Update visual regression tests material

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

- **Docker registry access**: E2E testing requires Docker and may need proxy configuration
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
2. Adapt those changes into the `showcases/vue-showcase`, `showcases/angular-showcase` and `showcases/react-showcase` folders.
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

### UI Development & MCP Workflow

**The `@db-ux/mcp-server` MCP server is the single source of truth for all UI development. The following rules are MANDATORY and non-negotiable.**

The server is shipped inside `@db-ux/mcp-server`. Start it without installation:

```bash
npx --yes @db-ux/mcp-server
```

Or add it to your MCP client config:

```json
{
	"mcpServers": {
		"db-ux": {
			"command": "npx",
			"args": ["--yes", "@db-ux/mcp-server"]
		}
	}
}
```

#### Before writing any UI code, you MUST call these MCP tools in order

1. `list_components` — verify the component exists in the design system
2. `get_component_props` — load the exact prop API
3. `get_component_details` — list available examples for the component
4. `docs_search` — search guidelines, accessibility docs, or component-specific documentation if needed
5. `get_example_code` — fetch the real generated code for the target framework
6. `list_design_token_categories` — get available token categories if unsure which to query
7. `get_design_tokens` — retrieve spacing, elevation, density, color, and typography tokens
8. `list_icons` — look up the exact icon name before using any icon prop
9. `list_migration_guides` — list all available migration guides before any migration task
10. `get_migration_guide` — load the full content of a specific migration guide
11. `verify_migrated_code` — after generating migrated code, call this tool to get instructions for running the project's own verification scripts (typecheck, lint, build from package.json). Fix errors and retry (max 3 attempts) before presenting code to the user
12. `scan_v2_migration` — **call FIRST when migrating a file.** Scans a source file for v2 CSS classes (`cmp-*`, `elm-*`, `rea-*`), v2 Web Components (`<db-*>`), `db-color-*` tokens, and legacy icons. Returns a JSON report with line numbers and deterministic suggestions.

#### DON'Ts — these are hard violations

- **NEVER** use native HTML elements (`<button>`, `<input>`, `<select>`, `<textarea>`) when a DB UX component exists (e.g. `DBButton`, `DBInput`, `DBSelect`, `DBTextarea`)
- **NEVER** blindly replace `<a>` tags with `DBLink` — this breaks framework routing (e.g. react-router `<Link>`). Only replace `<a>` when it is explicitly styled as a UI action component
- **NEVER** force-replace generic `<div>` elements with `DBStack`/`DBSection`/`DBCard` — plain `<div>` is valid HTML. Only use DB UX layout components when the design explicitly calls for them
- **NEVER** hardcode color values (`#d40000`, `rgb(...)`) — use design tokens exclusively
- **NEVER** write inline styles with magic numbers (`style="margin: 15px"`) — use `var(--db-...)` tokens
- **NEVER** invent or guess icon names — always call `list_icons` first
- **NEVER** output migrated code to the user without calling `verify_migrated_code` first — the self-correction loop (max 3 attempts) is mandatory

#### Migration workflow (MANDATORY when the user asks to migrate, refactor, or upgrade legacy code)

When the user asks you to migrate, refactor, or upgrade code from DB UI, Bootstrap, native HTML, or any older version to DB UX v3, you **MUST** follow this exact 5-step workflow — do NOT skip any step:

1. **File Scan** — Call `scan_v2_migration` with the file path. This returns a deterministic JSON report of all v2 patterns (components, colors, icons) with line numbers and suggestions. Use this as your migration checklist.
2. **Migration Analysis** — Call `list_migration_guides`, then `get_migration_guide` for each relevant guide. Call `docs_search` for component-specific migration docs. Produce a mapping table: Legacy Element → DB UX v3 Component → Rationale.
3. **Component Discovery & Props Retrieval** — Call `list_components` to verify every mapped component. For each: `get_component_props`, `get_component_details`, `get_example_code`. Call `get_design_tokens` to replace hardcoded values. Call `list_icons` to verify icon names.
4. **Code Generation** — Generate the complete migrated code. Do **NOT** show it to the user yet.
5. **Code Verification (MANDATORY)** — Call `verify_migrated_code` to get instructions for running the project's own verification scripts. If errors are found, fix and retry (max 3 attempts).
6. **Final Output** — Present: "Migration Analysis" (mapping table), "Migrated Code" (✅ VERIFIED or ⚠️ WARNING with diagnostics), "Accessibility Statement".

#### DOs

```html
<!-- ✅ CORRECT: DB UX component with token-based spacing -->
<DBButton variant="brand" icon="arrow_right">Continue</DBButton>
<div style="gap: var(--db-spacing-fixed-md)">
	<!-- ❌ WRONG: native element + hardcoded values -->
	<button style="background: #d40000; margin: 15px">Continue</button>
</div>
```

### GitHub Actions / Pipelines

- Use `!cancelled()` instead of `always()` for controlling the step execution in GitHub Actions. This ensures that steps are skipped if the workflow run has been cancelled, preventing unnecessary execution and resource usage.

### MCP Server Development (`packages/mcp-server/`)

When working on the MCP server package, these rules are **mandatory**:

- **ESM only**: The package is `"type": "module"`. **NEVER use `require()`** — use `import` (top-level or dynamic `await import()`). Using `require()` will crash at runtime.
- **No NPM lifecycle hooks**: `prebuild`/`preinstall` hooks are disabled in this monorepo. Chain build steps with `&&` in the `"build"` script (e.g. `"build": "node scripts/prebuild.ts && node esbuild.js"`).
- **Node 24 native TypeScript**: Build scripts (like `prebuild.ts`) run as native TypeScript via Node 24's type stripping. Tools like `tsx` or file extensions like `.mjs` are not needed.
- **Never commit build artifacts**: Files in `assets/migration/` and `assets/tokens/` are generated by the prebuild script. They are git-ignored and must never be committed.
- **Hard CI failures**: Build scripts must `throw new Error()` when required source files are missing. Never `console.warn()` and continue — this causes incomplete packages to be published. Exception: the density CSS file is a build artifact that may legitimately not exist before foundations is built.
- **Strict assets-only reading**: The server must never fall back to monorepo source paths (`packages/foundations/...`) at runtime. Read strictly from `assets/` to avoid masking build failures.
- **File system safety**: After `stat()`, always check `stats.isFile()` before calling `readFile()`. Passing a directory path to `readFile()` causes an unhandled `EISDIR` error that crashes the server.
- **Cross-platform paths**: Always normalize backslashes to forward slashes before path comparisons. Windows manifest keys contain `\` which breaks `.includes('/')` checks.
- **DB UX v2 terminology**: In v2, `cmp-*`, `elm-*`, `rea-*` were **CSS classes**, not HTML tags. The actual custom elements were `<db-*>`. Do not confuse these in migration docs or scanner descriptions.
- **DB UX v3 HTML markup**: Use CSS classes (`class="db-card"`, `class="db-button"`) with `data-variant` for variants and `type="button"` on buttons. Do not invent attributes like `data-variant="card"` on divs.

## Additional Resources

### ESLint Plugin

- Use this file as a reference for the custom ESLint plugin used in this repository: `.amazonq/rules/eslint-plugin-development.md`
