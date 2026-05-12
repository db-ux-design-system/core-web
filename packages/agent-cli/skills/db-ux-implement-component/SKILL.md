---
name: db-ux-implement-component
description: Builds production-ready UI using DB UX Design System v3 components, design tokens, and icons. Use when the user asks to create, build, or implement any UI element in a project that uses @db-ux/*-core-components. Enforces the discovery-first MCP workflow — no component, icon, or token value is ever assumed.
disable-model-invocation: false
---

# Implement Component

## Skill Boundaries

- Use this skill when the deliverable is UI code in the user's repository using DB UX components.
- If the user asks to migrate existing v2 code, switch to [db-ux-migrate-to-v3](../db-ux-migrate-to-v3/SKILL.md).
- If the user asks to generate project-specific agent rules, switch to [db-ux-create-rules](../db-ux-create-rules/SKILL.md).
- If the user asks to add a new component to the design system itself, switch to [db-ux-develop-component](../db-ux-develop-component/SKILL.md).
- If the user asks to add an ESLint rule, switch to [db-ux-add-eslint-rule](../db-ux-add-eslint-rule/SKILL.md).

## Prerequisites

- DB UX MCP server connected and accessible
- Target framework known: React, Angular, Vue, Web Components, or HTML
- `@db-ux/*-core-components` installed in the project

## Required Workflow

**Follow these steps in order. Do not skip steps.**

### Step 1: Discover Components

```text
list_components()
```

Confirm every component you intend to use is in the list. If a component is missing: **stop**. Do not fall back to native HTML elements (`<button>`, `<input>`, `<a>`, `<select>`) in a JS framework context.

Component list names (e.g. `"button"`) map to framework components: `DBButton` / `db-button`.

### Step 2: Load Props and Examples

For each component:

```text
get_component_props(componentName)
get_component_details(componentName)
get_example_code(componentName, exampleName, framework)
```

Match `framework` to the project: `"react"` | `"angular"` | `"vue"` | `"web-components"` | `"html"`.

Adapt the returned code — do not rewrite from scratch.

### Step 3: Resolve Icons

```text
list_icons()
```

Copy the exact name from the result. Never guess.

```tsx
// ✅ CORRECT
<DBButton icon="arrow_right">Continue</DBButton>
// ❌ WRONG — invented name
<DBButton icon="arrow-right">Continue</DBButton>
```

### Step 4: Resolve Design Tokens

```text
list_design_token_categories()
get_design_tokens(category)
```

Use `var(--db-*)` CSS custom properties. Never hardcode hex or pixel values.

```scss
// ✅ CORRECT
gap: var(--db-spacing-fixed-md);
// ❌ WRONG
gap: 16px;
```

### Step 5: Check Docs (if needed)

```text
docs_search(query, category)
```

Call for accessibility requirements, component guidelines, or framework-specific notes.

### Step 6: Write Code

**Native element replacement table:**

| ❌ Native        | ✅ DB UX                         |
| ---------------- | -------------------------------- |
| `<button>`       | `DBButton`                       |
| `<input>`        | `DBInput`                        |
| `<select>`       | `DBSelect`                       |
| `<a>`            | `DBLink`                         |
| `<textarea>`     | `DBTextarea`                     |
| `<div>` (layout) | `DBStack`, `DBSection`, `DBCard` |

No inline styles with magic numbers. No custom ARIA workarounds when a DB UX component already handles accessibility.

## Checklist

- [ ] `list_components` called — all components confirmed
- [ ] `get_component_props` + `get_example_code` called per component with correct framework
- [ ] `list_icons` called — all icon names copied verbatim
- [ ] `get_design_tokens` called — no hardcoded colors or spacing
- [ ] No native HTML interactive elements used where DB UX equivalents exist

## Examples

### Login Form (React)

User: "Create a login form with email, password, and submit"

1. `list_components()` → confirm `input`, `button`
2. `get_component_props` + `get_example_code` for both with `"react"`
3. `list_icons()` → find submit icon if needed
4. `get_design_tokens("spacing")` → gap tokens
5. Write using `DBInput` + `DBButton`, no native elements

### Navigation Bar (Angular)

User: "Build a nav bar with home, settings, logout"

1. `list_components()` → confirm `navigation`, `navigation-item`
2. `get_component_props` + `get_example_code` with `"angular"`
3. `list_icons()` → find `home`, `settings`, `logout` exact names
4. Write template using verified names

## Common Issues

**Icon renders nothing** → Name was guessed. Call `list_icons()` and copy exactly.

**Spacing looks wrong** → Hardcoded pixels used. Call `get_design_tokens("spacing")` and replace with `var(--db-spacing-*)`.

**Prop not working** → Name assumed. Call `get_component_props(name)` and verify exact prop name and allowed values.
