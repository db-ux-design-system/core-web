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
| **Node.js** (≥ 22)              | Runtime environment                                                                      |
| **TypeScript**                  | Type safety, consistent with the rest of the monorepo                                    |
| **`@modelcontextprotocol/sdk`** | Official MCP SDK — provides `McpServer`, transport classes, and tool/resource primitives |
| **`tsx`**                       | Development runner (no separate build step required)                                     |
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
│       │   ├── tokens/          # Prebuild copy of compiled token files (for npx standalone)
│       │   └── visuals/         # Curated reference images
│       └── src/
│           ├── index.ts
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

**Fallback for standalone (npx):** The `prebuild` step copies guides into `assets/migration/` so they ship with the published package. At runtime, `collectMigrationGuides()` in `build-manifest.ts` checks `MIGRATION_DIR` (monorepo) first, then falls back to `MIGRATION_ASSETS_DIR` (standalone).

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
| `foundations/scss/defaults/default-variables.scss` | All primitive `--db-*` values (rem, px, box-shadow)     |
| `foundations/build/styles/density/classes/all.css` | Density class overrides (expressive/regular/functional) |

Other categories (`colors`, `typography`, `animation`, `transitions`) continue to use raw SCSS from the manifest, since those files contain direct variable declarations without loops.

**Multiline handling:** The `readFilteredLines()` function detects when a CSS declaration spans multiple lines (e.g. elevation box-shadows) and captures continuation lines.

**Fallback for standalone (npx):** The `prebuild` step copies both compiled files into `assets/tokens/`. The `resolveTokenFile()` function checks the monorepo path first, then falls back to the assets directory.

## Prebuild Pipeline

The `prebuild` script runs automatically before every `build` and ensures the `assets/` directory contains all files needed for standalone operation:

```text
prebuild:migration      → cpr docs/migration/db-ui/ → assets/migration/
prebuild:tokens-dir     → mkdir -p assets/tokens/
prebuild:token-defaults → cpr foundations/.../default-variables.scss → assets/tokens/
prebuild:token-density  → cpr foundations/.../density/classes/all.css → assets/tokens/
```

The `"files"` array in `package.json` includes `"assets"`, so all prebuild outputs are shipped with the npm package.

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

During development inside the monorepo, `tsx` can be used for live file access:

```json
{
	"mcpServers": {
		"db-ux": {
			"command": "npx",
			"args": ["tsx", "packages/mcp-server/src/index.ts"]
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
| `verify_migrated_code`         | Writes generated code to a temp file, runs `tsc --noEmit`, and returns diagnostics. Max 3 retries.                                                                               |
| `get_component_visual`         | Returns a downsampled screenshot (≤ 1.15 MP) as Base64. Opt-in only.                                                                                                             |
| `analyze_v2_migration`         | Scans a file for DB UI v2 patterns (components, colors, icons) and returns a JSON report with line numbers and deterministic migration suggestions. Call FIRST before migrating. |

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
- Compiled token files for spacing/elevation/density (read at runtime via `TOKEN_COMPILED_FILES`)

## Development

```bash
# Install dependencies (from monorepo root)
npm install

# Start server directly (development mode, live file access)
npm run dev --workspace=packages/mcp-server

# Production build (generates manifest + standalone bundle)
npm run build --workspace=packages/mcp-server
```
