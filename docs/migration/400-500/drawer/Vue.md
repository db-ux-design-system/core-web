# Migration DBDrawer

## Breaking Changes

| Change                      | Before                       | After                                             |
| --------------------------- | ---------------------------- | ------------------------------------------------- |
| `header` slot now required  | Optional, no header needed   | Must pass `<DBDrawerHeader>` in the `header` slot |
| `spacing` property removed  | `<DBDrawer spacing="small">` | Remove `spacing` prop (no longer supported)       |
| Default `direction` changed | `right`                      | `left`                                            |

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
		<template #drawer-header>
			<DBDrawerHeader>My Title</DBDrawerHeader>
		</template>
		Drawer content
	</DBDrawer>
</template>
```

## Removed `spacing` Property

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
		<template #drawer-header>
			<DBDrawerHeader>Title</DBDrawerHeader>
		</template>
		Content
	</DBDrawer>
</template>
```

## Default `direction` Changed

The default direction has changed from `right` to `left`. If you relied on the default `right` behavior, you now need to set `direction="right"` explicitly.

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
	<!-- Now opens from the left by default — add direction="right" to keep old behavior -->
	<DBDrawer direction="right" :open="open" @close="open = false">
		Content
	</DBDrawer>
</template>
```
