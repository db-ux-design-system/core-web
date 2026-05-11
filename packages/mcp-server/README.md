# DB UX Model Context Protocol (MCP) Server

This server is the connector between AI coding agents (e.g. Amazon Q, GitHub Copilot, Claude) and the DB UX Design System. It gives every AI agent a single, authoritative source of truth — component APIs, framework-specific code examples, design tokens, and icon names — so the agent never has to guess or hallucinate component names, prop signatures, or color values.

Without this server, AI agents invent plausible-sounding but incorrect component usage. With it, they pull the exact generated source code that ships in the npm packages. Additionally, through Agent Auto-Recovery (semantic error handling), the server intercepts AI typos and proactively guides the agent to autonomously recover, preventing workflows from crashing.

---

## 🚀 Quick Start for Consumers

> **Requirement:** Node.js **v24.0.0** or higher is required to run the MCP server.

### 1. Access the Server

Ensure you are using Node.js v24+ and have access to the DB UX packages. The server is invoked via `npx`:

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

### 5. Optimize Amazon Q for this Project (Recommended)

Amazon Q can automatically load the project's `CONTEXT.md` as a persistent system prompt ("Rules") for every session. This means the agent **already knows** the MCP server architecture, all available tools, design token sources, migration workflows, and the v3 component API — without any manual onboarding or repeated context-setting by the developer.

**Why this matters:**

- ✅ Eliminates hallucinations about component names, prop signatures, and token values
- ✅ The agent follows the correct 6-step migration workflow from the first message
- ✅ New team members get a fully context-aware AI assistant on day one

**Setup:**

1. Open (or create) the file `~/.aws/amazonq/agents/default.json`
2. Add the following configuration:

```json
{
	"agentInstruction": {
		"paths": ["CONTEXT.md"]
	}
}
```

3. Place the `CONTEXT.md` file in your project root (it ships with `@db-ux/mcp-server` and is copied by `npx @db-ux/agent-cli`)

> **Note:** The path is resolved relative to the workspace root. Amazon Q / Kiro will read this file at the start of every session and inject it as system-level context for the agent.

---

## 🛠 Available AI Tools (Skills)

| Tool                           | Description                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `list_components`              | Returns all available DB UX component names (e.g. `button`, `input`, `tag`). Call this first to confirm a component exists before using it.                                                                                                                                                                                                                                                                      |
| `get_component_props`          | Returns the raw TypeScript `model.ts` for a component — all interfaces, prop types, and JSDoc comments.                                                                                                                                                                                                                                                                                                          |
| `get_component_details`        | Returns the list of available example names for a component (e.g. `"Variant"`, `"Show Icon Leading"`).                                                                                                                                                                                                                                                                                                           |
| `get_example_code`             | Fetches the exact generated source code for a component example in a specific framework (`react`, `angular`, `vue`, `web-components`, or `html`). This is the code the AI adapts — not invents.                                                                                                                                                                                                                  |
| `get_design_tokens`            | Returns CSS custom properties (`--db-*`) for a token category (`colors`, `spacing`, `typography`, `elevation`, `density`, …). Reads from a structured `tokens.json` generated at build time with concrete primitive values (e.g. `0.75rem`, box-shadow strings). Falls back to SCSS from the manifest for categories not in JSON (e.g. animation, transitions). Prevents hardcoded hex values and magic numbers. |
| `list_design_token_categories` | Lists all available token categories to pass to `get_design_tokens`.                                                                                                                                                                                                                                                                                                                                             |
| `list_icons`                   | Returns all valid DB UX icon names (e.g. `arrow_down`, `chevron_right`, `x_placeholder`). Always call this before using any `icon` prop — never guess a name.                                                                                                                                                                                                                                                    |
| `docs_search`                  | Searches the DB UX conceptual documentation (guidelines, Accessibility, migration, ADRs) or component-specific markdown docs. Acts as our Retrieval-Augmented Generation (RAG) engine.                                                                                                                                                                                                                           |
| `list_migration_guides`        | Returns all available migration guide names (e.g. `color-migration`, `component-migration`). Call this first before any migration task.                                                                                                                                                                                                                                                                          |
| `get_migration_guide`          | Returns the full markdown content of a specific migration guide. Use this to load official package renames, prop changes, and component workarounds before refactoring legacy code.                                                                                                                                                                                                                              |
| `verify_migrated_code`         | Instructs the AI to verify its changes using the project's own scripts (`typecheck`, `lint`, `build`) from `package.json`. No temp files or hardcoded compilers — works with any toolchain (JS, TS, Vite, Angular CLI).                                                                                                                                                                                          |
| `scan_v2_migration`            | **Call FIRST when migrating a file.** Scans a source file for DB UI v2 patterns (v2 CSS classes (`cmp-*`, `elm-*`, `rea-*`) and v2 Web Components (`<db-*>`), `db-color-*` tokens, legacy icon names) and returns a JSON report with exact line numbers and deterministic migration suggestions from the official guides. No LLM guessing needed.                                                                |
| `list_visuals`                 | Returns all available visual reference names (e.g. `dashboard`, `form`, `table`). Call this to discover which visuals exist before requesting one.                                                                                                                                                                                                                                                               |
| `get_visual_reference`         | Returns a pre-optimised static visual reference image (JPEG) as a Base64-encoded MCP image block. No build-time or runtime image processing dependencies — images are committed as pre-optimised assets.                                                                                                                                                                                                         |

