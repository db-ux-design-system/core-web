# Button Component

A standardized button component with support for visual variants, sizes, and optional icons.

## Variants

- **brand**: Primary action button with filled background.
- **outlined**: Secondary button with border and transparent background.
- **ghost**: Text-only button without background or border.
- **ugly**: Deprecated variant, use `ghost` instead.

## Sizes

- **medium** (default)
- **small**

## CSS Classes & Data Attributes

```html
<button class="db-button" data-variant="brand" data-size="medium">Save</button>
```

- `.db-button`
- `data-variant="brand|outlined|ghost"`
- `data-size="small|medium"`

## Properties / API

| Property  | Type      | Default      | Description                                      |
| --------- | --------- | ------------ | ------------------------------------------------ |
| `variant` | `string`  | `"outlined"` | Visual style: `"brand"`, `"outlined"`, `"ghost"` |
| `size`    | `string`  | `"medium"`   | Button size: `"small"`, `"medium"`               |
| `icon`    | `string`  | `null`       | Optional icon name displayed before text         |
| `noText`  | `boolean` | `false`      | If true, only the icon is displayed              |

## Example (React)

```jsx
import { DBButton } from "@db-ux/react-core-components";

function App() {
	return (
		<>
			<DBButton variant="brand" onClick={() => console.log("Clicked")}>
				Save
			</DBButton>
			<DBButton variant="outlined" size="small">
				Cancel
			</DBButton>
		</>
	);
}
```
