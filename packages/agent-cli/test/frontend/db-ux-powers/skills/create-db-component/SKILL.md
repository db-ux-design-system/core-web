---
name: create-db-component
description: "Creates a new DB UX Design System component with Mitosis source, SCSS, typed model, and Playwright tests."

triggers:
    - "create a new component"
    - "add component"
    - "generate component"
    - "new db component"

inputs:
    - name: component_slug
      type: string
      required: true
      description: "Component directory name in kebab-case (e.g. 'navigation-item', 'tooltip')"
    - name: component_name
      type: string
      required: true
      description: "Component symbol name in PascalCase (e.g. 'NavigationItem', 'Tooltip')"
    - name: figma_url
      type: string
      required: true
      description: "Figma URL to the component specification"

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
    - db-ux/verify_migrated_code
    - figma/figma_get_file
    - figma/figma_get_node
    - figma/figma_get_styles
    - figma/figma_get_variables

outputs:
    - "packages/components/src/components/{component_slug}/"

on_error:
    max_retries: 3
    actions:
        - run: db-ux/verify_migrated_code
        - log: "Fix errors reported by verify_migrated_code before retrying."
        - fallback: "If errors persist after 3 retries, report to user with full error output."
---

# Skill: Create DB Component

## Variable Convention

Throughout this skill:

- `{component_slug}` = kebab-case directory/file name (e.g. `navigation-item`)
- `{component_name}` = PascalCase symbol name (e.g. `NavigationItem`)
- `DB{component_name}` = full component class name (e.g. `DBNavigationItem`)
- `.db-{component_slug}` = CSS class (e.g. `.db-navigation-item`)

## Pre-Conditions

1. `context/architecture.md` IS in context.
2. MCP (`@db-ux/mcp-server`) IS connected.
3. Figma MCP IS connected.
4. `component_slug` and `component_name` ARE provided by user.
5. **Figma URL** IS provided by user. If missing: ABORT immediately. Do NOT proceed without a Figma link.
6. Call `list_components` to verify the component does NOT already exist.

## Execution

### Step 0: Design Spec Extraction and Token Resolution

#### Phase 0.1: Figma Specs (Figma MCP)

1. Extract the file key and node ID from the provided Figma URL.
    - URL format: `https://www.figma.com/file/<fileKey>/...?node-id=<nodeId>`
    - Pass both `fileKey` and `nodeId` as parameters to `figma_get_node`.
2. Call `figma_get_node` with `fileKey` and `nodeId` to retrieve the component frame.
3. Extract from the Figma response:
    - **Spacing**: padding, gap, margin values from Auto Layout properties.
    - **Sizing**: width, height constraints.
    - **Colors**: fill colors, stroke colors, text colors (as Figma variable references or hex values).
    - **Typography**: font family, size, weight, line-height.
    - **Border radius**: corner radius values.
    - **Variants**: all variant properties defined in the Figma component set.
4. Call `figma_get_variables` to resolve any Figma variable references to their actual values.
5. Call `figma_get_styles` if the component references shared Figma styles.
6. Document ALL extracted values. These are the ground truth for implementation.

#### Phase 0.2: DB UX Token Mapping (`@db-ux/mcp-server`)

1. Call `list_components`. ABORT if component already exists.
2. Call `list_design_token_categories` to discover available categories. Then call `get_design_tokens` with the categories identified in Phase 0.1 (spacing, sizing, colors, radius).
3. Map EVERY Figma value to its corresponding `--db-*` token:
    - Figma padding 8px: find matching `--db-spacing-fixed-*` token.
    - Figma color #EC0016 (background): find matching `--db-*-bg-*` token.
    - Figma color #000000 (text): find matching `--db-*-on-bg-*` token.
    - Figma color #ccc (border): find matching `--db-*-border-*` token.
    - Figma height 48px: find matching `--db-sizing-*` token.
    - Figma border-radius 4px: find matching `--db-border-radius-*` token.
4. If a Figma value has NO matching token: FLAG it. Do NOT hardcode. Ask user for guidance.
5. Call `list_icons` if the component uses icons in Figma.
6. Call `get_component_details` on a structurally similar existing component (same interaction family: form-control, container, navigation, feedback). If no similar component exists, state that explicitly and skip.
7. Store ALL mapped token results. Reference them in SCSS implementation.

### Step 1: RED - Write Failing Tests