### Example: fetching a React button example

```text
list_components          → confirms "button" exists
get_component_props      → reveals DBButtonProps, variants, types
get_component_details    → lists ["Density", "Variant", "Show Icon Leading", ...]
get_example_code         → returns show-icon-leading.example.tsx source
list_icons               → confirms "arrow_right" is a valid icon name
get_design_tokens        → returns --db-spacing-fixed-md for layout
verify_migrated_code     → instructs AI to run project's own typecheck/lint/build scripts
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

Transforms legacy UI code (e.g., Bootstrap, native HTML, DB UI v1/v2) into the modern DB UX v3 architecture. This is the most complex prompt — it orchestrates **10 different MCP tools** across 5 mandatory steps, including a verification loop.

**Parameters:**

| Parameter          | Required | Description                                                                                                            |
| ------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| `legacy_code`      | Yes      | The outdated source code to migrate (DB UI, Bootstrap, raw HTML/CSS). Max 10,000 chars                                 |
| `source_context`   | Yes      | Origin of the legacy code: `db-ui-v1`, `db-ui-v2`, `db-ux-v1`, `db-ux-v2`, `db-ux-v3`, `bootstrap-4`, or `native-html` |
| `target_framework` | Yes      | Target framework: `react`, `angular`, `vue`, `web-components`, or `html`                                               |

**Full workflow (5 mandatory steps):**

```text
┌──────────────────────────────────────────────────────────────────┐
│ STEP 0: FILE SCAN (NEW — deterministic, no guessing)             │
│  scan_v2_migration → JSON report with line numbers,           │
│  v2 patterns, and migration suggestions                          │
├──────────────────────────────────────────────────────────────────┤
│ STEP 1: MIGRATION ANALYSIS                                       │
│  list_migration_guides → get_migration_guide → docs_search       │
│  Output: Legacy Element → DB UX v3 Component mapping table       │
├──────────────────────────────────────────────────────────────────┤
│ STEP 2: COMPONENT DISCOVERY & PROPS RETRIEVAL                    │
│  list_components → get_component_props → get_component_details   │
│  → get_example_code → get_design_tokens → list_icons             │
├──────────────────────────────────────────────────────────────────┤
│ STEP 3: CODE GENERATION                                          │
│  Generates complete migrated code (NOT shown to user yet)        │
├──────────────────────────────────────────────────────────────────┤
│ STEP 4: CODE VERIFICATION & SELF-CORRECTION (mandatory)          │
│  verify_migrated_code → run project scripts → retry (max 3)     │
├──────────────────────────────────────────────────────────────────┤
│ STEP 5: FINAL OUTPUT                                             │
│  ✅ VERIFIED or ⚠️ WARNING with remaining diagnostics            │
└──────────────────────────────────────────────────────────────────┘
```

**Step-by-step details:**

1. **Migration Analysis** — Calls `list_migration_guides` then `get_migration_guide` to load official migration rules (package renames, prop changes, removed components). Calls `docs_search` for component-specific migration docs. Produces a mapping table: Legacy Element → DB UX v3 Component → Rationale.
2. **Component Discovery & Props Retrieval** — Calls `list_components` to verify every mapped component exists. For each: `get_component_props` (TypeScript API), `get_component_details` (examples), `get_example_code` (canonical source to adapt). Calls `get_design_tokens` to replace hardcoded colors/spacing. Calls `list_icons` to verify icon names.
3. **Code Generation** — Generates the complete migrated code with correct `@db-ux/*` imports, verified design tokens, and verified icon names. **Does NOT output this to the user yet.**
4. **Code Verification & Self-Correction** — Calls `verify_migrated_code` which instructs the AI to run the project's own verification scripts (typecheck, lint, build from package.json). If errors are found, the AI fixes the code and retries — up to **3 attempts maximum**. This step applies to all framework targets.
5. **Final Output** — Presents the result in three sections: "Migration Analysis" (mapping table + guide references), "Migrated Code" (marked ✅ VERIFIED on success, or ⚠️ WARNING with remaining diagnostics), and "Accessibility Statement" (WCAG 2.2 AA compliance confirmation).

**Available migration guides:**

| Guide                 | Covers                                                             |
| --------------------- | ------------------------------------------------------------------ |
| `component-migration` | Component renames, prop changes, removed/planned components        |
| `color-migration`     | Full color token mapping (old → new `--db-*` tokens)               |
| `icon-migration`      | Icon name mapping (e.g. `account` → `person`, `delete` → `bin`)    |
| `general-migration`   | Typography tokens, spacing tokens, elevation, inline style removal |

**Example: migrating a DB UI v2 React component**

Trigger the prompt with these parameters:

- `legacy_code`: your old React component source code
- `source_context`: `db-ui-v2`
- `target_framework`: `react`

The AI will then autonomously:

1. Load `component-migration`, `color-migration`, `icon-migration`, and `general-migration`
2. Map every legacy element (e.g. `variant="brand-primary"` → `variant="brand"`, `icon="search"` → `icon="magnifying_glass"`)
3. Fetch the exact generated React example code for each component and adapt it
4. Replace all hardcoded `#ec0016` / `margin: 15px` values with `--db-*` design tokens
5. Verify the result via `verify_migrated_code` (runs project's own scripts) and self-correct up to 3 times
6. Present the verified code with a migration analysis and accessibility statement

### `audit_accessibility` (Deep A11y Scan)

Specialized deep scan exclusively for inclusion and accessibility standards (WCAG 2.2 AA). Goes beyond traditional linters by evaluating interactive patterns, focus orders, and generating manual test scripts.

- **Parameters:** `code_snippet`, `framework`.
- **Behavior:** Calls `docs_search` to retrieve global DB UX accessibility guidelines, then verifies how the used components handle ARIA attributes and keyboard events natively. Produces a prioritized WCAG violation list with evidence and a step-by-step manual testing script for QA engineers.

---

## 🛡️ Security & Compliance

This MCP server operates under a strict, zero-trust security model to prevent malicious AI behavior or accidental system damage.

- **Strict Read-Only Sandbox:** The server has zero write-permissions for design system files. All imports from `node:fs` for component data are strictly read-only (`readFile`, `readdir`). The `verify_migrated_code` tool does not execute shell commands — it returns instructions for the LLM to run the project's own verification scripts.
- **Path Traversal Protection (Jailbreak Prevention):** All file and directory accesses (e.g., resolving component names) pass through a path resolver with traversal protection (`resolveSafePath`). The server guarantees that no file reads can escape the allowed base directories (blocking `../../etc/passwd` attacks).
- **DoS & Context Window Protection:** To prevent LLMs from crashing or generating massive API billing spikes due to context window overflows, strict token limiters are enforced:
    - File reads are truncated at **20,000 characters**.
    - JSON arrays (like component or icon lists) are truncated at **20,000 characters**.
    - Directory scans are hard-limited to a maximum of **10 files**.

---

## 📐 Architecture & Manifest

### How it works

The server is a single Node.js process communicating over **stdio** using the [Model Context Protocol](https://modelcontextprotocol.io). It is started as a child process by the MCP client in the IDE.

### Build-time manifest

Because `model.ts`, showcase files, and framework example source files are **not** included in the published npm packages (only compiled `dist/` is shipped), the server embeds all necessary data at build time.

`scripts/build-manifest.ts` runs during the build and produces `src/manifest.json` containing:

```text
manifest.json
├── icons[]                          — icon names from packages/foundations/src/all-icons.ts
├── tokens{}                         — SCSS design tokens mapped by category (colors, typography, animation, transitions — categories with raw SCSS; spacing/elevation/density served from tokens.json instead)
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

> **Note on design tokens:** For most categories (spacing, elevation, density, colors, etc.), the tool reads from a structured `assets/tokens/tokens.json` generated by the `prebuild` step from `@db-ux/db-theme` and the foundations build output. Categories not covered by the JSON (e.g. animation, transitions) fall back to raw SCSS from the manifest.
>
> **Note on visual references:** The `get_visual_reference` tool serves pre-optimised static JPEG images from `assets/visuals/`. These files are committed directly to the repository — no build-time image processing or native dependencies required.

### Directory structure

```text
packages/mcp-server/
├── assets/
│   ├── migration/          # Migration guides (copied from docs/migration/db-ui/ by prebuild)
│   ├── tokens/             # Prebuild-generated tokens.json (structured design tokens)
│   └── visuals/            # Pre-optimised static reference images (JPEG, committed to Git)
├── scripts/
│   ├── prebuild.ts          # Prebuild asset copy script (runs as native TS via Node 24)
│   └── build-manifest.ts    # Build-time script — generates src/manifest.json
├── src/
│   ├── index.ts            # Bootstrap — connects transport, registers tools/prompts
│   ├── server.ts           # McpServer singleton and lifecycle handlers
│   ├── types.ts            # Framework type and FRAMEWORK_PKG mapping
│   ├── tools/              # Tool handler implementations
│   ├── prompts/            # Prompt handler implementations
│   ├── utils/              # Shared utilities (path, manifest, formatting, async)
│   └── manifest.json       # Generated — do not edit manually
├── build/
│   └── index.js            # Compiled standalone bundle (gitignored)
├── esbuild.js              # Build script: runs build-manifest, then bundles
├── package.json
├── tsconfig.json
└── CONTEXT.md              # Architecture notes
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

## 🧪 Development & Testing

To build and test the server in isolation during development:

```bash
# from packages/mcp-server/
npm run build   # generates manifest + bundle
npm run dev     # runs src/index.ts directly via tsx (monorepo mode, live files). The server communicates over stdio and produces no terminal output by itself — this is expected.
```

### MCP Inspector

The **MCP Inspector** is the official tool to validate MCP tools and prompts (e.g. `scaffold_page`) independently of any IDE (VS Code, IntelliJ, etc.). Use it to inspect the server's capabilities, test tool calls interactively, and verify prompt outputs before relying on them in an AI agent workflow.

#### Prerequisites

Build the server bundle first (if not already done):

```bash
# from packages/mcp-server/
npm run build
```

#### Starting the Inspector

Run the following command from the `packages/mcp-server/` directory:

> **Note:** The Inspector UI runs on **port 6274**, the proxy on **port 6277**. If either port is already in use, free it first: `lsof -ti :6274 -ti :6277 | xargs kill -9`

```bash
npx @modelcontextprotocol/inspector --transport stdio node dist/index.js
```

The Inspector prints a URL with a session token to the terminal, e.g.:

```text
🔍 MCP Inspector is up and running at http://localhost:6274/?MCP_PROXY_AUTH_TOKEN=<token>
```

Open that **full URL including the token** in your browser — the token is required for authentication.

#### Step-by-step workflow

1. Run the command above — the Inspector starts a local web server
2. Open the **full URL with token** printed in the terminal (e.g. `http://localhost:6274/?MCP_PROXY_AUTH_TOKEN=...`)
3. Click **"Connect"** to establish the stdio connection to the server
4. Navigate to the **"Tools"** tab to call individual tools (e.g. `list_components`, `scan_v2_migration`) and inspect their responses
5. Navigate to the **"Prompts"** tab to browse and execute interactive prompts like `scaffold_page`

> **Tip:** The Inspector is framework- and IDE-agnostic. It communicates with the server over stdio exactly as a real MCP client would, making it the most reliable way to catch issues before they surface in an AI agent session.

---

## ⚠️ Development Constraints

> **These rules are critical for contributors working on the MCP server package.**

| Rule                             | Details                                                                                                                                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **ESM only**                     | This package is `"type": "module"`. Never use `require()` — use `import` exclusively.                                                                                                            |
| **Node 24 native TS**            | Build scripts run as native TypeScript (type stripping). No `tsx` or `.mjs` needed.                                                                                                              |
| **No lifecycle hooks**           | NPM lifecycle scripts (`prebuild`, `preinstall`) are disabled in this monorepo. Build steps must be chained via `&&` in the `build` script.                                                      |
| **No committed build artifacts** | Files in `assets/migration/` and `assets/tokens/` are generated at build time. They are git-ignored and must never be committed. `assets/visuals/` contains static JPEGs that **are** committed. |
| **Strict assets-only reading**   | The server must never fall back to monorepo source paths at runtime. Read strictly from `assets/` to avoid masking build failures.                                                               |
| **Hard CI failures**             | Build scripts must `throw new Error()` when required sources are missing — never fail silently. Exception: density CSS (build artifact, soft-fail allowed).                                      |
| **File system safety**           | Always call `stats.isFile()` after `stat()` before `readFile()` to prevent `EISDIR` crashes on directories.                                                                                      |
| **Cross-platform paths**         | Normalize backslashes to forward slashes before path comparisons. Windows manifest keys contain `\`.                                                                                             |

> **Note:** AI-specific behavioral rules (gentle migration, v2/v3 terminology, icon verification, etc.) are maintained in `CONTEXT.md` (shipped with the package for consumer AI agents) and in `.github/copilot-instructions.md` (for agents working inside this monorepo). They are intentionally not duplicated here.
