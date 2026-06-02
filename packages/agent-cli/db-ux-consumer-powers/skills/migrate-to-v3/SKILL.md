---
name: "migrate-to-v3"
description: "Migrates legacy DB UI v2 code (cmp-*, elm-*, rea-* classes, <db-*> Web Components, db-color-* tokens) to DB UX Design System v3."

triggers:
    - "migrate to v3"
    - "upgrade from v2"
    - "convert legacy DB UI code"
    - "replace cmp-* classes"
    - "migrate db-color tokens"

inputs:
    - name: file_path
      type: string
      required: true
      description: "Path to the file or directory to migrate"
    - name: framework
      type: string
      required: true
      description: "Target framework: react, angular, vue, or web-components"

requires:
    - context: context/guidelines.md
      autoLoad: true

tools:
    - db-ux/scan_v2_migration
    - db-ux/list_migration_guides
    - db-ux/get_migration_guide
    - db-ux/list_components
    - db-ux/get_component_props
    - db-ux/get_component_details
    - db-ux/get_example_code
    - db-ux/list_icons
    - db-ux/get_design_tokens
    - db-ux/docs_search

outputs:
    - "{file_path}"

on_error:
    max_retries: 3
    actions:
        - log: "Call verify_migrated_code and fix reported errors before retrying."
        - fallback: "If errors persist after 3 retries, report to user with full error output."
---

# Migrate to v3

## Pre-Conditions

1. `context/guidelines.md` is loaded in context.
2. MCP server (`@db-ux/mcp-server`) is connected.
3. The source file at `{file_path}` is accessible.
4. The target `{framework}` is known.

## Workflow

### Phase 1: Scan

1. Call `scan_v2_migration({file_path})`.
2. Capture the full findings report: v2 CSS classes (`cmp-*`, `elm-*`, `rea-*`), Web Components (`<db-*>`), color tokens (`db-color-*`), icon names.
3. If the scan returns zero findings → file is already v3. Call `docs_search` to confirm if uncertain. STOP.

### Phase 2: Load Migration Guides

1. Call `list_migration_guides()`.
2. For each pattern category found in the scan, call `get_migration_guide(guideName)`:
    - `cmp-*` / `elm-*` / `rea-*` classes → component-specific guide
    - `db-color-*` tokens → `color-migration` guide
    - Icon name changes → `icon-migration` guide
3. Record replacement mappings from each guide.

### Phase 3: Verify Target Components

1. Call `list_components()`.
2. For each v2 component being replaced, confirm the v3 equivalent exists.
3. For each confirmed component:
    - Call `get_component_props(componentName)`.
    - Call `get_component_details(componentName)`.
    - Call `get_example_code(componentName, exampleName, {framework})`.

### Phase 4: Resolve Icons and Tokens

1. If scan found icon changes: call `list_icons()`. Copy exact icon names.
2. If scan found color token changes: call `get_design_tokens("colors")`. Verify new token names.

### Phase 5: Apply Migration

1. Apply ALL findings from the scan report. Do not skip any.
2. Replace v2 Web Components with framework-native v3 components using verified props.
3. Remove all `cmp-*`, `elm-*`, `rea-*` CSS classes.
4. Replace all `db-color-*` tokens with verified v3 equivalents.
5. Use exact icon names from `list_icons()` — never guess.
6. Use `var(--db-*)` tokens for all colors and spacing — never hardcode.

### Phase 6: Verify

1. Call `scan_v2_migration({file_path})` again.
2. If findings remain → address each individually, then re-scan.
3. Repeat until the scan returns zero findings.

## Output Checklist

- [ ] `scan_v2_migration` called — full v2 pattern list obtained
- [ ] All relevant migration guides loaded via `get_migration_guide`
- [ ] `list_components` called — all v3 replacement components confirmed
- [ ] `get_component_props` and `get_example_code` called for each replacement
- [ ] `list_icons` called if icon names changed
- [ ] `get_design_tokens` called if color tokens changed
- [ ] All `cmp-*`, `elm-*`, `rea-*` classes removed
- [ ] All `db-color-*` tokens replaced with v3 equivalents
- [ ] Re-scan confirms zero remaining v2 patterns

## Red Flags & Anti-Rationalizations

| Thought                                        | Response                                                     |
| ---------------------------------------------- | ------------------------------------------------------------ |
| "I know the new icon name"                     | STOP. Call `list_icons`. Use the exact name.                 |
| "This color token probably maps to…"           | STOP. Call `get_design_tokens`. Verify.                      |
| "I'll skip the re-scan"                        | STOP. Re-scan is mandatory. Zero findings required.          |
| "The old prop name probably still works"       | STOP. Call `get_component_props`. Check exact API.           |
| "I'll just remove the class without replacing" | STOP. Check the migration guide for the correct replacement. |
