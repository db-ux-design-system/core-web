# @db-ux/agent-cli

This package has two responsibilities:

1. **CLI tool** — scans a project's `node_modules` for installed `@db-ux` packages and writes component documentation into `.github/copilot-instructions.md` for AI coding agents.
2. **Powers bundles** — ships three ready-to-install AI agent powers (`db-ux-consumer-powers`, `db-ux-designer-powers`, `db-ux-maintainer-powers`) that provide structured skills, MCP server wiring, and steering context for working with the DB UX Design System.

## Key Facts

- **ESM only** (`"type": "module"`)
- CLI entry point: `src/cli.ts`, built to `build/index.js` via `esbuild.js`
- Published as a binary: `npx @db-ux/agent-cli`
- Only `db-ux-consumer-powers` and `db-ux-designer-powers` are published (included in `files`). `db-ux-maintainer-powers` is for internal DB UX maintainers and not distributed.

## Scripts

```bash
pnpm run build        # Bundle CLI with esbuild
pnpm run test         # Run vitest
pnpm run test:cli     # Smoke-test the CLI locally (--help)
pnpm run test:update  # Update vitest snapshots
pnpm run registry:validate
                      # Validate every designer page-type registry against the enforced schema
                      # and the global component/token/icon registries. Exit 1 = contract violated.
```

## Structure

