# DB UX Model Context Protocol (MCP) Server

This server is the connector between AI coding agents (e.g. Amazon Q, GitHub Copilot, Claude) and the DB UX Design System. It gives every AI agent a single, authoritative source of truth — component APIs, framework-specific code examples, design tokens, and icon names — so the agent never has to guess or hallucinate component names, prop signatures, or color values.

Without this server, AI agents invent plausible-sounding but incorrect component usage. With it, they pull the exact generated source code that ships in the npm packages. Additionally, through Agent Auto-Recovery (semantic error handling), the server intercepts AI typos and proactively guides the agent to autonomously recover, preventing workflows from crashing.

---

## 🚀 Quick Start for Consumers

> **Requirement:** Node.js **v22.0.0** or higher is required to run the MCP server.

### 1. Access the Server

Ensure you are using Node.js v22+ and have access to the DB UX packages. The server is invoked via `npx`:

```bash
npx --yes @db-ux/mcp-server
```

> **Crucial Concept:** You do **not** run this command manually in your terminal for daily usage. If you do, it will look like the terminal is hanging because it is waiting for JSON-RPC messages over standard input (`stdio`). Instead, you will configure your IDE (Cursor, VS Code, IntelliJ) to run this command automatically in the background.

### 2. Configure your IDE

**Important:** Ensure you include the full hierarchy (e.g., `mcp` -> `servers`). Do not add the `db-ux` key directly to the root of your settings file.

Add the following entry to your MCP client configuration (VS Code, IntelliJ, Cursor, etc.):

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

Those are the files you might want to change:

- Amazon Q/ Kiro: `~\.aws\amazonq\agents\default.json`
- Copilot: `~\.copilot\config.json`

#### VS Code

You have two options:

- **Recommended (Project-level):** Create a `.vscode/mcp.json` file in your project root. This allows you to share the MCP config with your team via Git.
- **Alternative (User-level):** Add the entry to your global `settings.json`.

> **Note:** If both exist, the `.vscode/mcp.json` file takes precedence.

```json
{
	"mcp": {
		"servers": {
			"db-ux": {
				"command": "npx",
				"args": ["--yes", "@db-ux/mcp-server"]
			}
		}
	}
}
```

#### IntelliJ / JetBrains IDEs

Add via _Settings → Tools → AI Assistant → Model Context Protocol → Add Server_. Use these values in the dialog:

| Field     | Value                     |
| --------- | ------------------------- |
| Name      | `db-ux`                   |
| Type      | `stdio`                   |
| Command   | `npx`                     |
| Arguments | `--yes @db-ux/mcp-server` |

### 3. Add DB UX Rules

Run this command to update your repository rules

```shell
npm i --save-dev @db-ux/mcp-server
npx --yes @db-ux/agent-cli
```

This will copy the correct rules for DB UX component usage and design token referencing into a `.github/copilot-instructions.md` file in your repository. These rules are crucial to ensure the AI agent uses DB UX components correctly and does not hallucinate or invent incorrect usage patterns.

### 4. Verify Connection

- **Check Status:** Look for a green indicator or "db-ux" in your IDE's MCP server list.
- **Check Logs:** If it doesn't appear, check the MCP output logs in your IDE (e.g., in VS Code: _Output Panel_ → _MCP_ or _MCP Servers_).

---

## 🛠 Available AI Tools (Skills)

| Tool                           | Description                                                                                                                                                                                     |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `list_components`              | Returns all available DB UX component names (e.g. `button`, `input`, `tag`). Call this first to confirm a component exists before using it.                                                     |
| `get_component_props`          | Returns the raw TypeScript `model.ts` for a component — all interfaces, prop types, and JSDoc comments.                                                                                         |
| `get_component_details`        | Returns the list of available example names for a component (e.g. `"Variant"`, `"Show Icon Leading"`).                                                                                          |
| `get_example_code`             | Fetches the exact generated source code for a component example in a specific framework (`react`, `angular`, `vue`, `web-components`, or `html`). This is the code the AI adapts — not invents. |
| `get_design_tokens`            | Returns CSS custom properties (`--db-*`) and SCSS variables (`$db-*`) for a token category (`colors`, `spacing`, `typography`, …). Prevents hardcoded hex values and magic numbers.             |
| `list_design_token_categories` | Lists all available token categories to pass to `get_design_tokens`.                                                                                                                            |
| `list_icons`                   | Returns all valid DB UX icon names (e.g. `arrow_down`, `chevron_right`, `x_placeholder`). Always call this before using any `icon` prop — never guess a name.                                   |
| `docs_search`                  | Searches the DB UX conceptual documentation (guidelines, A11y, migration, ADRs) or component-specific markdown docs. Acts as our Retrieval-Augmented Generation (RAG) engine.                   |
| `list_migration_guides`        | Returns all available migration guide names (e.g. `db-ui-color-migration`, `db-ui-component-migration`). Call this first before any migration task.                                             |
| `get_migration_guide`          | Returns the full markdown content of a specific migration guide. Use this to load official package renames, prop changes, and component workarounds before refactoring legacy code.             |

