# Migration DBDrawer

## Breaking Changes

| Change                      | Before                        | After                                               |
| --------------------------- | ----------------------------- | --------------------------------------------------- |
| `header` slot now required  | Optional, no header needed    | Must pass `<db-drawer-header>` in the `header` slot |
| `spacing` property removed  | `<db-drawer spacing="small">` | Remove `spacing` prop (no longer supported)         |
| Default `direction` changed | `right`                       | `left`                                              |

## Required `DBDrawerHeader`

The `DBDrawer` component now requires a `DBDrawerHeader` component to be placed in the `header` slot. The `DBDrawerHeader` provides a consistent header with a built-in close button.

### Before

```html
<db-button (click)="open.set(true)">Open Drawer</db-button>
<db-drawer [open]="open()" (close)="open.set(false)">
	Drawer content
</db-drawer>
```

### After

```html
<db-button (click)="open.set(true)">Open Drawer</db-button>
<db-drawer [open]="open()" (close)="open.set(false)">
	<db-drawer-header drawer-header>My Title</db-drawer-header>
	Drawer content
</db-drawer>
```

## Removed `spacing` Property

The `spacing` property has been removed from `DBDrawer`. Remove any usage of this prop.

### Before

```html
<db-drawer spacing="small" [open]="open()" (close)="open.set(false)">
	Content
</db-drawer>
```

### After

```html
<db-drawer [open]="open()" (close)="open.set(false)">
	<db-drawer-header drawer-header>Title</db-drawer-header>
	Content
</db-drawer>
```

## Default `direction` Changed

The default direction has changed from `right` to `left`. If you relied on the default `right` behavior, you now need to set `direction="right"` explicitly.

### Before

```html
<!-- Previously opened from the right by default -->
<db-drawer [open]="open()" (close)="open.set(false)"> Content </db-drawer>
```

### After

```html
<!-- Now opens from the left by default — add direction="right" to keep old behavior -->
<db-drawer direction="right" [open]="open()" (close)="open.set(false)">
	Content
</db-drawer>
```
