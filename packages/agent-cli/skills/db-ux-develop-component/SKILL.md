---
name: db-ux-develop-component
description: Develops a new component for the DB UX Design System core-web monorepo using Mitosis. Use when the user asks to add, create, or contribute a new component to the design system itself (not to a consuming application). Covers the full workflow: generation, SCSS, model.ts, Mitosis lite.tsx, and tests.
disable-model-invocation: false
---

# Develop Component

## Skill Boundaries

- Use this skill when the deliverable is a new component **inside** `packages/components/src/components/`.
- If the user wants to build UI in a consuming application, switch to [db-ux-implement-component](../db-ux-implement-component/SKILL.md).
- If the user wants to add an ESLint rule for a component, switch to [db-ux-add-eslint-rule](../db-ux-add-eslint-rule/SKILL.md).

## Repository Structure

```text
packages/components/src/components/{component-name}/
├── agent/
│   └── {component-name}.agent.lite.tsx   ← agent documentation examples
├── docs/                                  ← component documentation
├── examples/                              ← showcase examples
├── figma/                                 ← Figma Code Connect files
├── showcase/                              ← showcase data
├── {component-name}.lite.tsx             ← Mitosis source (main work)
├── {component-name}.scss                 ← component styles
├── {component-name}.spec.tsx             ← component tests
├── index.html                            ← plain HTML dev entry
├── index.ts                              ← exports
└── model.ts                              ← props and state types
```

## Required Workflow

### Step 1: Generate the Scaffold

Run the component generator from the monorepo root:

```bash
npm run generate:component
```

Enter the component name (e.g. `my-awesome-component`) and answer all prompts. This creates the directory structure above and registers the component in the showcases.

### Step 2: Define the API in `model.ts`

Define all props and state types. Reuse shared props from `packages/components/src/shared/model.ts`:

```typescript
import { WidthProps } from "../../shared/model";

export type DBMyComponentProps = DBMyComponentDefaultProps & WidthProps;

export type DBMyComponentDefaultProps = {
	label: string; // required: always provide a label for accessibility
	variant?: "filled" | "outlined" | "ghost";
	disabled?: boolean;
};

export type DBMyComponentDefaultState = {
	handleClick: (event: MouseEvent) => void;
};
```

**Key principles:**

- Always include a `label` or equivalent for accessibility
- Use union types for variant/size/state props — align with existing components
- Functions must be in `DefaultState`, not `DefaultProps` (Mitosis requirement)

### Step 3: Style with SCSS

In `{component-name}.scss`:

```scss
@use "@db-ux/core-foundations/build/styles/variables"; // spacing, sizing tokens
@use "@db-ux/core-foundations/build/styles/colors"; // color tokens (if needed)

.db-my-component {
	padding: $db-spacing-fixed-md;
	gap: $db-spacing-fixed-sm;
}
```

**Key SCSS dependencies:**

| Import               | Use for                                                                 |
| -------------------- | ----------------------------------------------------------------------- |
| `variables`          | `$db-spacing-*`, `$db-sizing-*` tokens                                  |
| `colors`             | Color tokens for variants (see `notification.scss` for `@each` pattern) |
| `density/font`       | `@extend %db-overwrite-font-size-sm` for forced font sizes              |
| `icons/icon-helpers` | `@include icons.icon("arrow_forward", "after")` for fixed icons         |
| `internal/component` | Adaptive styling (see `button.scss` for reference)                      |

**Never hardcode hex colors or pixel values** — always use SCSS variables from `@db-ux/core-foundations`.

### Step 4: Build the Mitosis Component

In `{component-name}.lite.tsx`:

```tsx
import { useStore } from "@builder.io/mitosis";
import type { DBMyComponentProps, DBMyComponentDefaultState } from "./model";

export default function DBMyComponent(props: DBMyComponentProps) {
	const state = useStore<DBMyComponentDefaultState>({
		handleClick(event: MouseEvent) {
			props.onClick?.(event);
		}
	});

	return (
		<div class="db-my-component" data-variant={props.variant}>
			{props.children}
		</div>
	);
}
```