### Example: fetching a React button example

```text
list_components          → confirms "button" exists
get_component_props      → reveals DBButtonProps, variants, types
get_component_details    → lists ["Density", "Variant", "Show Icon Leading", ...]
get_example_code         → returns show-icon-leading.example.tsx source
list_icons               → confirms "arrow_right" is a valid icon name
get_design_tokens        → returns --db-spacing-fixed-md for layout
```

---

## 🧠 Available AI Workflows (Prompts)

The server exposes predefined Prompts that orchestrate complex cognitive workflows. They force the AI to plan, verify via tools, and analyze before generating output. You can trigger these in your AI chat UI (if supported) or via the MCP Inspector.

### `scaffold_page` (Rapid Prototyping)

Generates the initial structure of a complete web page or complex module.

- **Parameters:** `page_type`, `framework`, `additional_requirements`.
- **Behavior:** Enforces the Plan-First paradigm, deconstructing the layout into logical UI blocks and verifying component existence before writing any framework-specific code.

### `review_ui_code` (Quality Assurance & A11y)

Performs a strict multi-layered QA, accessibility, and DB UX compliance audit on a provided code snippet.

- **Parameters:** `code_snippet`, `framework`.
- **Behavior:** Scans for hardcoded "magic numbers" and checks WCAG 2.2 AA rules. The AI is forced to provide _evidence_ for its critique by calling the design tokens and component API tools.

### `migrate_component` (Legacy Refactoring)

Transforms legacy UI code (e.g., Bootstrap, native HTML, DB UI v1/v2) into the modern DB UX v3/v4 architecture.

- **Parameters:** `legacy_code`, `source_context`, `target_framework`.
- **Behavior:** Calls `list_migration_guides` and `get_migration_guide` to dynamically load the relevant migration docs before mapping any component. This ensures all package renames, prop changes, and missing-component workarounds are sourced from the official guides rather than hardcoded knowledge.

### `audit_accessibility` (Deep A11y Scan)

Specialized deep scan exclusively for inclusion and accessibility standards (WCAG 2.2 AA). Goes beyond traditional linters by evaluating interactive patterns, focus orders, and generating manual test scripts.

- **Parameters:** `code_snippet`, `framework`.
- **Behavior:** Calls `docs_search` to retrieve global DB UX accessibility guidelines, then verifies how the used components handle ARIA attributes and keyboard events natively. Produces a prioritized WCAG violation list with evidence and a step-by-step manual testing script for QA engineers.

---

## 📐 Architecture & Manifest

### How it works