Create `packages/components/src/components/{component_slug}/{component_slug}.spec.tsx`:

```typescript
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DB{component_name} } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = <DB{component_name}>Content</DB{component_name}>;

const testComponent = () => {
  test('should contain text', async ({ mount }) => {
    const component = await mount(comp);
    await expect(component).toContainText('Content');
  });

  test('should match screenshot', async ({ mount }) => {
    const component = await mount(comp);
    await expect(component).toHaveScreenshot();
  });

  // Inline the variant list from Figma Phase 0.1 directly here.
  // Do NOT import from model.ts (it does not exist yet in RED phase).
  for (const variant of ['variant1', 'variant2' /* replace with Figma variants */]) {
    const variantComp: any = <DB{component_name} variant={variant}>Content</DB{component_name}>;

    test(`should contain text for variant ${variant}`, async ({ mount }) => {
      const component = await mount(variantComp);
      await expect(component).toContainText('Content');
    });

    test(`should match screenshot for variant ${variant}`, async ({ mount }) => {
      const component = await mount(variantComp);
      await expect(component).toHaveScreenshot();
    });
  }
};

const testA11y = () => {
  test('should have same aria-snapshot', async ({ mount }, testInfo) => {
    const component = await mount(comp);
    const snapshot = await component.ariaSnapshot();
    expect(snapshot).toMatchSnapshot(`${testInfo.testId}.yaml`);
  });

  test('should not have any A11y issues', async ({ page, mount }) => {
    await mount(comp);
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('.db-{component_slug}')
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
};

test.describe('DB{component_name}', () => {
  test.use({ viewport: DEFAULT_VIEWPORT });
  testComponent();
  testA11y();
});
```

**After writing the spec, run the isolated component test command:**

```bash
cd packages/components && npx playwright test src/components/{component_slug}/{component_slug}.spec.tsx
```

**The RED phase is only complete if:**

1. The command exits non-zero.
2. The failing test names are captured in the output.
3. The failure is caused by missing or incomplete implementation (e.g. missing module, missing export), NOT by syntax errors in the spec itself.

If the spec has syntax errors, fix them first and re-run until you get clean "missing implementation" failures.

### Step 2: GREEN - Implement

#### 2a: Create `model.ts`

```typescript
import { GlobalProps, GlobalState } from '../../shared/model';

export const {component_name}VariantList = [/* variants from Figma Phase 0.1 */] as const;
export type {component_name}VariantType = (typeof {component_name}VariantList)[number];

export type DB{component_name}DefaultProps = {
  /** JSDoc description */
  variant?: {component_name}VariantType;
};

export type DB{component_name}Props = DB{component_name}DefaultProps & GlobalProps;
export type DB{component_name}DefaultState = {};
export type DB{component_name}State = DB{component_name}DefaultState & GlobalState;
```

Rules:

- EVERY prop gets a JSDoc comment.
- Variant list MUST match Figma Phase 0.1 variants.
- Use composition: `DefaultProps & GlobalProps`.

#### 2b: Create `{component_slug}.lite.tsx`

```tsx
import { useDefaultProps, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { cls } from '../../utils';
import type { DB{component_name}Props, DB{component_name}State } from './model';

useMetadata({});
useDefaultProps<DB{component_name}Props>({});

export default function DB{component_name}(props: DB{component_name}Props) {
  const _ref = useRef<HTMLElement | any>(null);
  const state = useStore<DB{component_name}State>({});

  return (
    <div
      ref={_ref}
      id={props.id ?? props.propOverrides?.id}
      class={cls('db-{component_slug}', props.className)}
      data-variant={props.variant}
    >
      {props.children}
    </div>
  );
}
```

Rules:

- NEVER use inline styles in `.lite.tsx` components.
- ID binding MUST be `id={props.id ?? props.propOverrides?.id}`.

#### 2c: Create `{component_slug}.scss`

```scss
@use "@db-ux/core-foundations/build/styles/variables";

.db-{component_slug} {
  padding: variables.$db-spacing-fixed-sm;
  block-size: variables.$db-sizing-md;

  &[data-variant="..."] {
    // variant-specific styles
  }
}
```

Rules: Line 1 = `@use`. Root = `.db-{component_slug}`. NO hardcoded values. Max 3 levels nesting.

#### 2d: Create `index.ts`

```typescript
export { default as DB{component_name} } from './{component_slug}';
```