**Key Mitosis rules:**

1. **Functions must be in `useStore`** — not inline in JSX or as standalone functions
2. **Use `data-*` attributes** for variant/state — CSS selects on `[data-variant="filled"]`
3. **Reserved `data-*` attributes:**
    - `data-icon="xxx"` / `data-icon-trailing="xxx"` → sets `::before` / `::after` icon via CSS
    - `data-width="auto"` / `data-width="full-width"` → standard width prop
4. **Prefer native HTML** — use `<details><summary>` for accordion, `<dialog>` for modal, etc. to reduce custom JS
5. **Support multiple data-binding patterns** — accept both `children` (HTML composition) and a typed `options` prop (for Angular/Vue compatibility)
6. **Angular wrapper quirk** — Angular wraps components in custom tags. CSS selectors like `.db-button` won't reach inside `<db-button>`. Write: `.db-button, .db-button > button { ... }`

### Step 5: Write the Agent Documentation File

In `agent/{component-name}.agent.lite.tsx`, document all key usage patterns:

```tsx
import { DBMyComponent } from "../index";

export default function MyComponentDocs() {
	return (
		<>
			<h1>DBMyComponent Documentation Examples</h1>

			<h2>1. Default</h2>
			<DBMyComponent label="Default">Content</DBMyComponent>

			<h2>2. Variants</h2>
			<DBMyComponent variant="filled" label="Filled">
				Filled
			</DBMyComponent>
			<DBMyComponent variant="outlined" label="Outlined">
				Outlined
			</DBMyComponent>

			<h2>3. Disabled</h2>
			<DBMyComponent disabled label="Disabled">
				Disabled
			</DBMyComponent>
		</>
	);
}
```

### Step 6: Write Tests

In `{component-name}.spec.tsx`, add screenshot and accessibility tests:

```tsx
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DBMyComponent from "./index";

describe("DBMyComponent", () => {
	it("renders default", () => {
		const { container } = render(
			<DBMyComponent label="Test">Content</DBMyComponent>
		);
		expect(container).toMatchSnapshot();
	});

	it("has no accessibility violations", async () => {
		const { container } = render(
			<DBMyComponent label="Test">Content</DBMyComponent>
		);
		expect(await axe(container)).toHaveNoViolations();
	});
});
```

### Step 7: Test in Showcases

After the component is working in plain HTML (`index.html`), test in all three framework showcases:

- **Angular**: `showcases/angular-showcase/src/app/components/{component-name}/`
- **React**: `showcases/react-showcase/src/components/{component-name}/`
- **Vue**: `showcases/vue-showcase/src/components/{component-name}/`

Add the component to the navigation in each showcase's `navigation-item.ts` / `navigation-items.ts`.

## Checklist

- [ ] `npm run generate:component` run — scaffold created
- [ ] `model.ts` defines all props with proper types and shared props imported
- [ ] SCSS uses only `@db-ux/core-foundations` variables — no hardcoded values
- [ ] Mitosis component functions are in `useStore`, not inline
- [ ] `data-*` attributes used for variant/state (not CSS class names)
- [ ] Native HTML elements used where possible (reduces custom JS)
- [ ] Agent documentation file covers all key usage patterns
- [ ] Tests include snapshot and accessibility (`axe`) checks
- [ ] Component tested in Angular, React, and Vue showcases
- [ ] Component added to showcase navigation in all three frameworks

## Common Issues

**Angular CSS not applying** → Angular wraps components in custom tags. Add `, .db-component > [element]` to CSS selectors.

**Multiple slots with same name in Angular** → Angular only renders the last slot. Use a `Directive` workaround (see `header` component for reference, automated via `packages/components/scripts/post-build/components.js`).

**Function not available in JSX** → Functions must be in `useStore` state, not defined outside or inline. Move to `DBMyComponentDefaultState` in `model.ts`.

**`v-model` / `[(ng-model)]` not working** → Extra code is needed for two-way binding in Vue and Angular. See the `input` component for the required pattern.