```text
src/                          # CLI source (TypeScript)
test/                         # Vitest tests (`vitest.config.ts` only picks up `test/**`)
│   db-ux-designer-powers/    # Tests for the designer bundle's Figma render runtime
esbuild.js                    # Build script
db-ux-consumer-powers/        # Published powers bundle (consumers / app developers)
│   power.yaml                # Bundle manifest: name, version, skills, mcp config
│   mcp.json                  # MCP server config for @db-ux/mcp-server
│   context/
│   │   guidelines.md         # Auto-loaded steering file for consumer skills
│   skills/
│       implement-component/  # Skill: implement UI with DB UX components
│       migrate-to-v3/        # Skill: migrate legacy DB UI v2 → v3
db-ux-designer-powers/        # Published powers bundle (designers / Figma)
│   power.yaml                # Bundle manifest
│   mcp.json                  # MCP server config for @db-ux/mcp-server
│   context/
│   │   figma-generation.md   # Auto-loaded steering for the Figma-generation skill
│   skills/
│       generate-figma-screen/ # Skill: generate DB UX Figma screens (plan → runtime render)
db-ux-maintainer-powers/      # Internal powers bundle (DB UX component authors)
│   power.yaml                # Bundle manifest
│   mcp.json                  # MCP config for @db-ux/mcp-server + figma-developer-mcp
│   context/
│   │   architecture.md       # Auto-loaded steering file for maintainer skills
│   skills/
│       create-db-component/  # Skill: create new Mitosis component from Figma spec (TDD)
│       modify-db-component/  # Skill: add variants/props to existing component (TDD)
│       test-component/       # Skill: run, check, and fix Playwright + a11y tests
```

## Powers Bundles

### Manifest (`power.yaml`)

Each bundle has a `power.yaml` at its root declaring:

- `name`, `version`, `description`, `author`
- `steering` — context files to auto-load (maintainer bundle only)
- `skills` — paths to `SKILL.md` files
- `mcp.config` — path to `mcp.json`

### Skills (`SKILL.md`)

Each skill file has a YAML frontmatter block followed by the Markdown workflow body.

**Frontmatter fields** (internal format, defined by `skills/TEMPLATE.md`):

| Field         | Purpose                                                     |
| ------------- | ----------------------------------------------------------- |
| `name`        | Skill identifier                                            |
| `description` | One-line summary                                            |
| `triggers`    | User intent patterns that activate this skill               |
| `inputs`      | Named inputs with type, required flag, and description      |
| `requires`    | Context files to load before executing                      |
| `tools`       | MCP tools the skill is allowed to call (`server/tool_name`) |
| `outputs`     | File paths the skill will create or modify                  |
| `on_error`    | Retry count and fallback instructions                       |

When adding or editing a skill, use `skills/TEMPLATE.md` as the canonical reference.

### Page-type registries

A page-type catalog under `generate-figma-screen/assets/registries/<pageType>/` is exactly **three** files:

| File            | Schema              | Content                                                                                            |
| --------------- | ------------------- | -------------------------------------------------------------------------------------------------- |
| `blocks.json`   | `db-ux/blocks/v2`   | Atomic fragments, composed by patterns via `$ref`                                                  |
| `patterns.json` | `db-ux/patterns/v1` | Complete modules, each with `intent`, `whenToUse`, `level`, `cardinality`, optional `alternatives` |
| `template.json` | `db-ux/template/v2` | Page grammar: `order`, `slots`, `rules`; page-type specifics only under `pageTypeSpecific`         |

- **Always run `pnpm run registry:validate` after touching a registry.** It is the gate, not a suggestion — an earlier optional validator is exactly how `gridLayout: "20-20-20-20-20"` (a layout the live Grid never had) shipped.
- Selection metadata belongs on the pattern. Do not reintroduce a separate `sections.json`, and do not add `examples.json`: reference compositions live on the `<PageType> / Example` pages in Figma, where they cannot be mistaken for a skeleton to copy.
- Equal columns come from a `ContainerHorizontal` of fill-width children, never from a Grid. The Grid has nine layouts and no five-column variant.
- Only library components. `Grid`, `Container`, `Heading`, `Body`, `Dialog`, `Pagination` and `ProgressBar` are Core Lab library components resolved by registry key — never rebuilt from frames, rectangles or Cards.
- `ProgressBar` offers only 25, 50 and 75 percent. Any other value is a hard stop, not a rounded approximation.
- **`registry:validate` only proves INTERNAL consistency.** It checks schema, `$ref` resolution,
  reachability, Grid slots, props against real variant axes, tokens and icons — it never compares a
  fragment against the Figma node its `source` names. A fragment can therefore be fully valid and
  still have drifted from the catalog. That is how the process stepper and Back/Next row lost
  `spread: true` (they collapsed into a left-packed cluster) and how `process.step` shipped with a
  heading and no content column. Rules that must hold on the RENDERED result belong in the audit
  (`src/60-compliance-audit.js`), because they then also cover a freely composed screen; see the
  `process` checks and their tests in `test/db-ux-designer-powers/figma-runtime-process.spec.ts`.
- **A missing icon is a registry gap, never a reason to drop the element.** `registries/icons.json` is a hand-curated subset of DB Theme Icons, so an unregistered glyph used to push authors into omitting the icon — and with it the state the icon encoded. Resolve the key once (`search_design_system` for the hyphenated name, library `DB UX DS v3 - DB Theme Icons`, take the `component_set` key), add it to `icons.json`, rebuild. The validator's error message names this path.
- An `Image` in a fragment is EMPTY by contract: a generated layout ships an empty Figma image on Fill. Use `imageHash` only for an asset the user already placed in the file; there is no `src` (`figma.createImageAsync` does not exist in the `use_figma` sandbox).
- Runtime files under `generate-figma-screen/assets/src/` are concatenated modules with shared globals. Do not lint or diagnose them standalone; validate them through `node assets/build-runtime.cjs`.
- **A test that targets one powers bundle lives in `test/<bundle-folder>/`**, mirroring the bundle's directory name (e.g. `test/db-ux-designer-powers/`). Two constraints force this and the subfolder is what keeps ownership visible: `vitest.config.ts` only collects `test/**`, and `package.json` `files` ships `db-ux-designer-powers` wholesale — a spec placed inside the bundle would be published to npm.
- The generated `db-figma-runtime.min.js` and `bootstrap/*` are excluded from Prettier and xo on purpose — formatting them breaks the chunked bootstrap. Regenerate, never edit.
- Bootstrap integrity is checked by CONTENT, not by length. `build-runtime.cjs` emits an FNV-1a per chunk into `store-meta.js` and `check.js`; the sandbox has no crypto API, hence FNV-1a and not sha256. The `sha` in the `meta` record is a version label written by `store-meta.js` and is never derived from what is stored — do not treat it as an integrity check. If you touch the checksum helper, change BOTH copies (`fnv1a()` and `FNV_JS`): `verifyChecksumTwin()` fails the build when they disagree.
- Changing only the bootstrap snippets leaves the runtime bundle and its `sha` untouched, so already-bootstrapped Figma files stay valid and need no re-transfer. Only a change under `src/` moves the `sha` and forces a re-bootstrap.
- Use Node 24 from `.nvmrc` from the first command (for example via `nvm exec 24`) instead of repeating checks after discovering an ambient Node mismatch.

### MCP Configuration (`mcp.json`)

- **Consumer bundle**: connects only `@db-ux/mcp-server` via `npx --yes @db-ux/mcp-server`.
- **Designer bundle**: connects `@db-ux/mcp-server` (docs) **and** the official Figma **remote** MCP (`figma`) whose `use_figma` tool renders the Composition Plan. The `figma` server is URL-based (`https://mcp.figma.com/mcp`, HTTP + Figma OAuth on first use) and needs no Figma desktop app and no local server — it is NOT the read-only `figma-developer-mcp`.
- **Maintainer bundle**: connects both `@db-ux/mcp-server` and `figma-developer-mcp` (stdio mode). The Figma server requires a `FIGMA_API_KEY` environment variable.

> **Note — `generate-figma-screen` (designer):** the render step runs through the `figma`
> MCP's `use_figma` tool. The bundle only declares the dependency in `mcp.json`; the user
> authenticates the remote server once via Figma's OAuth flow. Never configure, probe or call a
> local/desktop Figma MCP endpoint (e.g. `127.0.0.1`) — all Figma access goes through the
> declared MCP tools.

## CLI Development Notes

- The CLI accepts an optional root path argument for monorepo setups: `npx @db-ux/agent-cli packages/frontend`
- It resolves symlinked packages in pnpm's `node_modules` structure
- Output always goes to `.github/copilot-instructions.md` in the target project
- Build artifacts go to `build/` — never commit them

## When to Update This File

Update `AGENTS.md` when:

- A new skill is added to either bundle
- The `power.yaml` manifest format changes
- The MCP server configuration changes
- The `SKILL.md` frontmatter schema changes
- The CLI's input/output behaviour changes
