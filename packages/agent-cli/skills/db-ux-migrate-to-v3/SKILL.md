---
name: db-ux-migrate-to-v3
description: Migrates legacy DB UI v2 code (CSS classes like cmp-*, elm-*, rea-*, Web Components like <db-*>, and color tokens like db-color-*) to DB UX Design System v3. Use when the user mentions "migrate", "v2 to v3", legacy class names, or asks to update old DB UI code.
disable-model-invocation: false
---

# Migrate to v3

## Skill Boundaries

- Use this skill when the task is refactoring existing v2 code to v3.
- If the user wants to build new UI from scratch, switch to [db-ux-implement-component](../db-ux-implement-component/SKILL.md).
- If the user wants to generate project-specific rules after migration, switch to [db-ux-create-rules](../db-ux-create-rules/SKILL.md).

## v2 Pattern Reference

| v2 Pattern              | Description                                             |
| ----------------------- | ------------------------------------------------------- |
| `cmp-*` CSS classes     | Component classes (e.g. `cmp-button`, `cmp-input`)      |
| `elm-*` CSS classes     | Element classes (e.g. `elm-icon`, `elm-label`)          |
| `rea-*` CSS classes     | Reactive/state classes                                  |
| `<db-*>` Web Components | Old Web Component tags (e.g. `<db-button>`) with v2 API |
| `db-color-*` tokens     | Old color token names (e.g. `--db-color-cool-gray-500`) |
| Legacy icon names       | Renamed or removed icons                                |

## Required Workflow

**Follow these steps in order. Do not skip steps.**

### Step 1: Scan the File

```text
scan_v2_migration(filePath)
```

Returns a JSON report with:

- All detected v2 patterns with exact line numbers
- Suggested v3 replacements from official migration guides

If the scan returns no findings, the file may already be on v3. Verify with `docs_search` if uncertain.

### Step 2: Load Relevant Migration Guides

```text
list_migration_guides()
get_migration_guide(guideName)
```

Load only guides relevant to the scan findings. Common guides:

- `color-migration` — `db-color-*` token replacements
- `icon-migration` — renamed/removed icon names
- `component-migration` — `cmp-*` / `elm-*` class replacements
- `general-migration` — general v2→v3 changes

### Step 3: Verify Target Components

For each v2 component being replaced:

```text
list_components()
get_component_props(componentName)
get_example_code(componentName, exampleName, framework)
```

Never assume the v3 prop API matches v2 — always verify.

### Step 4: Resolve Icons and Tokens (if changed)

```text
list_icons()                    // verify new icon names
get_design_tokens("colors")     // verify new color token names
```

### Step 5: Apply Migration

Apply all findings from the scan report:

- Remove all `cmp-*`, `elm-*`, `rea-*` CSS classes — they do not exist in v3
- Replace `db-color-*` tokens with `var(--db-*)` v3 equivalents
- Replace v2 Web Component attributes with v3 prop API (verified via `get_component_props`)
- Use exact icon names from `list_icons()` — never guess

### Step 6: Re-scan to Verify

```text
scan_v2_migration(filePath)
```

Must return zero findings before marking complete.

## Checklist

- [ ] `scan_v2_migration` called — full v2 pattern list obtained
- [ ] All relevant migration guides loaded
- [ ] `get_component_props` + `get_example_code` called for each replacement component
- [ ] `list_icons` called if icon names changed
- [ ] `get_design_tokens` called if color tokens changed
- [ ] All `cmp-*`, `elm-*`, `rea-*` classes removed
- [ ] All `db-color-*` tokens replaced
- [ ] Re-scan confirms zero remaining v2 patterns

## Examples

### React Button Migration

**Before (v2):**

```tsx
<button className="cmp-button cmp-button--primary">
	<i className="elm-icon">arrow_forward</i>
	Save
</button>
```

**Actions:**

1. `scan_v2_migration("src/components/Button.tsx")` → finds `cmp-button`, `elm-icon`
2. `list_migration_guides()` → load `component-migration`
3. `list_components()` → confirm `button`
4. `get_component_props("button")`, `get_example_code("button", "Default", "react")`
5. `list_icons()` → find correct v3 name for arrow forward

**After (v3):**

```tsx
<DBButton variant="brand" icon="arrow_right">
	Save
</DBButton>
```

### SCSS Color Token Migration

**Before (v2):**

```scss
.my-component {
	color: var(--db-color-cool-gray-500);
	background: var(--db-color-red-500);
}
```

**Actions:**

1. `scan_v2_migration("src/styles/my-component.scss")` → finds `db-color-*`
2. `get_migration_guide("color-migration")` → get replacement names
3. `get_design_tokens("colors")` → verify new tokens exist

**After (v3):**

```scss
.my-component {
	color: var(--db-color-text-default);
	background: var(--db-color-feedback-error-bg-default);
}
```

## Common Issues

**Scan finds patterns but no guide covers them** → Component may have been removed in v3. Use `docs_search` to check for alternatives.

**v2 Web Component has different prop names in v3** → Always call `get_component_props` — never assume old prop names still work.

**Re-scan still finds patterns** → Address each remaining finding individually. A replacement may have accidentally introduced a new v2 pattern.
