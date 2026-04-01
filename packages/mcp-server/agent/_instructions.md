## UI Development & MCP Workflow

**The `db-ux-mcp` MCP server is the single source of truth for all UI development. The following rules are MANDATORY and non-negotiable.**

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

### Before writing any UI code, you MUST call these MCP tools in order:

1. `list_components` — verify the component exists in the design system
2. `get_component_props` — load the exact prop API
3. `get_component_details` — list available examples for the component
4. `docs_search` — search guidelines, accessibility docs, or component-specific documentation if needed
5. `get_example_code` — fetch the real generated code for the target framework
6. `list_design_token_categories` — get available token categories if unsure which to query
7. `get_design_tokens` — retrieve spacing, color, and typography tokens
8. `list_icons` — look up the exact icon name before using any icon prop
9. `list_migration_guides` — list all available migration guides before any migration task
10. `get_migration_guide` — load the full content of a specific migration guide

### DON'Ts — these are hard violations:

- **NEVER** use native HTML elements (`<button>`, `<input>`, `<select>`, `<a>`) when a DB UX component exists (e.g. `DBButton`, `DBInput`, `DBSelect`, `DBLink`)
- **NEVER** use `<div>` or `<span>` for layout when `DBStack`, `DBSection`, or `DBCard` apply
- **NEVER** hardcode color values (`#d40000`, `rgb(...)`) — use design tokens exclusively
- **NEVER** write inline styles with magic numbers (`style="margin: 15px"`) — use `var(--db-...)` tokens
- **NEVER** invent or guess icon names — always call `list_icons` first

### DOs:

```html
<!-- ✅ CORRECT: DB UX component with token-based spacing -->
<DBButton variant="brand" icon="arrow_right">Continue</DBButton>
<div style="gap: var(--db-spacing-fixed-md)">
	<!-- ❌ WRONG: native element + hardcoded values -->
	<button style="background: #d40000; margin: 15px">Continue</button>
</div>
```
