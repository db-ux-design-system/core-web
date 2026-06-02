---
name: modify-db-component
description: "Modifies an existing DB UX Design System Mitosis component (add variants, update props, change styles)."

triggers:
    - "modify component"
    - "change component"
    - "update component"
    - "add variant to component"
    - "add prop to component"
    - "edit component"
    - "refactor component"

inputs:
    - name: component_slug
      type: string
      required: true
      description: "Component directory name in kebab-case (e.g. 'button', 'navigation-item')"
    - name: component_name
      type: string
      required: true
      description: "Component symbol name in PascalCase (e.g. 'Button', 'NavigationItem')"
    - name: instruction
      type: string
      required: true
      description: "What to change (e.g. 'add a new variant called outline')"

requires:
    - context: context/architecture.md
      autoLoad: true

tools:
    - db-ux/list_components
    - db-ux/get_component_props
    - db-ux/get_component_details
    - db-ux/get_example_code
    - db-ux/get_design_tokens
    - db-ux/list_design_token_categories
    - db-ux/list_icons
    - db-ux/docs_search

outputs:
    - "packages/components/src/components/{component_slug}/model.ts"
    - "packages/components/src/components/{component_slug}/{component_slug}.lite.tsx"
    - "packages/components/src/components/{component_slug}/{component_slug}.scss"
    - "packages/components/src/components/{component_slug}/{component_slug}.spec.tsx"

on_error:
    max_retries: 3
    actions:
        - log: "Review the shell output (lint/test/build) and fix reported errors before retrying."
        - fallback: "If errors persist after 3 retries, report to user with full error output."
---

# Skill: Modify DB Component

## Variable Convention

Throughout this skill:

- `{component_slug}` = kebab-case directory/file name (e.g. `navigation-item`)
- `{component_name}` = PascalCase symbol name (e.g. `NavigationItem`)
- `DB{component_name}` = full component class name (e.g. `DBNavigationItem`)
- `.db-{component_slug}` = CSS class (e.g. `.db-navigation-item`)

## Pre-Conditions

1. `context/architecture.md` IS in context.
2. MCP (`@db-ux/mcp-server`) IS connected.
3. `component_slug` and `component_name` ARE provided and component EXISTS (verify via `list_components`).
4. Modification instruction IS provided by user.

## Execution

### Step 0: Analyze Existing Component

1. Call `list_components` to confirm the component exists.
2. Call `get_component_props` with the component name to load the current `model.ts`.
3. Call `get_component_details` to understand the current examples and showcase structure.
4. Read the existing files:
    - `packages/components/src/components/{component_slug}/model.ts`
    - `packages/components/src/components/{component_slug}/{component_slug}.lite.tsx`
    - `packages/components/src/components/{component_slug}/{component_slug}.scss`
    - `packages/components/src/components/{component_slug}/{component_slug}.spec.tsx`
5. Read and capture the FULL current state before making ANY changes.

### Step 1: RED - Update Tests First

Based on the user's instruction, update `{component_slug}.spec.tsx`:

- If adding a new variant: add screenshot and aria-snapshot tests for that variant.
- If adding a new prop: add test cases exercising the new prop.
- If changing behavior: update existing assertions to reflect the new expected behavior.

Rules:

- ALL new variants MUST get `toHaveScreenshot()` tests.
- ALL new variants MUST get aria-snapshot tests.
- Axe-core accessibility test scope (`.db-{component_slug}`) remains unchanged.

**After updating the spec, build the project and run the showcase tests:**

```bash
pnpm run build && pnpm run build-outputs
cd showcases/react-showcase && pnpm run test:e2e
```

**The RED phase is only complete if:**

1. The command exits non-zero.
2. The failing test names are captured in the output.
3. The failure is caused by missing or incomplete implementation, NOT by syntax errors in the spec itself.

If the spec has syntax errors, fix them first and re-run until you get clean "missing implementation" failures.

### Step 2: GREEN - Implement the Change

#### 2a: Update `model.ts`

- Read the existing `model.ts` to understand the current type definitions and prop structure.
- If adding a prop: add it to `DB{component_name}DefaultProps` with a JSDoc comment.
- If changing a type: update the type definition.
- NEVER remove existing props without explicit user confirmation (breaking change).

#### 2b: Update `{component_slug}.lite.tsx`

- Read the existing `.lite.tsx` to understand the current component structure and patterns.
- Apply changes corresponding to the `model.ts` update, following the patterns already used in the component.
- NEVER use inline styles in `.lite.tsx` components.
- PRESERVE `id={props.id ?? props.propOverrides?.id}` pattern.
- PRESERVE `cls('db-{component_slug}', props.className)` usage.

#### 2c: Update `{component_slug}.scss`

1. Call `list_design_token_categories` then `get_design_tokens` for relevant categories.
2. Add styles using ONLY `--db-*` tokens.
3. Use `&[data-variant="<new-variant>"]` for new variants.
4. Line 1 MUST remain `@use`. NO hardcoded values. NO `!important`. Max 3 levels.

#### 2d: Update Examples and Showcase (if applicable)

If the change introduces a new visual variant or feature:

1. Create or update `examples/<feature>.example.lite.tsx`.
2. Update `examples/_{component_slug}.arg.types.ts` with new control options.
3. Update `showcase/{component_slug}.showcase.lite.tsx` to include the new example.
4. Update `agent/{component_slug}.agent.lite.tsx` with new usage example.

### Step 3: QUALITY CHECK

1. Run `pnpm run build`. MUST SUCCEED.
2. Run `pnpm run test`. ALL MUST PASS.
3. Verify no hardcoded values in SCSS.
4. Verify all new variants have screenshot tests.

### Step 4: Governance and Framework Outputs

1. **Build framework outputs:**

    ```bash
    pnpm run build-outputs
    ```

    This MUST succeed.

2. **Create changeset:**
    ```bash
    pnpm changeset
    ```
    Select `@db-ux/core-components` and all framework output packages.
    Bump type:
    - `patch` for bug fixes.
    - `minor` for new features (new variant, new prop).
    - `major` if a prop was renamed, removed, or had its type changed.

## Output Checklist

- [ ] Component confirmed to exist via `list_components`
- [ ] Existing files analyzed
- [ ] Tests updated FIRST (RED phase)
- [ ] RED phase verified: test command ran, non-zero exit captured
- [ ] `model.ts` updated
- [ ] `.lite.tsx` updated (no inline styles, propOverrides preserved)
- [ ] `.scss` updated (tokens only)
- [ ] Examples/showcase updated (if new visual feature)
- [ ] `pnpm run build` passes
- [ ] `pnpm run test` passes
- [ ] `pnpm run build-outputs` passes
- [ ] Changeset created via `pnpm changeset`

## Red Flags

| Thought                            | Response                                    |
| ---------------------------------- | ------------------------------------------- |
| "Edit React output directly"       | STOP. `.lite.tsx` ONLY.                     |
| "Hardcoded color for this variant" | STOP. Use `var(--db-*)`.                    |
| "Tests can wait"                   | STOP. Update tests FIRST. TDD is mandatory. |
| "I know the token name"            | STOP. ALWAYS query MCP.                     |
| "Removing this prop is fine"       | STOP. Breaking change. Confirm with user.   |
| "Skip showcase update"             | STOP. New visual feature = showcase update. |
| "Skip changeset"                   | STOP. Governance requires it.               |
| "build-outputs is optional"        | STOP. It is mandatory.                      |
