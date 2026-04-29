# DB UX Design System – MCP Server

## Purpose

This MCP server (Model Context Protocol) gives LLMs (e.g. Amazon Q, GitHub Copilot, Claude) structured access to the UI components and code examples of the DB UX Design System. All communication happens exclusively over **stdio**, so the server can be started as a local child process by any MCP-compatible client.

Concrete use cases:

- An LLM asks for the API of a component (e.g. `DBButton`) and receives the Mitosis source file along with generated framework outputs.
- An LLM looks up usage examples for a component in React, Angular, or Vue.
- An LLM checks which components are available in the design system.

## Tech Stack

| Technology                      | Purpose                                                                                  |
| ------------------------------- | ---------------------------------------------------------------------------------------- |
| **Node.js** (≥ 24)              | Runtime environment (native TypeScript execution via type stripping)                     |
| **TypeScript**                  | Type safety, consistent with the rest of the monorepo                                    |
| **`@modelcontextprotocol/sdk`** | Official MCP SDK — provides `McpServer`, transport classes, and tool/resource primitives |
| **`esbuild`**                   | Production build into a single standalone ESM bundle                                     |

## Monorepo Structure (relevant to this server)

```text
core-web/
├── docs/
│   └── migration/
│       └── db-ui/                   # Single source of truth for DB UI → DB UX migration guides
│           ├── color-migration.md
│           ├── component-migration.md
│           ├── general-migration.md
│           └── icon-migration.md
├── packages/
│   ├── components/
│   │   └── src/
│   │       └── components/
│   │           └── {component}/
│   │               ├── {component}.lite.tsx
│   │               ├── model.ts
│   │               ├── docs/                       # Component-specific markdown docs
│   │               └── showcase/
│   │                   └── {component}.showcase.lite.tsx
│   ├── foundations/
│   │   ├── src/
│   │   │   └── all-icons.ts
│   │   ├── scss/
│   │   │   ├── colors/_variables.scss              # Token source: colors (direct SCSS)
│   │   │   ├── fonts/_variables.scss               # Token source: typography (direct SCSS)
│   │   │   ├── density/_variables.scss             # Token source: density (raw – uses @each)
│   │   │   ├── animation/_animations.scss          # Token source: animation (direct SCSS)
│   │   │   ├── animation/_transitions.scss         # Token source: transitions (direct SCSS)
│   │   │   ├── _variables.scss                     # Token source: spacing (raw – uses @each)
│   │   │   └── defaults/
│   │   │       └── default-variables.scss          # ★ COMPILED: all primitive token values
│   │   ├── docs/                                   # Foundation markdown docs
│   │   └── build/
│   │       └── styles/
│   │           └── density/classes/
│   │               └── all.css                     # ★ COMPILED: density class overrides
│   └── mcp-server/                                 # This package
│       ├── assets/
│       │   ├── migration/       # Prebuild copy of docs/migration/db-ui/ (for npx standalone)
│       │   └── tokens/          # Prebuild copy of compiled token files (for npx standalone)
│       └── src/
│           ├── server.ts
│           ├── types.ts
│           ├── build-manifest.ts
│           ├── manifest.json    # Generated — do not edit manually
│           ├── tools/
│           ├── prompts/
│           └── utils/
└── output/
    ├── react/src/components/{component}/examples/
    ├── angular/src/components/{component}/examples/
    └── vue/src/components/{component}/examples/
```

## Architecture Decisions (ADRs)

### ADR-1: Single Source of Truth for Migration Guides

**Status:** Implemented (April 2026)

**Problem:** Migration guides existed in two locations (`packages/mcp-server/docs/migration/` and `docs/migration/db-ui/`) with divergent content. The MCP-server copies contained compact LLM-optimized mappings; the root copies contained verbose human-readable prose. This caused hallucinations when guides contradicted each other.

**Decision:** The single source of truth lives at `docs/migration/db-ui/` in the monorepo root. The `db-ui-` filename prefix was stripped (redundant inside the `db-ui/` directory). The MCP-server no longer has its own `docs/` folder.

**Runtime resolution:** The `prebuild` step copies guides into `assets/migration/` so they ship with the published package. At runtime, migration guides are read exclusively from the embedded manifest (built from `assets/migration/`). There is no fallback to monorepo source paths.

