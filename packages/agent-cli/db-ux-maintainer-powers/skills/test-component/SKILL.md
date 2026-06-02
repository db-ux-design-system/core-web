---
name: test-component
description: "Runs, analyzes, and fixes Playwright and accessibility tests for a specific DB UX component."

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
      description: "Component directory name in kebab-case (e.g. 'button', 'navigation-item')"
    - name: component_name
      type: string
      required: true
      description: "Component symbol name in PascalCase (e.g. 'Button', 'NavigationItem')"
    - name: update_snapshots
      type: boolean
      required: false
      description: "Whether to update failing screenshots instead of fixing code (default: false)"

requires:
    - context: context/architecture.md
      autoLoad: true

tools:
    - db-ux/list_components
    - db-ux/get_component_props

outputs:
    - "packages/components/src/components/{component_slug}/{component_slug}.spec.tsx"

on_error:
    max_retries: 3
    actions:
        - log: "Analyze test failure output. Determine if it's a snapshot mismatch, code bug, or a11y violation."
        - fallback: "If errors persist after 3 retries, report full Playwright output to user."
---

# Skill: Test Component

## Variable Convention

Throughout this skill:

- `{component_slug}` = kebab-case directory/file name (e.g. `navigation-item`)
- `{component_name}` = PascalCase symbol name (e.g. `NavigationItem`)
- `DB{component_name}` = full component class name used in grep (e.g. `DBNavigationItem`)

**Name Derivation:** Convert `component_slug` to PascalCase to get `component_name`:

- `button` -> `Button` -> grep target: `DBButton`
- `navigation-item` -> `NavigationItem` -> grep target: `DBNavigationItem`
- `custom-select` -> `CustomSelect` -> grep target: `DBCustomSelect`

If `component_name` is not explicitly provided, derive it deterministically from `component_slug` by capitalizing each segment after splitting on `-`.

## Pre-Conditions

1. `context/architecture.md` IS in context.
2. `component_slug` IS provided and component EXISTS (verify via `list_components`). If missing: do NOT infer or guess. Ask the user.
3. `pnpm install --ignore-scripts` has been run.
4. Build is current: run `pnpm run build` before testing.

## Execution

### Step 0: Validate Environment

1. Call `list_components` to confirm the component exists.
2. Read `packages/components/src/components/{component_slug}/{component_slug}.spec.tsx` to understand existing tests.
3. Run `pnpm run build` to ensure the component is compiled with latest changes.

### Step 1: Run Tests

Execute the component's tests from `output/react` (specs are generated there after `pnpm run build-outputs`):

```bash
cd output/react && npx playwright test --config playwright.config.ts -g "DB{component_name}"
```

Alternatively, run all component tests:

```bash
cd output/react && pnpm run test:components
```

**Example:** For `component_slug = navigation-item`, convert to `component_name = NavigationItem`, then grep for `DBNavigationItem`.

Capture the FULL output (pass/fail, error messages, diff output).

### Step 2: Analyze Failures

For EACH failing test, classify the failure:

| Failure Type               | Indicator                     | Action        |
| -------------------------- | ----------------------------- | ------------- |
| **Screenshot mismatch**    | `toHaveScreenshot()` diff     | Go to Step 3a |
| **Aria snapshot mismatch** | `toMatchSnapshot()` diff      | Go to Step 3b |
| **A11y violation**         | Axe-core `violations` array   | Go to Step 3c |
| **Component error**        | Runtime error, missing export | Go to Step 3d |
| **Test code error**        | TypeScript error in spec      | Go to Step 3e |

### Step 3: Fix Failures

#### 3a: Screenshot Mismatch

**If `update_snapshots` is true:**

Only update when the rendered delta is intentional and explicitly explained. Before running the update command, state WHY the visual change is expected (e.g. "variant X was added in the previous modification step"). If you cannot explain the delta, treat it as unintentional and go to the "false" path below.

**Note:** Do NOT run `regenerate:screenshots` locally. Snapshots are generated automatically in CI/CD.

**If `update_snapshots` is false (default):**

1. The visual change is unintentional. Investigate what changed.
2. Read the `.lite.tsx` and `.scss` to identify recent modifications.
3. Fix the component code to restore expected visual output.
4. Re-run tests to confirm fix.

#### 3b: Aria Snapshot Mismatch

1. Read the updated component markup in `.lite.tsx`.
2. Determine if the aria structure change is intentional.
3. **If intentional** (and you can explicitly explain why): update snapshots.
4. **If unintentional**: fix the component to restore correct aria structure.

#### 3c: A11y Violation (Axe-Core)

1. Read the violation details: `id`, `impact`, `nodes`, `help`.
2. Identify the DOM element causing the violation.
3. Fix in `.lite.tsx`:
    - Missing `aria-label`: add label prop handling.
    - Missing role: add `role` attribute.
    - Color contrast: update SCSS with accessible token.
4. NEVER suppress axe-core rules. Fix the underlying issue.
5. Re-run tests.

#### 3d: Component Runtime Error

1. Read the error stack trace.
2. Fix the source file (`.lite.tsx`, `model.ts`, or `index.ts`).
3. Run `pnpm run build` to recompile.
4. Re-run tests.

#### 3e: Test Code Error

1. Read the TypeScript error in the spec file.
2. Common causes: importing from `.lite`, missing `// @ts-ignore`, prop API changed.
3. Fix the `.spec.tsx` file.
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
