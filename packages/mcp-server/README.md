# DB UX Model Context Protocol (MCP) Server

This server is the connector between AI coding agents (e.g. Amazon Q, GitHub Copilot, Claude) and the DB UX Design System. It gives every AI agent a single, authoritative source of truth — component APIs, framework-specific code examples, design tokens, and icon names — so the agent never has to guess or hallucinate component names, prop signatures, or color values.

Without this server, AI agents invent plausible-sounding but incorrect component usage. With it, they pull the exact generated source code that ships in the npm packages.

---

## 🚀 Quick Start for Consumers

You do **not** need to install this package manually. The MCP server is bundled inside `@db-ux/core-foundations` and is available immediately via `npx`.

### IDE Configuration

Add the following entry to your MCP client configuration (VS Code, IntelliJ, Cursor, etc.):

```json
{
  "mcpServers": {
    "db-ux": {
      "command": "npx",
      "args": ["-y", "@db-ux/core-foundations"]
    }
  }
}
```

**VS Code** (`settings.json` or `.vscode/mcp.json`):

```json
{
  "mcp": {
    "servers": {
      "db-ux": {
        "command": "npx",
        "args": ["-y", "@db-ux/core-foundations"]
      }
    }
  }
}
```

**IntelliJ / JetBrains IDEs** — add via *Settings → Tools → AI Assistant → Model Context Protocol → Add Server*.

### Project Rules (Plan-First Paradigm)

Copy the workflow rules file into your project so your AI agent enforces the correct tool-call sequence before writing any UI code:

```bash
# from your project root
curl -o .amazonq/rules/db-ux-mcp-workflow.md \
  https://github.com/db-ux-design-system/core-web/main/.amazonq/rules/db-ux-mcp-workflow.md
```

Or copy it manually from this monorepo: `.amazonq/rules/db-ux-mcp-workflow.md`.

The rules enforce the **Plan-First** paradigm: the AI must call the MCP tools to discover components and fetch real code *before* it writes a single line of UI code.

---

## 🛠 Available AI Tools (Skills)

| Tool | Description |
|---|---|
| `list_components` | Returns all available DB UX component names (e.g. `button`, `input`, `tag`). Call this first to confirm a component exists before using it. |
| `get_component_props` | Returns the raw TypeScript `model.ts` for a component — all interfaces, prop types, and JSDoc comments. |
| `get_component_details` | Returns the list of available example names for a component (e.g. `"Variant"`, `"Show Icon Leading"`). |
| `get_example_code` | Fetches the exact generated source code for a component example in a specific framework (`react`, `angular`, or `vue`). This is the code the AI adapts — not invents. |
| `get_design_tokens` | Returns CSS custom properties (`--db-*`) and SCSS variables (`$db-*`) for a token category (`colors`, `spacing`, `typography`, …). Prevents hardcoded hex values and magic numbers. |
| `list_design_token_categories` | Lists all available token categories to pass to `get_design_tokens`. |
| `list_icons` | Returns all valid DB UX icon names (e.g. `arrow_down`, `chevron_right`, `x_placeholder`). Always call this before using any `icon` prop — never guess a name. |

### Example: fetching a React button example

```
list_components          → confirms "button" exists
get_component_props      → reveals DBButtonProps, variants, types
get_component_details    → lists ["Density", "Variant", "Show Icon Leading", ...]
get_example_code         → returns show-icon-leading.example.tsx source
list_icons               → confirms "arrow_right" is a valid icon name
get_design_tokens        → returns --db-spacing-fixed-md for layout
```

---

## 📐 Architecture & Manifest

### How it works