### ADR-2: Defense-in-Depth Filtering for docs_search

**Status:** Implemented (April 2026)

**Problem:** The `docs_search` tool previously indexed the entire `docs/` tree, including ADRs, research documents, `.vitepress` internals, and migration guides. This polluted the AI context with irrelevant content and wasted tokens.

**Decision:** Two-layer filtering:

1. **Build-time** (`build-manifest.ts`): `DOCS_WHITELIST_DIRS` restricts traversal to `packages/components/src/components/` and `packages/foundations/docs/` only. No other directories are scanned.
2. **Runtime** (`tools/docs.ts`): `DOCS_ALLOWED_PREFIXES` validates every manifest entry before returning it. Even if the manifest were corrupted or stale, blacklisted content would never reach the LLM.

Migration guides are served exclusively through the dedicated `list_migration_guides` / `get_migration_guide` tools.

### ADR-3: Compiled Token Files for Spacing, Elevation, and Density

**Status:** Implemented (April 2026)

**Problem:** The `get_design_tokens` tool read raw SCSS source files. For categories like `spacing`, `density`, and `elevation`, these files contain `@each` loops and `mixin` calls — the LLM received unexpanded SCSS code instead of usable CSS custom property values (e.g. `0.75rem`, box-shadow strings).

**Decision:** Three categories (`spacing`, `elevation`, `density`) now read from **compiled** files that contain concrete primitive values:

| Source file                                        | Contains                                                |
| -------------------------------------------------- | ------------------------------------------------------- |
| `foundations/scss/defaults/default-variables.scss` | All primitive `--db-*` values (whitelabel theme)        |
| `@db-ux/db-theme/.../\_default_variables.scss`     | All primitive `--db-*` values (DB brand theme) ★ used   |
| `foundations/build/styles/density/classes/all.css` | Density class overrides (expressive/regular/functional) |

Other categories (`colors`, `typography`, `animation`, `transitions`) continue to use raw SCSS from the manifest, since those files contain direct variable declarations without loops.

**Multiline handling:** The `readFilteredLines()` function detects when a CSS declaration spans multiple lines (e.g. elevation box-shadows) and captures continuation lines.

**Asset resolution:** The `prebuild` step copies both compiled files into `assets/tokens/`. The `resolveTokenFile()` function reads strictly from `assets/tokens/` — there is no monorepo fallback. If the file is missing, `null` is returned and the server surfaces the error.

## Prebuild Pipeline

NPM lifecycle scripts (`prebuild`, `preinstall`) are **disabled** in this monorepo. The prebuild step is chained directly into the `build` script via `&&`:

```json
"build": "node scripts/prebuild.ts && node esbuild.js"
```

The prebuild script (native TypeScript, Node 24) copies assets for standalone (npx) operation:

```text
prebuild:migration      → cpr docs/migration/db-ui/ → assets/migration/
prebuild:tokens-dir     → mkdir -p assets/tokens/
prebuild:token-defaults → cpr @db-ux/db-theme/.../_default_variables.scss → assets/tokens/db-variables.scss
prebuild:token-density  → cpr foundations/.../density/classes/all.css → assets/tokens/ (soft-fail: build artifact)
```

**Hard vs. soft failures:**

- Migration docs and DB theme tokens **must** exist → hard error (`throw new Error`)
- Density CSS is a build artifact from foundations → soft warning (may not exist before `npm run build` in foundations)

The `"files"` array in `package.json` includes `"assets"`, so all prebuild outputs are shipped with the npm package.

**⚠️ Build artifacts in `assets/migration/` and `assets/tokens/` must NEVER be committed to Git.** The `.gitignore` excludes their contents while preserving the directories via `.gitkeep`.

## Critical Development Rules

### ESM Only

This package is `"type": "module"`. **Never use `require()`** — always use `import` (top-level or dynamic `await import()`). The `require('node:fs')` anti-pattern will crash at runtime.

### Node 24 Native TypeScript

Build scripts (like `prebuild.ts`) run as native TypeScript via Node 24's type stripping. Tools like `tsx` or file extensions like `.mjs` are not needed.

### Build Parity (Strict Assets-Only Reading)

The MCP server must **never** fall back to monorepo source paths (`packages/foundations/...`) at runtime. It must strictly read from its own built `assets/` directory. This ensures that build failures are caught immediately instead of being silently masked by reading raw source files.

