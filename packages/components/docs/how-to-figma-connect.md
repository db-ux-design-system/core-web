# How to Connect Figma Components

This guide explains how to connect Figma components to code components using [Figma Code Connect](https://www.figma.com/developers/api#code-connect) and [Mitosis](https://github.com/BuilderIO/mitosis).

## Prerequisites

- Access to the Figma design file
- A `FIGMA_FILE` value in your `.env` (see [Step 3](#3-add-figma_file-to-env))
- A `FIGMA_ACCESS_TOKEN` for publishing (see [Publishing](#publishing))

## Structure

Each component with Figma integration has a `figma/` folder:

```text
src/components/button/figma/
├── button.figma.ts                  # Configuration mapping Figma properties to code props
├── text.button.figma.lite.tsx       # Mitosis component for the "with text" variant
└── no-text.button.figma.lite.tsx    # Mitosis component for the "no text" variant
```

If all variants share the same JSX structure, a single lite file is enough:

```text
src/components/checkbox/figma/
├── checkbox.figma.ts
└── checkbox.figma.lite.tsx
```

## Step-by-Step Guide

### 1. Get the Figma Component URL

![Component url](figma-component-url.png)

1. Select the **Component set** in Figma (not an individual variant)
2. Click the **link button** to copy the URL

The URL looks like: `https://www.figma.com/design/XXXXX/file-name?node-id=14436-13065`

You only need the `node-id` value for the configuration file.

> **Note:** Each component set has its own `node-id`. If a component has multiple sets (e.g., "with text" and "without text" buttons), you need a separate `node-id` for each.

### 2. Identify Figma Properties

![Component properties](figma-component-props.png)

1. Select a specific component instance in Figma
2. Switch to **Dev Mode**
3. Review the properties panel on the right side

Note the exact property names (e.g., `Size`, `💻 Variant`, `✏️ Text`) — these must match exactly in your configuration.

> **Important:** Different component sets within the same component may have different properties. If you reference a property that doesn't exist in a component set, Figma will reject the connection.

### 3. Add `FIGMA_FILE` to `.env`

When you copy a component link, the URL contains the Figma file path including the branch:

```text
https://www.figma.com/design/ABC123/my-branch?node-id=...
                              ^^^^^^^^^^^^^^^
```

Add the value between `design/` and `?node-id` to your `.env` file:

```env
FIGMA_FILE=ABC123/my-branch
```

See [.env.template](/.env.template) for reference.

> **⚠️ Security:** Never commit `.env` files or personal access tokens.

### 4. Create the Configuration File

Create `figma/[component].figma.ts` to map Figma properties to code props.

**Example** from `button.figma.ts`:

```typescript
import { FigmaCodeConnect, FigmaProp } from "../../../shared/figma";

const defaultButtonProps: Record<string, FigmaProp> = {
	disabled: {
		type: "enum",
		key: "Disabled",
		value: {
			False: false,
			True: true
		}
	},
	size: {
		type: "enum",
		key: "Size",
		value: {
			Small: "small",
			"(Def) Medium": "medium"
		}
	},
	text: { type: "string", key: "✏️ Text" },
	variant: {
		type: "enum",
		key: "💻 Variant",
		value: {
			Brand: "brand",
			Ghost: "ghost",
			Filled: "filled",
			Outlined: "outlined"
		}
	}
};

export const textButtons: FigmaCodeConnect = {
	urls: [
		"https://www.figma.com/design/FIGMA_FILE?node-id=14436-13065",
		"https://www.figma.com/design/FIGMA_FILE?node-id=14436-13355"
	],
	props: defaultButtonProps
};
```

> **Note:** `FIGMA_FILE` in the URLs is a placeholder that gets replaced at build time with the value from your `.env` file.

#### Props constants: one variable per `props` field

> **⚠️ Mitosis constraint:** Mitosis parses the `props` value in `useMetadata` as JSON5. This means `props` must point to **a single named variable** — not an inline object literal with multiple variable references.

```typescript
// ❌ Fails — Mitosis cannot resolve the inline object
export const myComponent: FigmaCodeConnect = {
	urls: [...],
	props: { semantic: semanticProp, disabled: disabledProp }
};

// ✅ Correct — a single named variable
const myComponentProps: Record<string, FigmaProp> = {
	semantic: { type: 'enum', key: 'Semantic', value: { ... } },
	disabled: { type: 'enum', key: 'Disabled', value: { False: false, True: true } }
};

export const myComponent: FigmaCodeConnect = {
	urls: [...],
	props: myComponentProps
};
```

Spreads inside the `Record` variable itself are fine — Mitosis only has trouble with the inline object passed directly to `props`:

```typescript
// ✅ Spreads inside the variable are fine
const extendedProps: Record<string, FigmaProp> = {
	...baseProps,
	icon: { type: 'iconSwap', ... }
};
```

If a component has variants with different prop combinations, create **separate constants** per combination:

```typescript
const baseBadgeProps: Record<string, FigmaProp> = { size: { ... }, semantic: { ... } };
const dotBadgeProps: Record<string, FigmaProp> = { ...baseBadgeProps, placement: cornerPlacementProp };
const iconBadgeProps: Record<string, FigmaProp> = { ...baseBadgeProps, icon: { ... } };
```

Also note that Mitosis **cannot resolve template literals** in URLs:

```typescript
// ❌ Fails
const FILE = "mlJ6R0GkfR15a93KSlqXtB";
urls: [`https://www.figma.com/design/${FILE}?node-id=14442:18427`];

// ✅ Correct — plain string
urls: ["https://www.figma.com/design/FIGMA_FILE?node-id=14442:18427"];
```

### 5. Create the Mitosis Component

Create `figma/[variant].[component].figma.lite.tsx` for each variant. If all variants share the same JSX, a single `[component].figma.lite.tsx` is enough.

**Example** from `text.button.figma.lite.tsx`:

```tsx
import { useMetadata } from "@builder.io/mitosis";
import { DBButton } from "../index";
import { FigmaButtonProps, textButtons } from "./button.figma";
//       ^^^^^^^^^^^^^^^^ Always import the typed props interface, never use `any`

useMetadata({
	figma: textButtons
});

export default function TextButtonFigmaLite(props: FigmaButtonProps) {
	return (
		<DBButton
			disabled={props.disabled}
			size={props.size}
			variant={props.variant}
			type="button"
		>
			{props.text}
		</DBButton>
	);
}
```

The `useMetadata({ figma: ... })` call links this Mitosis component to the Figma configuration. The `props` passed to the DB UX component must match the keys defined in your configuration file.

## Property Types

| Type                       | Description                                                                                               |
| -------------------------- | --------------------------------------------------------------------------------------------------------- |
| `string`                   | Direct text input — `instance.getString(key)`                                                             |
| `boolean`                  | True/false toggle — `instance.getBoolean(key)`                                                            |
| `enum`                     | Maps Figma dropdown/toggle values to code values — `instance.getEnum(key, { ... })`                       |
| `children`                 | Named slot content — `instance.getSlot(key)`                                                              |
| `textContent`              | Text rendered as children or screenreader label — `instance.getString(key)`                               |
| `instance`                 | Nested component instance swap — `instance.getInstanceSwap(key)?.executeTemplate()?.example`              |
| `iconSwap`                 | Icon instance swap rendered as plain string attribute — `getInstanceSwap(key)?.executeTemplate().example` |
| `nestedText`               | Text from a named nested instance — `instance.findInstance(layerName)?.getString(key)`                    |
| `connectedText`            | Text from the first code-connected child with that property key                                           |
| `validationMessage`        | Message text mapped to `message`/`invalidMessage`/`validMessage` based on a condition prop                |
| `conditionalProp`          | Attribute only rendered when a boolean guard prop is true (e.g. icons guarded by `showIcon`)              |
| `connectedInstances`       | All direct code-connected child instances rendered as children                                            |
| `nestedConnectedInstances` | Code-connected children filtered by component name, traversing helper layers                              |

### `enum` with boolean values

Use `False: false, True: true` to map Figma toggle values to booleans:

```typescript
disabled: {
	type: "enum",
	key: "Disabled",
	value: { False: false, True: true }
}
```

### `iconSwap` — icon instance swaps

Icons in Figma are instance swaps that resolve to icon name strings via the icon batch files. Use `iconSwap` (not `instance`) as the value type inside an `enum` prop. The generated code calls `getInstanceSwap(...).executeTemplate().example` and renders the result as a plain string attribute (e.g. `icon="arrow_right"`):

```typescript
// ✅ Correct — resolves to icon name string rendered as plain attribute
icon: {
	type: "enum",
	key: "Size",
	value: {
		Small: { type: "iconSwap", key: "🔄 Icon Small" },
		"(Def) Medium": { type: "iconSwap", key: "🔄 Icon Medium" }
	}
}

// ❌ Wrong — would try to execute the icon as a component template
icon: {
	type: "enum",
	key: "Size",
	value: {
		Small: { type: "instance", key: "🔄 Icon Small" }
	}
}
```

### `textContent` vs `string`

Both generate `instance.getString()` but serve different purposes:

- `string` — for attribute props (e.g. `headlinePlain="..."`)
- `textContent` — for text rendered as children or as a screenreader label (e.g. `<DBBadge>{text}</DBBadge>`)

### `nestedText` — text from a named nested instance

Use when the text lives inside a specific named child component (e.g. an infotext inside a checkbox):

```typescript
message: { type: "nestedText", layerName: "Infotext - (Def) Auto Width", key: "✏️ Text" }
```

Generates: `instance.findInstance('Infotext - (Def) Auto Width')?.getString('✏️ Text')`

### `connectedText` — text from a code-connected child

Use when the text lives inside a child that has its own Code Connect mapping:

```typescript
message: { type: "connectedText", key: "✏️ Text", index: 0 }
```

Generates:

```js
instance
	.findConnectedInstances((node) => node.hasCodeConnect())
	.filter((node) => node.type === "INSTANCE")
	.filter((node) => !!node.properties["✏️ Text"])[0]
	?.getString("✏️ Text");
```

### `connectedInstances` — dynamic children from Figma

Use when a container component (e.g. `DBAccordion`) should render its child instances dynamically instead of hardcoded placeholders:

```typescript
children: {
	type: "connectedInstances";
}
```

Generates:

```js
instance
	.findConnectedInstances((node) => node.hasCodeConnect())
	.map((child) => child.executeTemplate().example);
```

In the lite file, use `{props.children}` as the slot:

```tsx
<DBAccordion behavior={props.behavior} variant={props.variant}>
	{props.children}
</DBAccordion>
```

### `nestedConnectedInstances` — children behind helper layers

Some Figma components wrap their child instances in non-code-connected helper components, or mix different component types (e.g. accordion items interleaved with dividers). Use `filter` to specify which component to keep by matching against the `nestedImports` of each instance's template.

```typescript
// Only include DBAccordionItem instances, skip DBDivider and other components
children: { type: "nestedConnectedInstances", filter: "DBAccordionItem" }
```

Generates:

```js
instance
	.findConnectedInstances((node) => node.hasCodeConnect(), {
		traverseInstances: true
	})
	.filter((node) => node.type === "INSTANCE")
	.filter((node) =>
		node
			.executeTemplate()
			.example.some(
				(section) =>
					section.type === "CODE" &&
					section.nestedImports?.some((i) =>
						i.includes("DBAccordionItem")
					)
			)
	)
	.reverse()
	.flatMap((child) => child.executeTemplate().example);
```

`traverseInstances: true` searches recursively through all descendant layers, so intermediate helper components are automatically traversed. The `filter` string is matched against the `nestedImports` array of each instance's rendered template — only instances that import the specified component are included.

> **How to find the right `filter` value:** Use the component name as it appears in the import statement (e.g. `DBAccordionItem`, `DBTabItem`). Check the Figma Code Connect output to see what `nestedImports` each child instance produces.

### `validationMessage` — conditional message attribute

Use when a component has a message prop that maps to different attribute names depending on a validation state (e.g. `message`, `invalidMessage`, `validMessage`).

```typescript
message: {
	type: "validationMessage",
	key: "✏️ Text",
	conditionProp: "validation",
	map: {
		invalid: "invalidMessage",
		valid: "validMessage",
		default: "message"
	}
}
```

Generates:

```js
const _messageMessage = instance
	.findConnectedInstances((node) => node.hasCodeConnect())
	.filter((node) => node.type === "INSTANCE")
	.filter((node) => !!node.properties["✏️ Text"])[0]
	?.getString("✏️ Text");
let message = "";
if (_messageMessage) {
	let messageAttr = "message";
	if (validation === "invalid") messageAttr = "invalidMessage";
	if (validation === "valid") messageAttr = "validMessage";
	message = `\n\t\t${messageAttr}="${_messageMessage}"`;
}
```

The `message` variable is injected directly after the opening tag: `<DBCheckbox${message} ...>`. When empty, nothing is rendered — no blank line.

> **Do not add the prop to the lite file** — the plugin injects it automatically. The lite file should not include `message={props.message}`.

### `conditionalProp` — attribute only rendered when a guard is true

Use for icon props that should only appear in the output when their corresponding `showIcon*` boolean is true. Without this, empty `icon=""` attributes would always be rendered.

```typescript
iconLeading: {
	type: "conditionalProp",
	key: "🔄 Icon Leading",
	guardProp: "showIconLeading",
	attrName: "icon"
},
iconTrailing: {
	type: "conditionalProp",
	key: "🔄 Icon Trailing",
	guardProp: "showIconTrailing",
	attrName: "iconTrailing"
}
```

Generates:

```js
const _iconLeadingValue = instance
	.getInstanceSwap("🔄 Icon Leading")
	?.executeTemplate().example;
let iconLeading = "";
if (showIconLeading) {
	iconLeading = `\n\t\ticon="${_iconLeadingValue}"`;
}
```

The variable is injected after the opening tag: `<DBInput${iconLeading}${iconTrailing} ...>`. When the guard is false, the attribute is completely omitted.

> **Do not add the prop to the lite file** — the plugin injects it automatically. Remove `icon={props.iconLeading}` from the JSX.

## Merging Variants into One File

If multiple Figma component sets produce identical JSX (only differing in a prop value like `size`), merge them into a single lite file and expose the differing property as a prop:

```typescript
// Instead of medium.checkbox.figma.ts + small.checkbox.figma.ts:
const checkboxProps: Record<string, FigmaProp> = {
	size: {
		type: "enum",
		key: "💻 Size",
		value: { "(Def) Medium": "medium", Small: "small" }
	}
	// ...
};

export const checkboxes: FigmaCodeConnect = {
	urls: [
		"https://www.figma.com/design/FIGMA_FILE?node-id=2068:3423", // Medium Auto
		"https://www.figma.com/design/FIGMA_FILE?node-id=10707:19709", // Medium Full
		"https://www.figma.com/design/FIGMA_FILE?node-id=2068:3548", // Small Auto
		"https://www.figma.com/design/FIGMA_FILE?node-id=10707:19958" // Small Full
	],
	props: checkboxProps
};
```

## Testing

1. Generate all Figma files via Mitosis:

    ```shell
    npm run generate:figma --workspace=@db-ux/core-components
    ```

2. Check the generated output in `figma-code-connect/react-figma/src/`.

3. Run the tests:

    ```shell
    npm run test --workspace=react-figma
    ```

### Update snapshots

After any change to `.figma.ts` or `.figma.lite.tsx` files, update the snapshots for all three frameworks:

```shell
npm run test:update --workspace=react-figma
npm run test:update --workspace=angular-figma
npm run test:update --workspace=vue-figma
```

> **When required:** Whenever you add a new component, change URLs, change props, or change example templates. The CI will fail if snapshots are out of date.

The snapshot files live at:

```text
figma-code-connect/react-figma/test/__snapshots__/parse.spec.ts.snap
figma-code-connect/angular-figma/test/__snapshots__/parse.spec.ts.snap
figma-code-connect/vue-figma/test/__snapshots__/parse.spec.ts.snap
```

These files **must be committed** — they are the baseline for CI.

## Publishing

### Generate a Figma Access Token

1. Go to your [Figma account settings](https://www.figma.com/settings)
2. Generate a personal access token

![Generate access token](figma-generate-access-token.png)

### Publish to Figma

1. Create `figma-code-connect/react-figma/.env` with your token:

    ```env
    FIGMA_ACCESS_TOKEN="figd_XXX"
    ```

    > **⚠️ Security:** Keep this token local and do not commit it.

2. Publish:

    ```shell
    npm run connect --workspace=react-figma
    ```
