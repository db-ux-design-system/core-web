# Creating Component Examples

This guide explains how to create examples for components in the DB UX Design System.

## File Structure

Each component should have:
- Example files: `*.example.lite.tsx` in the component's `examples/` folder
- Arg types file: `_<component>.arg.types.ts` defining Storybook controls

## Creating an Example File

### Basic Example

```tsx
import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

useMetadata({
	storybookTitle: 'Width',
	storybookNames: ['Auto', 'Full'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonWidth() {
	return (
		<Fragment>
			<DBButton width="auto">Auto</DBButton>
			<DBButton width="full">Full</DBButton>
		</Fragment>
	);
}
```

### useMetadata Configuration

The `useMetadata` hook configures how the example appears in Storybook:

- **`storybookTitle`**: The title shown in Storybook for this example
- **`storybookNames`**: Array of names for each variant in the example (matches the order of components)
- **`storybookArgTypes`**: Reference to the arg types object from `_<component>.arg.types.ts`
- **`storybookIgnore`**: Set to `true` to exclude the entire example from Storybook
- **`storybookOverwriteArgs`**: Override default arg values for Storybook controls

Example with overwrite:
```tsx
useMetadata({
	storybookTitle: 'Backdrop',
	storybookNames: ['Strong', 'Weak'],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});
```

## Storybook Data Attributes

### data-sb-replace

Replace a component/element with a description in Storybook. Useful for interactive elements that shouldn't be interactive in the docs.

```tsx
<DBButton
	data-sb-replace="Open DBDrawer by switching open property"
	onClick={() => setOpenIndex(0)}>
	Open Drawer
</DBButton>
```

### data-sb-ignore

Hide specific components/elements from Storybook while keeping them in the actual example.

```tsx
<DBInfotext
	data-sb-ignore="true"
	semantic="informational">
	Helper text
</DBInfotext>
```

## Arg Types File

Create `_<component>.arg.types.ts` to define Storybook controls:

```tsx
import type { InputType } from 'storybook/internal/csf';
import { StorybookIconArgTypes } from '../../../shared/examples/_icons.arg.types';

export const StorybookButtonArgTypes: Record<string, InputType> = {
	variant: { control: 'select', options: ['outlined', 'brand', 'ghost', 'filled'] },
	disabled: { control: 'boolean' },
	width: { control: 'select', options: ['full', 'auto'] },
	size: { control: 'select', options: ['small', 'medium'] },
	text: { control: 'text' },
	...StorybookIconArgTypes,
	onClick: { action: 'onClick' }
};
```

### Control Types

- **select**: Dropdown with predefined options
- **boolean**: Toggle switch
- **text**: Text input
- **number**: Number input
- **object**: JSON editor
- **action**: Event handler logger

### Icon Properties

For components with icon support, import and spread the shared icon arg types:

```tsx
import { StorybookIconArgTypes, StorybookIconLeadingArgTypes, StorybookIconTrailingArgTypes } from '../../../shared/examples/_icons.arg.types';

export const StorybookInputArgTypes: Record<string, InputType> = {
	// ... other properties
	...StorybookIconArgTypes,
	...StorybookIconLeadingArgTypes,
	...StorybookIconTrailingArgTypes
};
```

## Best Practices

1. **Name examples descriptively**: Use the property or feature being demonstrated (e.g., `width.example.lite.tsx`)
2. **Keep examples focused**: Each example should demonstrate one feature or property
3. **Use Fragment**: Wrap multiple variants in `<Fragment>` to avoid extra DOM elements
4. **Match storybookNames order**: Ensure the array order matches the component order in the JSX
5. **Import shared utilities**: Use `fn` from `../../../shared/examples` for event handlers
6. **Sync with model.ts**: Ensure arg types match the component's model.ts properties