### File System Safety

When reading user-supplied file paths:

1. Validate with path traversal protection (`resolveSafePath`)
2. Check `existsSync()` before accessing
3. Call `stats.isFile()` after `stat()` — directories cause `EISDIR` crashes with `readFile()`

### Cross-Platform Path Normalization

Always normalize paths (convert `\` to `/`) before string comparisons like `.includes()` or `.startsWith()`. Windows manifest keys contain backslashes which break hardcoded forward-slash checks.

### Gentle Migration (No Aggressive HTML Replacement)

- **Do NOT** blindly replace `<a>` tags with `DBLink` — this breaks framework routing (e.g. react-router `<Link>`)
- **Do NOT** force-replace generic `<div>` elements with `DBStack`/`DBSection`/`DBCard` — plain `<div>` is valid HTML
- Only replace native elements when they are explicitly used as UI components

### DB UX v2 vs v3 Terminology

- **v2**: `cmp-*`, `elm-*`, `rea-*` were **CSS classes**, not HTML tags. The custom elements were `<db-*>`.
- **v3**: Uses CSS classes like `db-card`, `db-button` with `data-variant` for variants and `type="button"` on buttons.

## Communication

The server uses `StdioServerTransport` from the MCP SDK. It is started as a child process by the MCP client:

```json
{
	"mcpServers": {
		"db-ux": {
			"command": "npx",
			"args": ["-y", "@db-ux/mcp-server", "db-ux-mcp"]
		}
	}
}
```

During development inside the monorepo, Node 24 runs TypeScript natively:

```json
{
	"mcpServers": {
		"db-ux": {
			"command": "node",
			"args": ["packages/mcp-server/src/index.ts"]
		}
	}
}
```

## MCP Concepts in This Server

### Tools (LLM-callable functions)

| Tool                           | Description                                                                                                                                                                      |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `list_components`              | Returns all available component names                                                                                                                                            |
| `get_component_props`          | Returns the raw `model.ts` content for a component                                                                                                                               |
| `get_component_details`        | Returns the list of example names from the showcase file                                                                                                                         |
| `get_example_code`             | Returns generated framework-specific source for a component example                                                                                                              |
| `list_icons`                   | Returns all valid icon names from `all-icons.ts`                                                                                                                                 |
| `list_design_token_categories` | Returns all available design token categories (incl. `elevation`)                                                                                                                |
| `get_design_tokens`            | Returns CSS custom properties for a token category. For spacing/elevation/density: compiled primitive values. For colors/typography/animation/transitions: SCSS declarations.    |
| `docs_search`                  | Searches component and foundation docs only (whitelisted). Migration guides, ADRs, and research docs are excluded.                                                               |
| `list_migration_guides`        | Returns all available migration guide names (e.g. `color-migration`, `component-migration`)                                                                                      |
| `get_migration_guide`          | Returns the full markdown content of a specific migration guide                                                                                                                  |
| `verify_migrated_code`         | Instructs the LLM to verify changes using the project's own scripts (typecheck, lint, build) from package.json. No temp files or hardcoded compilers.                            |
| `scan_v2_migration`            | Scans a file for DB UI v2 patterns (components, colors, icons) and returns a JSON report with line numbers and deterministic migration suggestions. Call FIRST before migrating. |

### Manifest (embedded data)

At build time, `build-manifest.ts` collects all component metadata and example source code into `src/manifest.json`. This file is bundled into the final `index.js` so the server can operate without access to the monorepo source tree — for example when invoked via `npx @db-ux/mcp-server` from a consumer project.

**What goes into the manifest:**

- Component props, example names, and per-framework example code
- Icon list
- SCSS token sources for colors, typography, animation, transitions
- Whitelisted documentation (component docs + foundation docs only)
- Migration guides (from `docs/migration/db-ui/` or `assets/migration/` fallback)

**What does NOT go into the manifest:**

- ADRs, research docs, `.vitepress` internals
- Structured `assets/tokens/tokens.json` with categorised design tokens (generated by prebuild from compiled CSS sources)

## Development

```bash
# Install dependencies (from monorepo root)
npm install

# Start server directly (development mode, live file access)
npm run dev --workspace=packages/mcp-server

# Production build (generates manifest + standalone bundle)
npm run build --workspace=packages/mcp-server
```
