---
name: test-component
description: "Runs, analyzes, and fixes cross-framework interaction, visual-snapshot, aria-snapshot, and accessibility tests for a specific DB UX component's showcase pages."

triggers:
    - "test <component> component"
    - "run <component> playwright tests"
    - "fix failing <component> playwright tests"
    - "update <component> snapshots"
    - "fix <component> test failures"

inputs:
    - name: component_slug
      type: string
      required: true
      description: "Component directory name in kebab-case (e.g. 'button', 'control-panel-navigation-item')"
    - name: component_name
      type: string
      required: false
      description: "Optional PascalCase symbol name (e.g. 'Button'). If omitted, derive it from component_slug."
    - name: update_snapshots
      type: boolean
      required: false
      description: "Whether to update failing screenshots instead of fixing code (default: false)"
    - name: figma_file_key
      type: string
      required: false
      description: "Figma file key. Useful when validating visual diffs against the Figma spec."
    - name: figma_node_id
      type: string
      required: false
      description: "Figma node ID of the target component/frame. Used together with figma_file_key for visual validation."

requires:
    - context: context/architecture.md
      autoLoad: true

tools:
    - db-ux/list_components
    - db-ux/get_component_props
    - figma/get_figma_data
    - figma/download_figma_images

outputs:
    - "showcases/e2e/{component_slug}/{component_slug}-interaction.spec.ts"

on_error:
    max_retries: 3
    actions:
        - log: "Analyze test failure output. Determine if it's a snapshot mismatch, code bug, or a11y violation."
        - fallback: "If errors persist after 3 retries, report full Playwright output to user."
---

# Skill: Test Component

## Variable Convention

Throughout this skill:

- `{component_slug}` = kebab-case directory/file name (e.g. `control-panel-navigation-item`)
- `{component_name}` = PascalCase symbol name (e.g. `ControlPanelNavigationItem`)
- `DB{component_name}` = full component class name used in grep (e.g. `DBControlPanelNavigationItem`)

**Name Derivation:** Convert `component_slug` to PascalCase to get `component_name`:

- `button` -> `Button` -> grep target: `DBButton`
- `control-panel-navigation-item` -> `ControlPanelNavigationItem` -> grep target: `DBControlPanelNavigationItem`
- `custom-select` -> `CustomSelect` -> grep target: `DBCustomSelect`

If `component_name` is not explicitly provided, derive it deterministically from `component_slug` by capitalizing each segment after splitting on `-`.

## Pre-Conditions

1. `context/architecture.md` IS in context.
2. `component_slug` IS provided and component EXISTS (verify via `list_components`). If missing: do NOT infer or guess. Ask the user.
3. `pnpm install --ignore-scripts` has been run.
4. Build is current: run `pnpm run build && pnpm run build-outputs` before testing.

## Execution

### Step 0: Validate Environment

1. Call `list_components` to confirm the component exists.
2. Read `showcases/e2e/{component_slug}/{component_slug}-interaction.spec.ts` if it exists, plus the sibling `*-visual-snapshot.spec.ts` / `*-aria-snapshot.spec.ts` for the component's route, to understand existing coverage.
3. Run `pnpm run build && pnpm run build-outputs` to ensure the component and all generated framework showcases are up to date.

### Step 1: Run Tests

Behavior tests run against the built showcase apps, one suite per test kind. Run from the relevant `showcases/<framework>-showcase` directory (start with `react-showcase`; only cross-check other frameworks if the failure looks framework-specific):

```bash
cd showcases/react-showcase && pnpm exec playwright test --config=../playwright.config.ts -g "DB{component_name}"
```

That single `test:e2e`-style run covers interaction, aria-snapshot, visual-snapshot and axe-core specs matching the grep. To isolate one kind:

```bash
cd showcases/react-showcase && pnpm run test:aria-snapshots -- -g "DB{component_name}"
cd showcases/react-showcase && pnpm run test:visual-snapshots -- -g "DB{component_name}"
cd showcases/react-showcase && pnpm run test:axe-core -- -g "DB{component_name}"
```

**Example:** For `component_slug = control-panel-navigation-item`, convert to `component_name = ControlPanelNavigationItem`, then grep for `DBControlPanelNavigationItem`.

Capture the FULL output (pass/fail, error messages, diff output).

### Step 2: Analyze Failures

For EACH failing test, classify the failure:

| Failure Type                      | Indicator                                                                       | Action        |
| --------------------------------- | ------------------------------------------------------------------------------- | ------------- |
| **Interaction assertion failure** | Failing `expect(...)` in `*-interaction.spec.ts` (DOM state, testid, attribute) | Go to Step 3a |
| **Screenshot mismatch**           | `toHaveScreenshot()` diff                                                       | Go to Step 3b |
| **Aria snapshot mismatch**        | `toMatchSnapshot()` diff                                                        | Go to Step 3c |
| **A11y violation**                | Axe-core `violations` array                                                     | Go to Step 3d |
| **Component error**               | Runtime error, missing export                                                   | Go to Step 3e |
| **Test code error**               | TypeScript error in spec                                                        | Go to Step 3f |

