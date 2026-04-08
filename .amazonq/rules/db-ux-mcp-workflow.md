# DB UX MCP Workflow Rules

The `db-ux-mcp` MCP server is the **single source of truth** for all UI development in this repository. Every UI element you write must be grounded in data retrieved from this server — never from memory, assumptions, or external documentation. If the server is unavailable, stop and report the issue rather than guessing.

The server is shipped as part of `@db-ux/core-foundations` and can be started without installation:

```bash
npx --yes @db-ux/core-foundations
```

## Workflow Structure

Work strictly in **Plan-First** order. Never write UI code before completing the discovery phase.

*(**Note for human readers:** The functions listed below, such as `list_components` or `get_component_props`, are the specific **MCP Tools** provided by the server. The AI agent calls these tools automatically in the background to retrieve real-time data from the design system.)*

### Phase 1: Discover

```
list_components
  → confirms the base component exists (e.g. "button", "input" — which correspond to DBButton, DBInput, etc.)
  → if not found: stop. Do not invent custom components or fall back to generic HTML tags if the user requested a JavaScript framework context (like React, Angular, or Vue).
```

### Phase 2: Load API & Examples

```
get_component_props(componentName)
  → reveals all props, types, and required attributes

get_component_details(componentName)
  → lists available example names (e.g. "Variant", "Show Icon Leading")

get_example_code(componentName, exampleName, framework)
  → returns the exact generated source for the target framework
  → this is the code you adapt, not invent
```

### Phase 3: Resolve Tokens & Icons

```
list_design_token_categories
  → returns available categories ("colors", "spacing", "typography", etc.)
  → call this if you're unsure which category to query

get_design_tokens(category)
  → call for every spacing, color, or typography value you need
  → use categories from list_design_token_categories

list_icons
  → call once per task before using any icon prop
  → copy the exact name from the returned array
```

### Phase 4: Docs & Guidelines

```
docs_search(query)
  → searches conceptual documentation (guidelines, A11y, migration, ADRs)
  → searches component-specific markdown docs
  → call when you need context about design principles, accessibility requirements, or implementation guidelines
```

### Phase 5: Write Code

Only after phases 1–4 are complete, write or modify files. Adapt the output of `get_example_code` to the specific use case — do not rewrite it from scratch.

## Framework Support

`get_example_code` requires an explicit `framework` parameter. Always match it to the project's framework:

| Framework      | Parameter value    | File extension |
|----------------|--------------------|----------------|
| React          | `"react"`          | `.tsx`         |
| Angular        | `"angular"`        | `.ts` (template inline in `@Component`) |
| Vue            | `"vue"`            | `.vue`         |
| Web Components | `"web-components"` | `.html` / `.ts`|
| HTML           | `"html"`           | `.html`        |

```typescript
// ✅ CORRECT: explicit framework
get_example_code("button", "Show Icon Leading", "react")
get_example_code("button", "Show Icon Leading", "angular")
get_example_code("button", "Show Icon Leading", "vue")
get_example_code("button", "Show Icon Leading", "web-components")
get_example_code("button", "Show Icon Leading", "html")

// ❌ WRONG: writing framework code from memory
// <DBButton icon="arrow-right"> ← icon name unverified, may not exist
```

## Defensive Restrictions

### Colors & Spacing — always use tokens

```html
<!-- ✅ CORRECT -->
<div style="gap: var(--db-spacing-fixed-md); color: var(--db-color-text-default)">

<!-- ❌ WRONG -->
<div style="gap: 16px; color: #333333">
```

```scss
// ✅ CORRECT
.my-element {
  margin-block: var(--db-spacing-fixed-sm);
}

// ❌ WRONG
.my-element {
  margin-block: 8px;
}
```

### Icons — never guess

```tsx
// ✅ CORRECT: name verified via list_icons
<DBButton icon="arrow_right">Weiter</DBButton>

// ❌ WRONG: invented name
<DBButton icon="arrow-right">Weiter</DBButton>
<DBButton icon="chevronRight">Weiter</DBButton>
```

### Native HTML primitives — replace with DB UX components

| ❌ Native element | ✅ DB UX replacement             |
| ----------------- | -------------------------------- |
| `<button>`        | `DBButton`                       |
| `<input>`         | `DBInput`                        |
| `<select>`        | `DBSelect`                       |
| `<a>`             | `DBLink`                         |
| `<div>` (layout)  | `DBStack`, `DBSection`, `DBCard` |
| `<textarea>`      | `DBTextarea`                     |

```tsx
// ✅ CORRECT
<DBButton type="button" variant="brand">Speichern</DBButton>

// ❌ WRONG
<button className="btn btn-primary" style="background: #d40000">Speichern</button>
```

### Interactive elements — never build custom

```tsx
// ❌ WRONG: custom toggle built from primitives
<div role="button" onClick={toggle} style="cursor: pointer; padding: 8px">
  Toggle
</div>

// ✅ CORRECT
<DBButton onClick={toggle}>Toggle</DBButton>
```

## Checklist

Before completing any UI task, verify every item:

- [ ] `list_components` was called — component exists in the design system
- [ ] `get_component_props` was called — prop API is known, no guessing
- [ ] `get_example_code` was called for every UI element with the correct framework
- [ ] `list_icons` was called — all icon names are copied verbatim from the result
- [ ] `list_design_token_categories` was called if unsure about available token categories
- [ ] `get_design_tokens` was called — no hardcoded color or spacing values
- [ ] `docs_search` was called if conceptual or accessibility context was required
- [ ] No native HTML interactive elements (`<button>`, `<input>`, `<a>`, `<select>`) used where DB UX components exist
- [ ] No inline styles with magic numbers (`margin: 15px`, `color: #fff`)
- [ ] No invented or assumed icon names
- [ ] Accessibility ensured through use of original DB UX components (not custom ARIA workarounds)
- [ ] Framework parameter in `get_example_code` matches the target project framework
