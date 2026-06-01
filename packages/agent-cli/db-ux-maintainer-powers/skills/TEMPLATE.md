---
name: "<skill-name>"
description: "<one-line description of what this skill produces>"

triggers:
    - "<user intent pattern 1>"
    - "<user intent pattern 2>"

inputs:
    - name: component_slug
      type: string
      required: true
      description: "Component directory name in kebab-case (e.g. 'navigation-item')"
    - name: component_name
      type: string
      required: true
      description: "Component symbol name in PascalCase (e.g. 'NavigationItem')"

requires:
    - context: context/architecture.md
      autoLoad: true

tools:
    - db-ux/list_components
    - db-ux/get_component_props

outputs:
    - "packages/components/src/components/{component_slug}/"

on_error:
    max_retries: 3
    actions:
        - log: "Review the shell output (lint/test/build) and fix reported errors before retrying."
        - fallback: "If errors persist after 3 retries, report to user with full error output."
---

# Skill Name

## Pre-Conditions

<!-- List what MUST be true before executing this skill -->

1. `context/architecture.md` is loaded in context.
2. MCP server (`@db-ux/mcp-server`) is connected.
3. <!-- Add skill-specific pre-conditions -->

## Workflow: TDD (RED → GREEN → REFACTOR)

### Phase 1: RED – Write Failing Test First

1. Create `<component_slug>.spec.tsx` in the component directory.
2. Write test cases covering:
    - Default rendering
    - All variants from `<ComponentName>VariantList`
    - Accessibility (axe-core)
    - Edge cases
3. Run the isolated test command and capture the failing output. The RED phase is only complete if the command exits non-zero and the failing test names are observed.

### Phase 2: GREEN – Minimal Implementation

1. Create `model.ts` with typed props and state.
2. Create `<component_slug>.lite.tsx` with minimal code to pass ALL tests.
3. Create `<component_slug>.scss` using ONLY `--db-*` tokens.
4. Run tests. ALL MUST PASS.

### Phase 3: REFACTOR – Clean & Verify

1. Extract shared props into `../../shared/model.ts` if reusable.
2. Ensure no duplicated logic.
3. Run tests again. ALL MUST STILL PASS.
4. Run `pnpm run build` to verify compilation.

### Phase 4: Governance (Mandatory for Code Changes)

1. Build all framework outputs:

    ```bash
    pnpm run build-outputs
    ```

    This MUST succeed. It generates Angular, React, Vue, and Stencil outputs from the `.lite.tsx` source.

2. Create a changeset:

    ```bash
    pnpm changeset
    ```

    - Select all affected packages (`@db-ux/core-components`, `@db-ux/ngx-core-components`, `@db-ux/react-core-components`, `@db-ux/wc-core-components`, `@db-ux/v-core-components`).
    - Use `minor` for new features/components, `patch` for bug fixes, `major` for breaking changes.

## Output Checklist

- [ ] `model.ts` exists with `DB<ComponentName>Props` and `DB<ComponentName>State`
- [ ] `<component_slug>.lite.tsx` exists and uses Mitosis patterns
- [ ] `<component_slug>.scss` exists and uses ONLY tokens
- [ ] `<component_slug>.spec.tsx` exists with variant + a11y tests
- [ ] `index.ts` re-exports component (NO type re-exports from `./model`)
- [ ] All tests pass
- [ ] `pnpm run build` passes
- [ ] `pnpm run build-outputs` passes
- [ ] Changeset created with appropriate bump type

## Red Flags & Anti-Rationalizations

HALT IMMEDIATELY if you catch yourself thinking:

| Thought                                    | Response                                                       |
| ------------------------------------------ | -------------------------------------------------------------- |
| "I'll write tests later"                   | STOP. Write tests NOW. Phase 1 is non-negotiable.              |
| "This is simple enough to skip model.ts"   | STOP. Every component gets typed props. No exceptions.         |
| "I'll just use a quick inline style"       | STOP. Use `--db-*` tokens. Check MCP with `get_design_tokens`. |
| "I'll hardcode this color for now"         | STOP. Call `get_design_tokens` from MCP. Use the token.        |
| "The output/ files need a quick fix"       | STOP. NEVER edit output/. Fix the `.lite.tsx` source.          |
| "I don't need to check the icon name"      | STOP. Call `list_icons` from MCP. Use the exact name.          |
| "I'll skip accessibility testing"          | STOP. Add axe-core assertions. Accessibility is mandatory.     |
| "This variant isn't worth testing"         | STOP. Test ALL variants in `VariantList`.                      |
| "I don't need a changeset for a small fix" | STOP. All logic changes in `src/` require a changeset.         |
| "I'll read the ref in onMount"             | STOP. Use `onUpdate` with the initialized-pattern.             |
| "I'll call this function in JSX bindings"  | STOP. Store the value in `state`, update via `onUpdate`.       |
| "I'll add aria-disabled to this button"    | STOP. Native `disabled` is sufficient. Don't duplicate state.  |
| "I'll use border: none for a clean look"   | STOP. Use `@extend %transparent-border` for HCM support.       |
| "I'll add cursor: pointer manually"        | STOP. Use `@include helpers.hover { ... }` mixin.              |
| "I'll exclude this file from storybook"    | STOP. Fix the example to be Mitosis-compatible instead.        |
