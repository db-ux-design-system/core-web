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
```

## Structure

```text
src/                          # CLI source (TypeScript)
test/                         # Vitest tests
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

### MCP Configuration (`mcp.json`)

- **Consumer bundle**: connects only `@db-ux/mcp-server` via `npx --yes @db-ux/mcp-server`.
- **Designer bundle**: connects only `@db-ux/mcp-server` (docs) for live component/token/icon verification.
- **Maintainer bundle**: connects both `@db-ux/mcp-server` and `figma-developer-mcp` (stdio mode). The Figma server requires a `FIGMA_API_KEY` environment variable.

> **Note — `generate-figma-screen` (designer):** this skill RENDERS into Figma and therefore
> needs a Figma **write** MCP (the tool that executes plugin code, e.g. `use_figma`) in the
> host. The designer `mcp.json` currently wires only `@db-ux/mcp-server` (docs). Confirm and
> wire the render MCP before publishing this skill.

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
