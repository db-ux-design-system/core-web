# DB UX Design System – MCP Server

## Purpose

This MCP server (Model Context Protocol) gives LLMs (e.g. Amazon Q, GitHub Copilot, Claude) structured access to the UI components and code examples of the DB UX Design System. All communication happens exclusively over **stdio**, so the server can be started as a local child process by any MCP-compatible client.

Concrete use cases:

- An LLM asks for the API of a component (e.g. `DBButton`) and receives the Mitosis source file along with generated framework outputs.
- An LLM looks up usage examples for a component in React, Angular, or Vue.
- An LLM checks which components are available in the design system.

## Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js** (≥ 20) | Runtime environment |
| **TypeScript** | Type safety, consistent with the rest of the monorepo |
| **`@modelcontextprotocol/sdk`** | Official MCP SDK — provides `McpServer`, transport classes, and tool/resource primitives |
| **`tsx`** | Development runner (no separate build step required) |
| **`esbuild`** | Production build into a single standalone ESM bundle |

## Monorepo Structure (relevant to this server)

```
core-web/
├── packages/
│   ├── components/          # Mitosis source files (framework-agnostic)
│   │   └── src/
│   │       └── components/
│   │           └── {component}/
│   │               ├── {component}.lite.tsx   # Mitosis component
│   │               ├── model.ts               # Props / types
│   │               └── examples/              # Usage examples (.example.lite.tsx)
│   └── mcp-server/          # This package
│       └── src/
│           ├── index.ts           # MCP server — all tool registrations
│           ├── build-manifest.ts  # Build-time script — generates manifest.json
│           └── manifest.json      # Generated — do not edit manually
└── output/
    ├── react/               # Generated React code
    │   └── src/components/
    │       └── {component}/
    ├── angular/             # Generated Angular code
    │   └── src/components/
    │       └── {component}/
    └── vue/                 # Generated Vue code
        └── src/components/
            └── {component}/
```

## MCP Concepts in This Server

### Tools (LLM-callable functions)

| Tool | Description |
|---|---|
| `list_components` | Returns all available component names |
| `get_component_props` | Returns the raw `model.ts` content for a component |
| `get_component_details` | Returns the list of example names from the showcase file |
| `get_example_code` | Returns generated framework-specific source for a component example |
| `list_icons` | Returns all valid icon names from `all-icons.ts` |
| `list_design_token_categories` | Returns all available design token categories |
| `get_design_tokens` | Returns CSS custom properties and SCSS variables for a token category |

### Manifest (embedded data)

At build time, `build-manifest.ts` collects all component metadata and example source code into `src/manifest.json`. This file is bundled into the final `index.js` so the server can operate without access to the monorepo source tree — for example when invoked via `npx @db-ux/core-foundations` from a consumer project.

## Communication

The server uses `StdioServerTransport` from the MCP SDK. It is started as a child process by the MCP client:

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

## Development

```bash
# Install dependencies (from monorepo root)
npm install

# Start server directly (development mode, live file access)
npm run dev --workspace=@db-ux/mcp-server

# Production build (generates manifest + standalone bundle)
npm run build --workspace=@db-ux/mcp-server
```