The server is a single Node.js process communicating over **stdio** using the [Model Context Protocol](https://modelcontextprotocol.io). It is started as a child process by the MCP client in the IDE.

### Build-time manifest

Because `model.ts`, showcase files, and framework example source files are **not** included in the published npm packages (only compiled `dist/` is shipped), the server embeds all necessary data at build time.

`src/build-manifest.ts` runs during the build and produces `src/manifest.json` containing:

```text
manifest.json
├── icons[]                          — icon names from packages/foundations/src/all-icons.ts
├── tokens{}                         — raw SCSS design tokens mapped by category
├── docs{}                           — conceptual markdown documentation
└── components{}
    └── {componentName}
        ├── props                    — raw model.ts content
        ├── examples[]               — example names from showcase file
        └── exampleCode
            ├── react{}              — { "variant.example.tsx": "<source>" }
            ├── angular{}            — { "variant.example.ts":  "<source>" }
            ├── vue{}                — { "variant.example.vue": "<source>" }
            ├── web-components{}     — { "variant.example.ts":  "<source>" }
            └── html{}               — { "index.html": "<source>" }
```

This manifest is bundled into the final `index.js` by esbuild, producing a **~775 KB standalone executable** that carries all component knowledge inside it.

### Universal path resolution

The server detects its runtime environment automatically:

```text
IS_MONOREPO
  true  → packages/components/src/components/ exists
          → reads live files from the monorepo (model.ts, output/, foundations/)
  false → running from node_modules/@db-ux/mcp-server/dist/
          → reads from the embedded manifest.json
```

This means the same binary works for:

- **Design system developers** working inside the monorepo (always up-to-date, live files)
- **Consumer teams** running `npx @db-ux/mcp-server` (self-contained, no monorepo needed)

### Directory structure

```text
packages/mcp-server/
├── src/
│   ├── index.ts            # Bootstrap — connects transport, registers tools/prompts
│   ├── server.ts           # McpServer singleton and lifecycle handlers
│   ├── types.ts            # Framework type and FRAMEWORK_PKG mapping
│   ├── build-manifest.ts   # Build-time script — generates manifest.json
│   ├── tools/              # Tool handler implementations
│   ├── prompts/            # Prompt handler implementations
│   └── utils/              # Shared utilities (path, manifest, formatting, async)
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
<DBStack>...</DBStack>
```

| Native element   | DB UX replacement                |
| ---------------- | -------------------------------- |
| `<button>`       | `DBButton`                       |
| `<input>`        | `DBInput`                        |
| `<select>`       | `DBSelect`                       |
| `<a>`            | `DBLink`                         |
| `<textarea>`     | `DBTextarea`                     |
| `<div>` (layout) | `DBStack`, `DBSection`, `DBCard` |

### NEVER use hardcoded colors or magic spacing values

```scss
// ❌ WRONG
.my-element {
	color: #ec0016;
	margin: 15px;
	gap: 8px;
}

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

The server is built as part of the `@db-ux/mcp-server` package:

```bash
# from the monorepo root
npm run build --workspace=@db-ux/mcp-server
```

This runs `packages/mcp-server/esbuild.js` which:

1. Executes `src/build-manifest.ts` — collects all component data from the live monorepo into `src/manifest.json`
2. Bundles `src/index.ts` + `manifest.json` via esbuild into a single `build/index.js` with `#!/usr/bin/env node` shebang
3. Copies the bundle to `packages/mcp-server/dist/index.js` for inclusion in the published `@db-ux/mcp-server` npm package

To build and test the server in isolation during development:

```bash
# from packages/mcp-server/
npm run build   # generates manifest + bundle
npm run dev     # runs src/index.ts directly via tsx (monorepo mode, live files). The server communicates over stdio and produces no terminal output by itself — this is expected.
```

---

## ❓ Troubleshooting

### "Unknown Configuration Setting" in VS Code

If you see a yellow squiggle/warning in your `settings.json`, this is expected. Standard VS Code does not natively recognize the `mcp` key yet. As long as your MCP client (like the Claude extension or Cursor) is active, the server will work perfectly.

### Server fails to start from the monorepo root (Local Development)

If you are developing or testing the MCP server directly from within the DB UX monorepo, the global `npx` command might fail due to npm workspace resolution. In this case, bypass `npx` and point your IDE directly to the local built file.

**Fallback IDE Configuration (VS Code/IntelliJ):**
Instead of using `npx`, use `node` and point it to the local build path (ensure you have run `npm run build` in the `mcp-server` directory first):

```json
"db-ux": {
	"command": "node",
	"disabled": false,
	"timeout": 60000,
	"args": ["packages/mcp-server/dist/index.js"]
}
```

_Alternatively, you can change your IDE's working directory for the MCP server to `packages/mcp-server`._

---

## 🛡️ Security & Compliance

This MCP server operates under a strict, zero-trust security model to prevent malicious AI behavior or accidental system damage.

- **Strict Read-Only Sandbox:** The server has zero write-permissions. All imports from `node:fs` are strictly read-only (`readFile`, `readdir`). Modules like `child_process` (for shell execution) or file mutation methods (`writeFile`, `unlink`) are completely banned.
- **Path Traversal Protection (Jailbreak Prevention):** All file and directory accesses (e.g., resolving component names) pass through a cryptographic-style path resolver. The server mathematically guarantees that no file reads can escape the allowed `REPO_ROOT` or `COMPONENTS_DIR` (blocking `../../etc/passwd` attacks).
- **DoS & Context Window Protection:** To prevent LLMs from crashing or generating massive API billing spikes due to context window overflows, strict token limiters are enforced:
    - File reads are truncated at **20,000 characters**.
    - JSON arrays (like component or icon lists) are truncated at **20,000 characters**.
    - Directory scans are hard-limited to a maximum of **10 files**.

---

## 🧪 Development & Testing

The **MCP Inspector** is the official tool to validate MCP tools and prompts (e.g. `scaffold_page`) independently of any IDE (VS Code, IntelliJ, etc.). Use it to inspect the server's capabilities, test tool calls interactively, and verify prompt outputs before relying on them in an AI agent workflow.

### Prerequisites

Build the server bundle first (if not already done):

```bash
# from packages/mcp-server/
npm run build
```

### Starting the Inspector

Run the following command from the `packages/mcp-server/` directory:

> **Note:** Port 5173 is the default for Vite and Playwright. To avoid conflicts if those are already running, you can specify a different port using the `--port` flag.

```bash
npx @modelcontextprotocol/inspector --port 5178 node build/index.js
```

### Step-by-step workflow

1. Run the command above — the Inspector starts a local web server
2. Open the browser tab it prints (e.g., **<http://localhost:5178>**)
3. Navigate to the **"Prompts"** tab to browse and execute interactive prompts like `scaffold_page`
4. Navigate to the **"Tools"** tab to call individual tools (e.g. `list_components`, `get_example_code`) and inspect their responses
5. Use the **"Resources"** tab to verify any static resources exposed by the server

> **Tip:** The Inspector is framework- and IDE-agnostic. It communicates with the server over stdio exactly as a real MCP client would, making it the most reliable way to catch issues before they surface in an AI agent session.
