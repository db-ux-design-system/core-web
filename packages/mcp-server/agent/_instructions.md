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
- **NEVER** write inline styles (`style="margin: 15px"`)
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

---

## Available AI Workflows (Prompts)

The MCP server exposes predefined prompts that orchestrate complex cognitive workflows. They force the AI to plan, verify via tools, and analyze before generating output. You can trigger these in your AI chat UI (if supported) or via the MCP Inspector.

### `scaffold_page` — Rapid Prototyping

Generates the initial structure of a complete web page or complex module. Enforces the full DB UX MCP discovery workflow before writing any code.

**Parameters:**

| Parameter                 | Required | Description                                                                                         |
| ------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `page_type`               | Yes      | The functional domain of the page (e.g. `Login Portal`, `Dashboard`, `Settings Form`)               |
| `framework`               | Yes      | Target framework: `react`, `angular`, `vue`, `web-components`, or `html`                            |
| `additional_requirements` | No       | Optional functional or architectural constraints (e.g. `must include a data table with pagination`) |

**Workflow:**

1. **Planning** — Deconstructs the page into logical UI blocks (Header, Main Content, Form Fields, etc.)
2. **Component Discovery** — Calls `list_components` to verify every planned block maps to a DB UX component. Reports missing components instead of falling back to native HTML
3. **Props & Examples** — For each component: `get_component_props` → `get_component_details` → `get_example_code` with the target framework
4. **Token & Asset Validation** — `list_design_token_categories` → `get_design_tokens` for needed categories, `list_icons` for any icon props

**Output structure:**

1. "Architectural Blueprint" — Components selected, examples used, how requirements influenced the plan
2. "Implementation" — Complete source code with correct `@db-ux/*` imports, no hardcoded values
3. "Accessibility Statement" — How semantic HTML and ARIA states are applied through DB UX components

### `review_ui_code` — Quality Assurance & A11y

Performs a strict multi-layered QA, accessibility, and DB UX compliance audit on a provided code snippet.

**Parameters:**

| Parameter      | Required | Description                                                              |
| -------------- | -------- | ------------------------------------------------------------------------ |
| `code_snippet` | Yes      | The source code to evaluate (markup, styling, logic). Max 10,000 chars   |
| `framework`    | Yes      | Target framework: `react`, `angular`, `vue`, `web-components`, or `html` |

**Workflow:**

1. **Cross-Reference Components** — Calls `list_components` and `get_example_code` to check if components deviate from official DB UX specs (deprecated props, missing slots, wrong variants)
2. **Token Audit** — Calls `get_design_tokens` and scans for hardcoded hex values, rem/px/em definitions, or raw font families

**Analysis domains:**

- Architecture & Compliance — Declarative selectors, correct framework imports, no inline styles
- Accessibility (WCAG 1.3.5, 1.4.3, 2.1.1, 2.1.2) — Input purposes, contrast, keyboard traps, ARIA usage

**Output structure:**

1. "Review Summary" — High-level quality assessment
2. "Critical Violations" — Prioritized list with evidence from DB UX tools
3. "The Refactored Solution" — Fully corrected, DB UX-compliant code

### `migrate_component` — Legacy Refactoring

Transforms legacy UI code (e.g. Bootstrap, native HTML, DB UI) into the modern DB UX architecture.

**Parameters:**

| Parameter          | Required | Description                                                                 |
| ------------------ | -------- | --------------------------------------------------------------------------- |
| `legacy_code`      | Yes      | The outdated source code (DB UI, Bootstrap, raw HTML/CSS). Max 10,000 chars |
| `source_context`   | Yes      | Origin of the legacy code: `db-ui`, `bootstrap-4`, `native-html`            |
| `target_framework` | Yes      | Target framework: `react`, `angular`, `vue`, `web-components`, or `html`    |

**Workflow:**

1. **Knowledge Acquisition** — Calls `list_migration_guides` then `get_migration_guide` for relevant versions. Studies package renames, missing components, prop changes
2. **Asset Scanning** — Scans for color references (CSS classes, hex values, legacy `--db-color-*` variables) and icon references. Loads `color-migration` and `icon-migration` guides as sole source of truth. Flags any values not found in the tables
3. **DB UX Mapping** — Calls `list_components`, `get_component_props`, and `get_example_code` to verify modern equivalents
4. **Token Migration** — Calls `get_design_tokens` to replace legacy CSS variables, utility classes, or hardcoded values

**Output structure:**

1. "Migration Analysis" — Maps each legacy element to its modern replacement, referencing migration guide rules
2. "Refactored Code" — Fully migrated, production-ready code with correct `@db-ux/*` imports
3. "Actionable Post-Migration Notes" — Behavioral shifts, ARIA states to verify, colors/icons not found in migration tables

### `audit_accessibility` — Deep A11y Scan

Specialized deep scan exclusively for inclusion and accessibility standards (WCAG 2.2 AA). Goes beyond traditional linters by evaluating interactive patterns, focus orders, and generating manual test scripts.

**Parameters:**

| Parameter      | Required | Description                                                              |
| -------------- | -------- | ------------------------------------------------------------------------ |
| `code_snippet` | Yes      | The UI source code to audit for accessibility. Max 10,000 chars          |
| `framework`    | Yes      | Target framework: `react`, `angular`, `vue`, `web-components`, or `html` |

**Workflow:**

1. **Context Gathering** — Calls `docs_search` with query `accessibility` to retrieve global DB UX accessibility guidelines
2. **Component Verification** — Calls `list_components` and `get_example_code` to verify how used components handle ARIA attributes and keyboard events natively

**Analysis domains:**

- Screen Reader Support — Visually hidden texts, decorative images hidden via `aria-hidden="true"`
- Keyboard Navigation — Keyboard traps, logical focus order, Tab reachability
- Semantics & ARIA — Correct roles, `aria-expanded`, `aria-describedby`, no unnecessary overrides of native HTML semantics

**Output structure:**

1. "Accessibility Audit Summary" — High-level A11y compliance assessment
2. "WCAG Violations" — Prioritized list with evidence from DB UX tools or WCAG guidelines
3. "Manual Testing Script" — Step-by-step instructions for keyboard-only and screen reader testing
4. "Remediated Code" — Fully accessible, DB UX-compliant code