The server is a single Node.js process communicating over **stdio** using the [Model Context Protocol](https://modelcontextprotocol.io). It is started as a child process by the MCP client in the IDE.

### Build-time manifest

Because `model.ts`, showcase files, and framework example source files are **not** included in the published npm packages (only compiled `dist/` is shipped), the server embeds all necessary data at build time.

`src/build-manifest.ts` runs during the build and produces `src/manifest.json` containing:

```
manifest.json
├── icons[]                          — icon names from packages/foundations/src/all-icons.ts
└── components{}
    └── {componentName}
        ├── props                    — raw model.ts content
        ├── examples[]               — example names from showcase file
        └── exampleCode
            ├── react{}              — { "variant.example.tsx": "<source>" }
            ├── angular{}            — { "variant.example.ts":  "<source>" }
            └── vue{}                — { "variant.example.vue": "<source>" }
```

This manifest is bundled into the final `index.js` by esbuild, producing a **~640 KB standalone executable** that carries all component knowledge inside it.

### Universal path resolution

The server detects its runtime environment automatically:

```
isMonorepo()
  true  → packages/components/src/components/ exists
          → reads live files from the monorepo (model.ts, output/, foundations/)
  false → running from node_modules/@db-ux/core-foundations/build/mcp/
          → reads from the embedded manifest.json
```

This means the same binary works for:
- **Design system developers** working inside the monorepo (always up-to-date, live files)
- **Consumer teams** running `npx @db-ux/core-foundations` (self-contained, no monorepo needed)

### Directory structure

```
packages/mcp-server/
├── src/
│   ├── index.ts            # MCP server — all tool registrations
│   ├── build-manifest.ts   # Build-time script — generates manifest.json
│   └── manifest.json       # Generated — do not edit manually
├── build/
│   └── index.js            # Compiled standalone bundle (gitignored)
├── esbuild.js              # Build script: runs build-manifest, then bundles
├── package.json
├── tsconfig.json
└── CONTEXT.md              # Architecture notes
```

---

## ⚠️ Defensive Rules for AI

These are the **Golden Rules** the AI agent must follow when using this server. They are enforced by the workflow rules file and should be treated as hard constraints, not suggestions.

### NEVER use native HTML elements when a DB UX component exists

```tsx
// ❌ WRONG
<button style="background: #d40000; padding: 8px 16px">Save</button>
<input type="text" placeholder="Search..." />
<div style="display: flex; gap: 16px">...</div>

// ✅ CORRECT
<DBButton variant="brand">Save</DBButton>
<DBInput placeholder="Search..." />
<DBStack gap="md">...</DBStack>
```

| Native element | DB UX replacement |
|---|---|
| `<button>` | `DBButton` |
| `<input>` | `DBInput` |
| `<select>` | `DBSelect` |
| `<a>` | `DBLink` |
| `<textarea>` | `DBTextarea` |
| `<div>` (layout) | `DBStack`, `DBSection`, `DBCard` |

### NEVER use hardcoded colors or magic spacing values

```scss
// ❌ WRONG
.my-element { color: #ec0016; margin: 15px; gap: 8px; }

// ✅ CORRECT — values retrieved via get_design_tokens
.my-element {
  color: var(--db-color-red-500);
  margin: var(--db-spacing-fixed-sm);
  gap: var(--db-spacing-fixed-xs);
}
```

### ALWAYS verify props and icon names via MCP tools

```tsx
// ❌ WRONG — icon name invented, prop API assumed
<DBButton icon="chevronRight" size="large">Next</DBButton>

// ✅ CORRECT — icon name from list_icons, props from get_component_props
<DBButton icon="chevron_right" size="small">Next</DBButton>
```

### ALWAYS call get_example_code before writing component usage

The generated examples are the canonical reference. Adapt them — do not rewrite component usage from scratch.

---

## 📦 Build Command

The server is built as part of the `@db-ux/core-foundations` package:

```bash
# from the monorepo root
npm run build-mcp --workspace=@db-ux/core-foundations
```

This runs `packages/mcp-server/esbuild.js` which:

1. Executes `src/build-manifest.ts` — collects all component data from the live monorepo into `src/manifest.json`
2. Bundles `src/index.ts` + `manifest.json` via esbuild into a single `build/index.js` with `#!/usr/bin/env node` shebang
3. Copies the bundle to `packages/foundations/build/mcp/index.js` for inclusion in the published npm package

To build and test the server in isolation during development:

```bash
# from packages/mcp-server/
npm run build   # generates manifest + bundle
npm run dev     # runs src/index.ts directly via tsx (monorepo mode, live files)
```
