# DB UX Consumer Guidelines

> **Authority**: This document is the single source of truth for all AI agents operating in projects that consume the DB UX Design System v3.

---

## Components

- **NEVER** use native interactive HTML elements (`<button>`, `<input>`, `<select>`, `<textarea>`) when a DB UX component exists.
- **ALWAYS** use DB UX equivalents: `DBButton`, `DBInput`, `DBSelect`, `DBTextarea`.
- **DO NOT** replace `<a>` tags with `DBLink` when they are used for framework routing (e.g. react-router `<Link>`, Angular `routerLink`). Only replace `<a>` when it is explicitly styled as a standalone UI action.
- **Layout**: Use `DBStack`, `DBSection`, or `DBCard` for layout grouping instead of bare `<div>` wrappers. A plain `<div>` is only acceptable when no semantic grouping or design system layout is needed.

## Tokens

- **NEVER** hardcode color values (`#d40000`, `rgb(...)`, `hsl(...)`).
- **NEVER** hardcode spacing values (`margin: 15px`, `padding: 8px`).
- **ALWAYS** use `var(--db-*)` CSS custom properties from the design token system.
- Common token patterns:
    - Spacing: `var(--db-spacing-fixed-sm)`, `var(--db-spacing-responsive-md)`
    - Colors: `var(--db-color-text-default)`, `var(--db-color-bg-basic-level-1)`
    - Sizing: `var(--db-sizing-md)`
    - Border radius: `var(--db-border-radius-sm)`

## Icons

- **NEVER** guess or invent icon names.
- **ALWAYS** verify icon names by calling the `list_icons` MCP tool before use.
- Icon names use **underscores**: `arrow_right`, `chevron_down` — not `arrow-right` or `arrowRight`.

## MCP Workflow & Discovery

**This section is NON-NEGOTIABLE. AI agents MUST follow this workflow for every UI task.**

An agent must NEVER generate DB UX code from memory or assumptions. Every value — component names, prop APIs, icon names, token values — MUST be grounded in live data from the MCP server.

### Mandatory Steps (in order)

1. **`list_components()`** — Confirm the component exists before using it. If it does not exist: STOP. Do not invent a custom replacement.

2. **`get_component_props(componentName)`** — Load the exact prop API. Never assume prop names, types, or allowed values. Props change between versions.

3. **`get_component_details(componentName)`** — Discover available examples and understand the component's capabilities.

4. **`get_example_code(componentName, exampleName, framework)`** — Fetch the real, generated example code for the target framework. Use this as your starting point — adapt it, do not rewrite from scratch.

5. **`list_icons()`** — Before using ANY icon prop, call this tool and copy the exact name from the result. No exceptions.

6. **`get_design_tokens(category)`** — Before writing ANY color, spacing, or sizing value, call this tool. Use `list_design_token_categories()` first if unsure which category to query.

7. **`docs_search(query)`** — For accessibility requirements, migration notes, or framework-specific guidance.

### Verification

After generating or modifying code, call **`verify_migrated_code`** to run project-level validation (typecheck, lint, build). Fix errors and retry up to 3 times before presenting code to the user.

## Framework Setup

DB UX components require both the theme and component styles. Import them using CSS layers in your application entry point:

```css
@layer db-theme, db-ux;
@import "@db-ux/db-theme/build/styles/rollup.css" layer(db-theme);
@import "@db-ux/core-components/build/styles/bundle.css" layer(db-ux);
```

For framework-specific component imports:

| Framework      | Package                        | Import Pattern                                                                                                                      |
| -------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| React          | `@db-ux/react-core-components` | `import { DBButton, DBInput } from '@db-ux/react-core-components'`                                                                  |
| Angular        | `@db-ux/ngx-core-components`   | `import { DBButton } from '@db-ux/ngx-core-components'` (standalone components, add to `imports` array)                             |
| Vue            | `@db-ux/v-core-components`     | `import { DBButton } from '@db-ux/v-core-components'`                                                                               |
| Web Components | `@db-ux/wc-core-components`    | `import { defineCustomElements } from '@db-ux/wc-core-components'; defineCustomElements();` (call once, then use all `<db-*>` tags) |
