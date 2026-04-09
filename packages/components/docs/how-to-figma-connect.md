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

### 5. Create the Mitosis Component

Create `figma/[variant].[component].figma.lite.tsx` for each variant:

**Example** from `text.button.figma.lite.tsx`:

```tsx
import { useMetadata } from "@builder.io/mitosis";
import { DBButton } from "../index";
import { textButtons } from "./button.figma";

useMetadata({
	figma: textButtons
});

export default function TextButtonFigmaLite(props: any) {
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

| Type          | Description                                       | Example                                                    |
| ------------- | ------------------------------------------------- | ---------------------------------------------------------- |
| `enum`        | Maps Figma dropdown/toggle values to code         | `{ type: "enum", key: "Size", value: { Small: "small" } }` |
| `string`      | Direct text input                                 | `{ type: "string", key: "✏️ Text" }`                       |
| `boolean`     | True/false toggle                                 | `{ type: "boolean", key: "Show Icon Leading" }`            |
| `instance`    | Nested component instance (e.g., swappable icons) | `{ type: "instance", key: "🔄 Icon Medium" }`              |
| `children`    | Child component slots                             | `{ type: "children", key: "Slot" }`                        |
| `textContent` | Text content of the component                     | `{ type: "textContent", key: "Label" }`                    |

### Instance Props with Size-Dependent Keys

When an instance prop depends on another property (e.g., icon size depends on button size), use a nested enum:

```typescript
icon: {
  type: "enum",
  key: "Size",
  value: {
    Small: { type: "instance", key: "🔄 Icon Small" },
    "(Def) Medium": { type: "instance", key: "🔄 Icon Medium" }
  }
}
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
