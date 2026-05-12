# Migrate to v3

## Overview

This workflow provides a structured approach for migrating legacy DB UI v2 code (CSS classes like `cmp-*`, `elm-*`, `rea-*`, Web Components like `<db-*>`, and color tokens like `db-color-*`) to DB UX Design System v3.

## Prerequisites

- DB UX MCP server must be connected and accessible
- The source file(s) to migrate must be accessible
- The target framework must be known

## Required Workflow

**Follow these steps in order. Do not skip steps.**

### Step 1: Scan the File

Call `scan_v2_migration` on the file to get a precise migration plan with exact line numbers and deterministic suggestions.

```text
scan_v2_migration(filePath)
```

The scan report includes:

- All detected v2 patterns (CSS classes, Web Components, color tokens, icon names)
- Line numbers for each finding
- Suggested v3 replacements resolved from the official migration guides

**If the scan returns no findings**, the file may already be on v3. Verify with `docs_search` if uncertain.

### Step 2: Load Relevant Migration Guides

Based on the scan findings, load the specific migration guides needed:

```text
list_migration_guides()
get_migration_guide(guideName)
```

Load only the guides relevant to the patterns found in the scan. Common guides:

- `color-migration` — for `db-color-*` token replacements
- `icon-migration` — for renamed or removed icon names
- Component-specific guides for `cmp-*` / `elm-*` class replacements

### Step 3: Verify Target Components

For each v2 component being replaced, confirm the v3 equivalent exists and load its API:

```text
list_components()
get_component_props(componentName)
get_component_details(componentName)
get_example_code(componentName, exampleName, framework)
```

### Step 4: Resolve Icons and Tokens

If the scan found icon name changes or color token changes:

```text
list_icons()                          // verify new icon names
get_design_tokens("colors")           // verify new color tokens
```

### Step 5: Apply Migration

Apply all changes from the scan report, guided by the migration guides and verified component APIs.

**Rules:**

- Apply all findings from the scan — do not skip any
- Use exact icon names from `list_icons()`, never guess
- Use `var(--db-*)` tokens for all colors and spacing, never hardcode values
- Replace v2 Web Components (`<db-button>`) with the framework-native v3 component (`DBButton`, `<db-button>` with new API, etc.) as appropriate for the target framework
- Remove all `cmp-*`, `elm-*`, `rea-*` CSS classes — these do not exist in v3

### Step 6: Verify

After applying changes, re-scan to confirm no v2 patterns remain:

```text
scan_v2_migration(filePath)
```

The scan should return no findings.

## Checklist

Before marking complete:

- [ ] `scan_v2_migration` called — full list of v2 patterns obtained
- [ ] All relevant migration guides loaded via `get_migration_guide`
- [ ] `list_components` called — all v3 replacement components confirmed
- [ ] `get_component_props` and `get_example_code` called for each replacement component
- [ ] `list_icons` called if icon names changed
- [ ] `get_design_tokens` called if color tokens changed
- [ ] All `cmp-*`, `elm-*`, `rea-*` classes removed
- [ ] All `db-color-*` tokens replaced with v3 equivalents
- [ ] Re-scan confirms zero remaining v2 patterns

## Examples

### Example 1: Migrating a React Button

**Before (v2):**

```tsx
<button className="cmp-button cmp-button--primary">
	<i className="elm-icon">arrow_forward</i>
	Save
</button>
```

**Actions:**

1. `scan_v2_migration("src/components/Button.tsx")` → finds `cmp-button`, `elm-icon`
2. `list_migration_guides()` → load component migration guide
3. `list_components()` → confirm `button` exists
4. `get_component_props("button")`, `get_example_code("button", "Default", "react")`
5. `list_icons()` → find correct v3 icon name for arrow forward

**After (v3):**

```tsx
<DBButton variant="brand" icon="arrow_right">
	Save
</DBButton>
```

### Example 2: Migrating Color Tokens in SCSS

**Before (v2):**

```scss
.my-component {
	color: var(--db-color-cool-gray-500);
	background: var(--db-color-red-500);
}
```

**Actions:**

1. `scan_v2_migration("src/styles/my-component.scss")` → finds `db-color-*` tokens
2. `get_migration_guide("color-migration")` → get replacement token names
3. `get_design_tokens("colors")` → verify new token names exist

**After (v3):**

```scss
.my-component {
	color: var(--db-color-text-default);
	background: var(--db-color-feedback-error-bg-default);
}
```

## Common Issues

### Issue: Scan finds patterns but no migration guide covers them

**Cause:** The component may have been removed in v3 without a direct equivalent.
**Solution:** Use `docs_search` to check if an alternative component or pattern is recommended.

### Issue: v2 Web Component has different prop names in v3

**Cause:** The v3 API was redesigned. Attribute names changed.
**Solution:** Always call `get_component_props` for the v3 component — never assume the old prop names still work.

### Issue: Re-scan still finds v2 patterns after migration

**Cause:** Some patterns were missed or a replacement introduced a new v2 pattern.
**Solution:** Address each remaining finding from the re-scan report individually.
