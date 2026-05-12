# Implement Component

## Overview

This workflow provides a structured, discovery-first approach for building production-ready UI using DB UX Design System v3 components, design tokens, and icons. Every value must be grounded in data retrieved from the MCP server — never from memory or assumptions.

## Prerequisites

- DB UX MCP server must be connected and accessible
- The target framework must be known (React, Angular, Vue, Web Components, or HTML)
- The appropriate `@db-ux/*-core-components` package must be installed in the project

## Required Workflow

**Follow these steps in order. Do not skip steps.**

### Step 1: Discover Components

Call `list_components` to confirm every component you intend to use exists in the design system.

```text
list_components()
```

- If a component is not in the list: **stop**. Do not invent custom components or fall back to native HTML elements (`<button>`, `<input>`, `<a>`, `<select>`) in a JavaScript framework context.
- Component names in the list (e.g. `"button"`) correspond to framework components like `DBButton`, `db-button`.

### Step 2: Load Props and Examples

For each component you will use:

```text
get_component_props(componentName)
get_component_details(componentName)
```

Then fetch the most relevant example for your use case:

```text
get_example_code(componentName, exampleName, framework)
```

- Always match `framework` to the project: `"react"`, `"angular"`, `"vue"`, `"web-components"`, or `"html"`
- Adapt the returned code to the specific use case — do not rewrite from scratch

### Step 3: Resolve Icons

Before using any icon prop, call:

```text
list_icons()
```

Copy the exact icon name from the returned array. Never guess or invent icon names.

```tsx
// ✅ CORRECT: name verified via list_icons
<DBButton icon="arrow_right">Continue</DBButton>

// ❌ WRONG: invented name
<DBButton icon="arrow-right">Continue</DBButton>
```

### Step 4: Resolve Design Tokens

Before writing any color, spacing, or typography value:

```text
list_design_token_categories()
get_design_tokens(category)
```

Always use `var(--db-*)` CSS custom properties. Never hardcode hex values or pixel sizes.

```scss
// ✅ CORRECT
.my-element {
	gap: var(--db-spacing-fixed-md);
	color: var(--db-color-text-default);
}

// ❌ WRONG
.my-element {
	gap: 16px;
	color: #333333;
}
```

### Step 5: Check Documentation (if needed)

For accessibility requirements, component guidelines, or framework-specific notes:

```text
docs_search(query, category)
```

### Step 6: Write Code

Only after steps 1–5 are complete, write or modify files.

**Rules:**

- Replace all native HTML interactive elements with DB UX equivalents:

    | ❌ Native    | ✅ DB UX     |
    | ------------ | ------------ |
    | `<button>`   | `DBButton`   |
    | `<input>`    | `DBInput`    |
    | `<select>`   | `DBSelect`   |
    | `<a>`        | `DBLink`     |
    | `<textarea>` | `DBTextarea` |

- Use `DBStack`, `DBSection`, or `DBCard` for layout instead of bare `<div>` wrappers
- No inline styles with magic numbers
- No custom ARIA workarounds when a DB UX component already handles accessibility

## Checklist

Before marking complete:

- [ ] `list_components` called — all components confirmed to exist
- [ ] `get_component_props` called — prop API known for each component
- [ ] `get_example_code` called for each component with the correct framework
- [ ] `list_icons` called — all icon names copied verbatim
- [ ] `get_design_tokens` called — no hardcoded colors or spacing
- [ ] No native HTML interactive elements used where DB UX components exist
- [ ] No invented icon names
- [ ] No inline styles with magic numbers

## Examples

### Example 1: Login Form (React)

User: "Create a login form with email, password, and a submit button"

**Actions:**

1. `list_components()` → confirm `input`, `button` exist
2. `get_component_props("input")`, `get_component_props("button")`
3. `get_component_details("input")`, `get_component_details("button")`
4. `get_example_code("input", "Default", "react")`, `get_example_code("button", "Default", "react")`
5. `list_icons()` → find icon for submit button if needed
6. `get_design_tokens("spacing")` → use tokens for layout gaps
7. Write the form using `DBInput` and `DBButton`, no native elements

### Example 2: Navigation with Icons (Angular)

User: "Build a navigation bar with home, settings, and logout links"

**Actions:**

1. `list_components()` → confirm `navigation`, `link` or `button` exist
2. `get_component_props` and `get_component_details` for each
3. `list_icons()` → find `home`, `settings`, `logout` icon names
4. `get_example_code` for each component with `"angular"`
5. Write the template using verified component names and icon names

## Common Issues

### Issue: Component renders but icon is missing

**Cause:** Icon name was guessed and does not exist in the icon set.
**Solution:** Call `list_icons()` and copy the exact name from the result.

### Issue: Spacing looks wrong

**Cause:** Hardcoded pixel values instead of design tokens.
**Solution:** Call `get_design_tokens("spacing")` and replace all hardcoded values with `var(--db-spacing-*)` tokens.

### Issue: Component prop not working

**Cause:** Prop name or value was assumed rather than verified.
**Solution:** Call `get_component_props(componentName)` and check the exact prop name, type, and allowed values.