Do NOT re-export from `./model`. Do NOT use `.lite` suffix.

#### 2e: Create `index.html`

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>DB{component_name}</title>
		<link rel="stylesheet" href="/styles/relative.css" />
	</head>
	<body style="padding: var(--db-spacing-fixed-md)">
		<div class="db-{component_slug}">Preview Content</div>
	</body>
</html>
```

**Exception**: Inline styles are forbidden everywhere EXCEPT the minimal token-based padding on `<body>` in this `index.html` preview scaffold.

#### 2f: Create Documentation, Examples and Showcase

1. **docs/**: Create `Angular.md`, `HTML.md`, `React.md`, `Vue.md`, `Migration.md`.
2. **examples/**: Create `default.example.lite.tsx`, `variant.example.lite.tsx`, `_{component_slug}.arg.types.ts`.
3. **showcase/{component_slug}.showcase.lite.tsx**:

```tsx
import { PatternhubProps } from '../../../shared/model';
import CardWrapperShowcase from '../../../shared/showcase/card-wrapper.showcase.lite';
import ContainerWrapperShowcase from '../../../shared/showcase/container-wrapper.showcase.lite';
import LinkWrapperShowcase from '../../../shared/showcase/link-wrapper.showcase.lite';
import VariantExample from '../examples/variant.example.lite';

export default function {component_name}Showcase(props: PatternhubProps) {
  return (
    <ContainerWrapperShowcase title="DB{component_name}" isPatternhub={props.isPatternhub}>
      <LinkWrapperShowcase exampleName="Variant">
        <CardWrapperShowcase>
          <VariantExample />
        </CardWrapperShowcase>
      </LinkWrapperShowcase>
    </ContainerWrapperShowcase>
  );
}
```

### Step 3: QUALITY CHECK and REFACTOR

1. Run `pnpm run test`. ALL MUST PASS.
2. Run `pnpm run build`. MUST SUCCEED.
3. Call `verify_migrated_code`. Fix errors. Repeat up to 3 times.
4. Cross-check SCSS against Phase 0.2 mapping.
5. Verify docs/, examples/, showcase/ are complete.
6. Run tests again after refactor.

### Step 4: Agent Examples

Create `agent/{component_slug}.agent.lite.tsx` with usage examples.

### Step 5: Governance and Framework Outputs

1. **Build framework outputs:**

    ```bash
    pnpm run build-outputs
    ```

    This MUST succeed.

2. **Create changeset:**
    ```bash
    pnpm changeset
    ```
    Select `@db-ux/core-components` and all framework output packages (`@db-ux/ngx-core-components`, `@db-ux/react-core-components`, `@db-ux/wc-core-components`, `@db-ux/v-core-components`). Bump: `minor`.

## Output Checklist

- [ ] Figma URL queried via MCP
- [ ] Token mapping complete
- [ ] `model.ts` with typed props
- [ ] `{component_slug}.lite.tsx` with Mitosis patterns
- [ ] `{component_slug}.scss` with tokens only
- [ ] `{component_slug}.spec.tsx` with screenshots + a11y
- [ ] `index.ts` (no `.lite`, no model re-export)
- [ ] `index.html` preview
- [ ] `docs/`, `examples/`, `showcase/`, `agent/` complete
- [ ] `pnpm run build` passes
- [ ] `pnpm run test` passes
- [ ] `pnpm run build-outputs` passes
- [ ] Changeset created

## Red Flags

| Thought                      | Response                                |
| ---------------------------- | --------------------------------------- |
| "Figma link is missing"      | STOP. ABORT. Demand URL.                |
| "I'll write tests later"     | STOP. Step 1 is FIRST.                  |
| "I don't need model.ts"      | STOP. Every component gets typed props. |
| "A quick hardcoded color"    | STOP. Use `var(--db-*)`.                |
| "I'll skip MCP query"        | STOP. Step 0 is mandatory.              |
| "Icon is probably 'close'"   | STOP. Call `list_icons`.                |
| "Edit React output directly" | STOP. `.lite.tsx` ONLY.                 |
| "I'll use px"                | STOP. Use tokens.                       |
| "Export from .lite"          | STOP. No `.lite` suffix.                |
| "Skip changeset"             | STOP. Governance requires it.           |
| "build-outputs is optional"  | STOP. It is mandatory.                  |