### Step 3: Fix Failures

#### 3a: Interaction Assertion Failure

1. Read `showcases/e2e/{component_slug}/{component_slug}-interaction.spec.ts` and the fixture it drives (`packages/components/src/components/{component_slug}/examples/interaction.example.lite.tsx`).
2. Determine if the behavior change is intentional (part of the current modification) or a regression.
3. **If intentional**: update the assertion to reflect the new expected DOM state.
4. **If unintentional**: fix `.lite.tsx` to restore the expected behavior.
5. If the failure is framework-specific (only fails on `vue-showcase`/`angular-showcase`/`stencil-showcase`), branch the assertion with `isVue`/`isAngular`/`isStencil` from `../default.ts` rather than changing the shared assertion — see `// VUE:`-style precedent in already-migrated specs.
6. Re-run tests to confirm fix.

#### 3b: Screenshot Mismatch

**If `update_snapshots` is true:**

Only update when the rendered delta is intentional and explicitly explained. Before running the update command, state WHY the visual change is expected (e.g. "variant X was added in the previous modification step"). If you cannot explain the delta, treat it as unintentional and go to the "false" path below.

**Note:** Do NOT run `regenerate:visual-snapshots` locally. Snapshots are generated automatically in CI/CD.

**If `update_snapshots` is false (default):**

1. The visual change is unintentional. Investigate what changed.
2. Read the `.lite.tsx` and `.scss` to identify recent modifications.
3. Fix the component code to restore expected visual output.
4. Re-run tests to confirm fix.

#### 3c: Aria Snapshot Mismatch

1. Read the updated component markup in `.lite.tsx`.
2. Determine if the aria structure change is intentional.
3. **If intentional** (and you can explicitly explain why): update snapshots via `regenerate:aria-snapshots` — but note this is normally left to CI, same as visual snapshots.
4. **If unintentional**: fix the component to restore correct aria structure.

#### 3d: A11y Violation (Axe-Core)

1. Read the violation details: `id`, `impact`, `nodes`, `help`.
2. Identify the DOM element causing the violation.
3. Fix in `.lite.tsx`, e.g.:
    - Missing `aria-label`: add label prop handling.
    - Missing role: add `role` attribute.
    - Color contrast: update SCSS with accessible token.
4. NEVER suppress axe-core rules. Fix the underlying issue.
5. Re-run tests.

#### 3e: Component Runtime Error

1. Read the error stack trace.
2. Fix the source file (`.lite.tsx`, `model.ts`, or `index.ts`).
3. Run `pnpm run build && pnpm run build-outputs` to recompile.
4. Re-run tests.

#### 3f: Test Code Error

1. Read the TypeScript error in the spec or fixture file.
2. Common causes: importing from `.lite` without the suffix stripped correctly, wrong `data-testid`, prop API changed.
3. Fix the `*-interaction.spec.ts` file or the `interaction.example.lite.tsx` fixture.
4. Re-run tests.

### Step 4: Verification Loop

1. Re-run the test command from Step 1.
2. If ALL tests pass: proceed to Step 5.
3. If tests still fail: return to Step 2 (max 3 iterations).
4. After 3 failed iterations: report to user with full output.

### Step 5: Final Validation

2. Run full test suite: `pnpm run test` (confirm no regressions).
3. Report results to user:
    - Number of tests: passed / failed / skipped.
    - Any snapshots updated (with explicit justification for each).
    - Any a11y fixes applied.

## Output Checklist

- [ ] Component confirmed to exist
- [ ] Tests executed in isolation
- [ ] All failures classified
- [ ] Fixes applied per failure type
- [ ] Tests pass after fix
- [ ] No regressions in full test suite
- [ ] All snapshot updates justified with explicit explanation

## Red Flags

| Thought                                  | Response                                                  |
| ---------------------------------------- | --------------------------------------------------------- |
| "Delete the failing test"                | STOP. Fix code or update snapshot. NEVER delete tests.    |
| "Disable this axe-core rule"             | STOP. Fix the a11y issue. NEVER suppress.                 |
| "Screenshot diff is tiny, force-update"  | STOP. Explain WHY it changed. Only update if intentional. |
| "Skip full test suite"                   | STOP. Run `pnpm run test` for regressions.                |
| "Edit output/ to fix test"               | STOP. `.lite.tsx` ONLY. Rebuild. Re-test.                 |
| "I don't know the component, I'll guess" | STOP. Ask user for `component_slug`. Do NOT infer.        |
