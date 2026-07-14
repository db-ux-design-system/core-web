# Migration DBDrawer

## Breaking Changes

| Change                             | Before                       | After                                               |
| ---------------------------------- | ---------------------------- | --------------------------------------------------- |
| `header` slot now required         | Optional, no header needed   | Must pass `<DBDrawerHeader>` in the `header` slot   |
| `spacing` property removed         | `<DBDrawer spacing="small">` | Remove `spacing` prop (no longer supported)         |
| `direction` values renamed         | `right`, `left`              | `to-left`, `to-right`                               |
| `width` renamed to `containerSize` | `<DBDrawer width="full">`    | `<DBDrawer containerSize="full">`                   |
| New `showSpacing` property         | N/A                          | `<DBDrawer :showSpacing="false">` to disable        |
| New `containerSize` options        | `width`: `full`, `auto`      | `containerSize`: `small`, `medium`, `large`, `full` |

## Required `DBDrawerHeader`

The `DBDrawer` component now requires a `DBDrawerHeader` component to be placed in the `header` slot. The `DBDrawerHeader` provides a consistent header with a built-in close button.

### Before

```vue
<template>
	<DBButton @click="open = true">Open Drawer</DBButton>
	<DBDrawer :open="open" @close="open = false"> Drawer content </DBDrawer>
</template>
```

### After

```vue
<template>
	<DBButton @click="open = true">Open Drawer</DBButton>
	<DBDrawer :open="open" @close="open = false">
		<template #header>
			<DBDrawerHeader>My Title</DBDrawerHeader>
		</template>
		Drawer content
	</DBDrawer>
</template>
```

## Removed `spacing` property

The `spacing` property has been removed from `DBDrawer`. Remove any usage of this prop.

### Before

```vue
<template>
	<DBDrawer spacing="small" :open="open" @close="open = false">
		Content
	</DBDrawer>
</template>
```

### After

```vue
<template>
	<DBDrawer :open="open" @close="open = false">
		<template #header>
			<DBDrawerHeader>Title</DBDrawerHeader>
		</template>
		Content
	</DBDrawer>
</template>
```

## `direction` values renamed

The direction values have been renamed from `right`/`left` to `to-left`/`to-right`. If you relied on the default `right` behavior (which was opening from right), you now need to set `direction="to-left"` explicitly (slides from right border to the left).

### Before

```vue
<template>
	<!-- Previously opened from the right by default -->
	<DBDrawer :open="open" @close="open = false"> Content </DBDrawer>
</template>
```

### After

```vue
<template>
	<!-- Now opens from the left by default — add direction="to-left" to keep old behavior (slides from right to left) -->
	<DBDrawer direction="to-left" :open="open" @close="open = false">
		<template #header>
			<DBDrawerHeader>Title</DBDrawerHeader>
		</template>
		Content
	</DBDrawer>
</template>
```

## `width` renamed to `containerSize`

The `width` property has been replaced by `containerSize` with new size options: `small` (default on desktop), `medium`, `large`, and `full`.

### Before

```vue
<template>
	<DBDrawer width="full" :open="open" @close="open = false">
		Content
	</DBDrawer>
</template>
```

### After

```vue
<template>
	<DBDrawer containerSize="full" :open="open" @close="open = false">
		<template #header>
			<DBDrawerHeader>Title</DBDrawerHeader>
		</template>
		Content
	</DBDrawer>
</template>
```

## New `showSpacing` property

The `showSpacing` property controls the spacing between the screen edge and the drawer content. It defaults to `true`. Set `:showSpacing="false"` to remove the spacing.

```vue
<template>
	<!-- Default: with spacing -->
	<DBDrawer :open="open" @close="open = false">
		<template #header>
			<DBDrawerHeader>Title</DBDrawerHeader>
		</template>
		Content
	</DBDrawer>

	<!-- Without spacing -->
	<DBDrawer :showSpacing="false" :open="open" @close="open = false">
		<template #header>
			<DBDrawerHeader>Title</DBDrawerHeader>
		</template>
		Content
	</DBDrawer>
</template>
```
