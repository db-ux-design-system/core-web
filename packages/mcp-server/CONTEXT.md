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
│       │   ├── tokens/          # Prebuild-generated tokens.json (structured design tokens)
│       │   └── visuals/         # Pre-optimised static reference images (JPEG, committed to Git)
│       └── src/
│           ├── server.ts
│           ├── types.ts
│           ├── build-manifest.ts
│           ├── manifest.json    # Generated — do not edit manually
│           ├── tools/
│           ├── prompts/
│           ├── data/           # Static typed data (e.g. migration-map.ts)
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

### ADR-3: Structured Token JSON (migration from SCSS/CSS regex parsing)

**Status:** Implemented (April 2026)

**Problem:** The `get_design_tokens` tool previously read raw SCSS/CSS files at runtime and used regex filters (`CATEGORY_LINE_FILTERS`, `readFilteredLines`) to extract relevant lines. For categories like `spacing`, `density`, and `elevation`, the SCSS sources contained `@each` loops and mixins — the LLM received unexpanded code instead of usable values. The regex approach was fragile, required multiline continuation handling, and produced inconsistent output.

**Decision:** The `prebuild` step now parses CSS custom properties from compiled sources (`@db-ux/db-theme/_default_variables.scss` and `foundations/build/styles/density/classes/all.css`) into a single structured `assets/tokens/tokens.json`. This JSON file is categorised by token type (spacing, elevation, colors, typography, etc.) and contains concrete primitive values.

At runtime, `tokens.ts` loads `tokens.json` via `fs.readFile` + `JSON.parse` and returns the requested category as typed JSON. For categories not covered by the JSON (e.g. `animation`, `transitions`), the tool falls back to raw SCSS from the manifest.

**Removed:** `CATEGORY_LINE_FILTERS`, `readFilteredLines`, `readCompiledTokens`, `resolveTokenFile`, `COMPILED_CATEGORIES`, `TOKEN_COMPILED_FILES`.

### ADR-4: Type-Safe Migration Map (migration from Markdown regex parsing)

**Status:** Implemented (April 2026)

**Problem:** The `scan_v2_migration` tool previously parsed Markdown tables from migration guide files (`component-migration.md`, `color-migration.md`, `icon-migration.md`) at runtime using regex (`matchAll`). Functions like `parseComponentMap`, `parseColorMap`, and `parseIconMap` were fragile, required async caching (`ensureMaps`, `getManifest`), and broke silently when the Markdown format changed.

**Decision:** Migration mappings are now defined as a typed TypeScript object in `src/data/migration-map.ts` — the Single Source of Truth. The scanner imports `migrationData` directly (synchronous, no caching needed) and performs lookups against `migrationData.components`, `migrationData.colors`, and `migrationData.icons`.

**Removed:** `parseComponentMap`, `parseColorMap`, `parseIconMap`, async caching logic, and the `.md` files that served as data sources for the scanner.

### ADR-5: Static Visual Assets (no build-time or runtime image processing)

**Status:** Implemented (May 2026)

**Problem:** The previous approach used `sharp` as a devDependency to downsample source PNGs at build time (`scripts/build-visuals.ts`). This added a heavy native C++ dependency to the build toolchain, slowed down prebuild, and complicated CI environments with restricted network access.

**Decision:** Pre-optimised JPEG files are committed directly to `assets/visuals/` in the repository. No build-time image processing step exists. The `sharp` dependency has been removed entirely. At runtime, `tools/visuals.ts` reads the static JPEGs via `fs.readFile` and returns Base64-encoded MCP image blocks.

**Removed:** `scripts/build-visuals.ts`, `src/data/visuals-source/` (original PNGs), `sharp` devDependency.

## Prebuild Pipeline

NPM lifecycle scripts (`prebuild`, `preinstall`) are **disabled** in this monorepo. The prebuild step is chained directly into the `build` script via `&&`:

```json
"build": "node scripts/prebuild.ts && node esbuild.js"
```

The prebuild script (native TypeScript, Node 24) prepares assets for standalone (npx) operation:

```text
prebuild:migration      → cpr docs/migration/db-ui/ → assets/migration/
prebuild:tokens         → parse CSS custom properties from @db-ux/db-theme/_default_variables.scss
                          + foundations/build/density/classes/all.css → assets/tokens/tokens.json
```

**Hard vs. soft failures:**

- Migration docs and DB theme tokens **must** exist → hard error (`throw new Error`)
- Density CSS is a build artifact from foundations → soft warning (tokens.json will be incomplete but valid)

The `"files"` array in `package.json` includes `"assets"`, so all prebuild outputs are shipped with the npm package.

**⚠️ Build artifacts in `assets/migration/` and `assets/tokens/` must NEVER be committed to Git.** The `.gitignore` excludes their contents while preserving the directories via `.gitkeep`. The `assets/visuals/` directory contains pre-optimised static JPEGs that **are** committed to Git.

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

| Tool                           | Description                                                                                                                                                                                                            |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `list_components`              | Returns all available component names                                                                                                                                                                                  |
| `get_component_props`          | Returns the raw `model.ts` content for a component                                                                                                                                                                     |
| `get_component_details`        | Returns the list of example names from the showcase file                                                                                                                                                               |
| `get_example_code`             | Returns generated framework-specific source for a component example                                                                                                                                                    |
| `list_icons`                   | Returns all valid icon names from `all-icons.ts`                                                                                                                                                                       |
| `list_design_token_categories` | Returns all available design token categories (incl. `elevation`)                                                                                                                                                      |
| `get_design_tokens`            | Returns CSS custom properties for a token category. Reads from structured `assets/tokens/tokens.json` (prebuild-generated). Falls back to SCSS from manifest for categories not in JSON (e.g. animation, transitions). |
| `docs_search`                  | Searches component and foundation docs only (whitelisted). Migration guides, ADRs, and research docs are excluded.                                                                                                     |
| `list_migration_guides`        | Returns all available migration guide names (e.g. `color-migration`, `component-migration`)                                                                                                                            |
| `get_migration_guide`          | Returns the full markdown content of a specific migration guide                                                                                                                                                        |
| `verify_migrated_code`         | Instructs the LLM to verify changes using the project's own scripts (typecheck, lint, build) from package.json. No temp files or hardcoded compilers.                                                                  |
| `scan_v2_migration`            | Scans a file for DB UI v2 patterns (components, colors, icons) and returns a JSON report with line numbers and deterministic migration suggestions. Call FIRST before migrating.                                       |
| `list_visuals`                 | Returns all available visual reference names (e.g. dashboard, form, table).                                                                                                                                            |
| `get_visual_reference`         | Returns a pre-optimised visual reference image (max 800×800 px, JPEG q75) as a Base64-encoded MCP image block. No native dependencies at runtime.                                                                      |

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
- Structured `assets/tokens/tokens.json` (prebuild-generated, read separately at runtime)
- Migration scanner data (`src/data/migration-map.ts` — compiled into the bundle, not the manifest)

## Development

```bash
# Install dependencies (from monorepo root)
npm install

# Start server directly (development mode, live file access)
npm run dev --workspace=packages/mcp-server

# Production build (generates manifest + standalone bundle)
npm run build --workspace=packages/mcp-server
```
