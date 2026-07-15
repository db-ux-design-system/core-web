# Migration DBDrawer

## Breaking changes

| Change                             | Before                       | After                                                                  |
| ---------------------------------- | ---------------------------- | ---------------------------------------------------------------------- |
| `header` slot now required         | Optional, no header needed   | Must pass `<DBDrawerHeader>` in the `header` slot                      |
| `spacing` property removed         | `<DBDrawer spacing="small">` | Remove `spacing` prop (no longer supported)                            |
| `direction` values renamed         | `right`, `left`              | `to-left`, `to-right`                                                  |
| `width` renamed to `containerSize` | `<DBDrawer width="full">`    | `<DBDrawer containerSize="full" showSpacing={false}>` (see note below) |
| New `showSpacing` property         | N/A                          | `<DBDrawer showSpacing={false}>` to disable                            |
| New `containerSize` options        | `width`: `full`, `auto`      | `containerSize`: `small`, `medium`, `large`, `full`                    |

## Required `DBDrawerHeader`

The `DBDrawer` component now requires a `DBDrawerHeader` component to be placed in the `header` slot. The `DBDrawerHeader` provides a consistent header with a built-in close button.

### Before

```tsx
import { DBDrawer, DBButton } from "@db-ux/react-core-components";

const App = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<DBButton onClick={() => setOpen(true)}>Open Drawer</DBButton>
			<DBDrawer open={open} onClose={() => setOpen(false)}>
				Drawer content
			</DBDrawer>
		</>
	);
};
```

### After

```tsx
import {
	DBDrawer,
	DBDrawerHeader,
	DBButton
} from "@db-ux/react-core-components";

const App = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<DBButton onClick={() => setOpen(true)}>Open Drawer</DBButton>
			<DBDrawer
				open={open}
				onClose={() => setOpen(false)}
				header={<DBDrawerHeader>My Title</DBDrawerHeader>}
			>
				Drawer content
			</DBDrawer>
		</>
	);
};
```

## Removed `spacing` property

The `spacing` property has been removed from `DBDrawer`. Remove any usage of this prop.

### Before

```tsx
<DBDrawer spacing="small" open={open} onClose={() => setOpen(false)}>
	Content
</DBDrawer>
```

### After

```tsx
<DBDrawer
	open={open}
	onClose={() => setOpen(false)}
	header={<DBDrawerHeader>Title</DBDrawerHeader>}
>
	Content
</DBDrawer>
```

## `direction` values renamed

The direction values have been renamed from `right`/`left` to `to-left`/`to-right`. If you relied on the default `right` behavior (which was opening from right), you now need to set `direction="to-left"` explicitly (slides from right border to the left).

### Before

```tsx
{
	/* Previously opened from the right by default */
}
<DBDrawer open={open} onClose={() => setOpen(false)}>
	Content
</DBDrawer>;
```

### After

```tsx
{
	/* Now opens from the left by default — add direction="to-left" to keep old behavior (slides from right to left) */
}
<DBDrawer
	direction="to-left"
	open={open}
	onClose={() => setOpen(false)}
	header={<DBDrawerHeader>Title</DBDrawerHeader>}
>
	Content
</DBDrawer>;
```

## `width` renamed to `containerSize`

The `width` property has been replaced by `containerSize` with new size options: `small` (default on desktop), `medium`, `large`, and `full`.

> **Important:** If you previously used `width="full"`, you must also set `showSpacing={false}` to preserve the old full-viewport behavior. Without it, the drawer retains a small gap from the screen edge due to the default backdrop spacing.

### Before

```tsx
<DBDrawer width="full" open={open} onClose={() => setOpen(false)}>
	Content
</DBDrawer>
```

### After

```tsx
<DBDrawer
	containerSize="full"
	showSpacing={false}
	open={open}
	onClose={() => setOpen(false)}
	header={<DBDrawerHeader>Title</DBDrawerHeader>}
>
	Content
</DBDrawer>
```

## New `showSpacing` property

The `showSpacing` property controls the spacing between the screen edge and the drawer content. It defaults to `true`. Set `showSpacing={false}` to remove the spacing.

```tsx
{
	/* Default: with spacing */
}
<DBDrawer
	open={open}
	onClose={() => setOpen(false)}
	header={<DBDrawerHeader>Title</DBDrawerHeader>}
>
	Content
</DBDrawer>;

{
	/* Without spacing */
}
<DBDrawer
	showSpacing={false}
	open={open}
	onClose={() => setOpen(false)}
	header={<DBDrawerHeader>Title</DBDrawerHeader>}
>
	Content
</DBDrawer>;
```
