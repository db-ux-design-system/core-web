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
    - "showcases/e2e/{component_slug}/{component_slug}-interaction.spec.ts"

on_error:
    max_retries: 3
    actions:
        - log: "Review the shell output (lint/test/build) and fix reported errors before retrying."
        - fallback: "If errors persist after 3 retries, report to user with full error output."
---

<!-- AI-IGNORE: This is a template file for creating new skills. It is NOT an active skill and must not be used as context or executed. -->

# Skill Name

## Pre-Conditions

<!-- List what MUST be true before executing this skill -->

1. `context/architecture.md` is loaded in context.
2. MCP server (`@db-ux/mcp-server`) is connected.
3. <!-- Add skill-specific pre-conditions -->

## Workflow: TDD (RED → GREEN → REFACTOR)

### Phase 1: RED – Write Failing Test First

Behavior is tested cross-framework against the running showcase, not by mounting an isolated component. Visual regression, aria-snapshot, and axe-core coverage come for free once the showcase page exists — write an interaction spec only for components with actual gestures.

1. If the component has clicks, keyboard input, focus, open/close, or value-change behavior: create `<component_slug>/examples/interaction.example.lite.tsx` (reflecting the behavior into observable DOM) and `showcases/e2e/<component_slug>/<component_slug>-interaction.spec.ts` using `runInteractionTest` from `showcases/e2e/default.ts`.
2. Write test cases covering the component's interactive behavior and edge cases. Accessibility and variant screenshots are covered separately by the existing per-showcase axe-core/visual-snapshot/aria-snapshot suites once the showcase example exists — do not duplicate them here.
3. Run the isolated test command (`cd showcases/react-showcase && pnpm exec playwright test -g "DB<ComponentName>"`) and capture the failing output. The RED phase is only complete if the command exits non-zero and the failing test names are observed.

### Phase 2: GREEN – Minimal Implementation

1. Create `model.ts` with typed props and state.
2. Create `<component_slug>.lite.tsx` with minimal code to pass ALL tests.
3. Create `<component_slug>.scss` using SCSS variables (`variables.$db-*`). Use CSS custom properties (`var(--db-*)`) only as fallback.
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

    - Shared component code (`*.scss`, `model.ts`, `*.lite.tsx`): select all five packages (`@db-ux/core-components`, `@db-ux/ngx-core-components`, `@db-ux/react-core-components`, `@db-ux/wc-core-components`, `@db-ux/v-core-components`) — SCSS, properties or template alike.
    - Code only one target consumes (`src/utils/react.ts`, `configs/plugins/<framework>/`, `scripts/post-build/<framework>.ts`): select only that framework package.
    - Shared build code (`scripts/post-build/index.ts`, `components.ts`, `configs/mitosis.config.cjs`): select every framework package whose output changes.
    - Use `minor` for new features/components, `patch` for bug fixes, `major` for breaking changes.

## Output Checklist

- [ ] `model.ts` exists with `DB<ComponentName>Props` and `DB<ComponentName>State`
- [ ] `<component_slug>.lite.tsx` exists and uses Mitosis patterns
- [ ] `<component_slug>.scss` exists and uses SCSS variables (`variables.$db-*`) for tokens
- [ ] `showcases/e2e/<component_slug>/<component_slug>-interaction.spec.ts` exists (if the component is interactive)
- [ ] `index.ts` re-exports component (NO type re-exports from `./model`)
- [ ] All tests pass
- [ ] `pnpm run build` passes
- [ ] `pnpm run build-outputs` passes
- [ ] Changeset created with appropriate bump type

## Red Flags & Anti-Rationalizations

HALT IMMEDIATELY if you catch yourself thinking:

| Thought                                    | Response                                                                                                                                           |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| "I'll write tests later"                   | STOP. Write tests NOW. Phase 1 is non-negotiable.                                                                                                  |
| "This is simple enough to skip model.ts"   | STOP. Every component gets typed props. No exceptions.                                                                                             |
| "I'll just use a quick inline style"       | STOP. Use SCSS variables (`variables.$db-*`). Check MCP with `get_design_tokens`.                                                                  |
| "I'll hardcode this color for now"         | STOP. Call `get_design_tokens` from MCP. Use the SCSS variable.                                                                                    |
| "The output/ files need a quick fix"       | STOP. NEVER edit output/. Fix the `.lite.tsx` source.                                                                                              |
| "I don't need to check the icon name"      | STOP. Call `list_icons` from MCP. Use the exact name.                                                                                              |
| "I'll skip accessibility testing"          | STOP. Accessibility is covered by the per-showcase axe-core suite once the showcase example exists — verify it renders, don't suppress or skip it. |
| "This interaction isn't worth testing"     | STOP. Every user-facing gesture (click, keyboard, focus, open/close, value change) needs an assertion in the interaction spec.                     |
| "I don't need a changeset for a small fix" | STOP. All logic changes in `src/` require a changeset.                                                                                             |
| "I'll read the ref in onMount"             | STOP. Use `onUpdate` with the initialized-pattern.                                                                                                 |
| "I'll call this function in JSX bindings"  | STOP. Store the value in `state`, update via `onUpdate`.                                                                                           |
| "I'll add aria-disabled to this button"    | STOP. Native `disabled` is sufficient. Don't duplicate state.                                                                                      |
| "I'll use border: none for a clean look"   | STOP. Use `@extend %transparent-border` for HCM support.                                                                                           |
| "I'll add cursor: pointer manually"        | STOP. Use `@include helpers.hover { ... }` mixin.                                                                                                  |
| "I'll exclude this file from storybook"    | STOP. Fix the example to be Mitosis-compatible instead.                                                                                            |
