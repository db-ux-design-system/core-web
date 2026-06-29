---
name: 'implement-component'
description: 'Implements production-ready UI using DB UX Design System v3 components, tokens, and icons with a discovery-first approach.'

triggers:
  - 'implement a component'
  - 'build UI with DB UX'
  - 'create a form'
  - 'add a button'
  - 'use DB UX components'

inputs:
  - name: description
    type: string
    required: true
    description: "Description of the UI to implement (e.g. 'login form with email, password, submit button')"
  - name: framework
    type: string
    required: true
    description: 'Target JS framework: react, angular, vue, or web-components'
  - name: target_file
    type: string
    required: false
    description: 'Path to the file to create or modify'

requires:
  - context: context/guidelines.md
    autoLoad: true

tools:
  - db-ux/list_components
  - db-ux/get_component_props
  - db-ux/get_component_details
  - db-ux/get_example_code
  - db-ux/list_icons
  - db-ux/list_design_token_categories
  - db-ux/get_design_tokens
  - db-ux/docs_search

outputs:
  - '{target_file}'

on_error:
  max_retries: 3
  actions:
    - log: 'Re-check component props and example code via MCP tools before retrying.'
    - fallback: 'If errors persist after 3 retries, report to user with full error output.'
---

# Implement Component

## Pre-Conditions

1. `context/guidelines.md` is loaded in context.
2. MCP server (`@db-ux/mcp-server`) is connected.
3. The target `{framework}` is known.
4. The `@db-ux/*-core-components` node package is installed in the project.

## Workflow

### Phase 1: Discover Components

1. Identify all UI components needed from the `{description}`.
2. Call `list_components()`.
3. Confirm which needed components exist in the returned list and which do not.
4. If a needed DB UX component exists: use it. Do NOT rebuild or replace it with a custom alternative.
5. If a needed direct DB UX component does NOT exist: compose the UI from verified DB UX building blocks that do exist (for example `DBButton`, `DBInput`, `DBCard`, `DBSection`, `DBStack`). Do not invent a fake DB UX component name or fall back to native interactive HTML elements when a suitable DB UX building block exists.

### Phase 2: Load Props and Examples

For each component identified:

1. Call `get_component_props(componentName)`.
2. Call `get_component_details(componentName)`.
3. Call `get_example_code(componentName, exampleName, {framework})`.
4. Record the prop API and adapt the example code to the use case.

### Phase 3: Resolve Icons

1. Identify all icons needed from the `{description}`.
2. Call `list_icons()`.
3. Copy exact icon names from the returned array.
4. Never guess or invent icon names.

### Phase 4: Resolve Design Tokens

1. Call `list_design_token_categories()`.
2. For each needed category (colors, spacing, typography):
   - Call `get_design_tokens(category)`.
3. Use `var(--db-*)` CSS custom properties for all values.
4. Never hardcode hex values, pixel sizes, or magic numbers.

### Phase 5: Check Documentation (if needed)

1. For accessibility requirements: call `docs_search({ query: "<topic>", category: "global", docType: "Accessibility" })`.
2. For component-specific accessibility docs: call `docs_search({ query: "<topic>", category: "component", componentName: "<name>", docType: "Accessibility" })`.
3. For JS framework-specific notes: call `docs_search({ query: "<topic>", category: "component", componentName: "<name>", docType: "React" | "Angular" | "Vue" | "HTML" })`.

### Phase 6: Write Code

1. Write or modify the target file using only verified components, props, icons, and tokens.
2. Rules:
   - Replace `<button>` → `DBButton`
   - Replace `<input>` → `DBInput`
   - Replace `<select>` → `DBSelect`
   - Replace `<textarea>` → `DBTextarea`
   - Replace `<a href>` → `DBLink` (only when styled as UI action, NOT for router links)
   - Use `DBStack`, `DBSection`, `DBCard` for layout where semantically appropriate
   - No inline styles with magic numbers
   - No custom ARIA workarounds when DB UX handles accessibility

## Output Checklist

- [ ] `list_components` called — all components confirmed to exist
- [ ] Existing DB UX components reused wherever available instead of being rebuilt
- [ ] Missing direct components implemented only by composing verified DB UX building blocks
- [ ] `get_component_props` called — prop API known for each component
- [ ] `get_example_code` called for each component with correct framework
- [ ] `list_icons` called — all icon names copied verbatim
- [ ] `get_design_tokens` called — no hardcoded colors or spacing
- [ ] No native HTML interactive elements where DB UX components exist
- [ ] No invented icon names
- [ ] No inline styles with magic numbers

## Red Flags & Anti-Rationalizations

| Thought                                            | Response                                                           |
| -------------------------------------------------- | ------------------------------------------------------------------ |
| "I know this icon name"                            | STOP. Call `list_icons`. Copy the exact name.                      |
| "I'll just use a native button here"               | STOP. Use `DBButton`. No exceptions.                               |
| "This component doesn't exist, so I must stop"     | STOP. Reuse the existing DB UX building blocks that do exist.      |
| "I'll recreate an existing DB UX component myself" | STOP. Use the shipped DB UX component instead of rebuilding it.    |
| "16px is fine for spacing"                         | STOP. Call `get_design_tokens("spacing")`. Use the token.          |
| "I'll hardcode this color"                         | STOP. Call `get_design_tokens("colors")`. Use `var(--db-color-*)`. |
| "I don't need the example code"                    | STOP. Call `get_example_code`. Adapt, don't rewrite from scratch.  |
| "This prop probably exists"                        | STOP. Call `get_component_props`. Verify the exact API.            |
