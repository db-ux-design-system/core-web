# Migration DBDrawer

## Breaking changes

| Change                             | Before                        | After                                                                     |
| ---------------------------------- | ----------------------------- | ------------------------------------------------------------------------- |
| `header` slot now required         | Optional, no header needed    | Must pass `<db-drawer-header>` in the `header` slot                       |
| `spacing` property removed         | `<db-drawer spacing="small">` | Remove `spacing` prop (no longer supported)                               |
| `direction` values renamed         | `right`, `left`               | `to-left`, `to-right`                                                     |
| `width` renamed to `containerSize` | `<db-drawer width="full">`    | `<db-drawer containerSize="full" [showSpacing]="false">` (see note below) |
| New `showSpacing` property         | N/A                           | `<db-drawer [showSpacing]="false">` to disable                            |
| New `containerSize` options        | `width`: `full`, `auto`       | `containerSize`: `small`, `medium`, `large`, `full`                       |

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
	<db-drawer-header header>My Title</db-drawer-header>
	Drawer content
</db-drawer>
```

## Removed `spacing` property

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
	<db-drawer-header header>Title</db-drawer-header>
	Content
</db-drawer>
```

## `direction` values renamed

The direction values have been renamed from `right`/`left` to `to-left`/`to-right`. The default behavior (opening from the right side) is unchanged — it now corresponds to `to-left` (slides from the right screen border to the left).

### Before

```html
<!-- Explicit right direction (or omitted, since right was the default) -->
<db-drawer direction="right" [open]="open()" (close)="open.set(false)">
	Content
</db-drawer>
```

### After

```html
<!-- "to-left" is the new default — no need to set it explicitly unless you had "left" before -->
<db-drawer [open]="open()" (close)="open.set(false)">
	<db-drawer-header header closeButtonText="Close">Title</db-drawer-header>
	Content
</db-drawer>
```

## `width` renamed to `containerSize`

The `width` property has been replaced by `containerSize` with new size options: `small` (default on desktop), `medium`, `large`, and `full`.

> **Important:** If you previously used `width="full"`, you must also set `[showSpacing]="false"` to preserve the old full-viewport behavior. Without it, the drawer retains a small gap from the screen edge due to the default backdrop spacing.

### Before

```html
<db-drawer width="full" [open]="open()" (close)="open.set(false)">
	Content
</db-drawer>
```

### After

```html
<db-drawer
	containerSize="full"
	[showSpacing]="false"
	[open]="open()"
	(close)="open.set(false)"
>
	<db-drawer-header header>Title</db-drawer-header>
	Content
</db-drawer>
```

## New `showSpacing` property

The `showSpacing` property controls the spacing between the screen edge and the drawer content. It defaults to `true`. Set `[showSpacing]="false"` to remove the spacing.

```html
<!-- Default: with spacing -->
<db-drawer [open]="open()" (close)="open.set(false)">
	<db-drawer-header header>Title</db-drawer-header>
	Content
</db-drawer>

<!-- Without spacing -->
<db-drawer [showSpacing]="false" [open]="open()" (close)="open.set(false)">
	<db-drawer-header header>Title</db-drawer-header>
	Content
</db-drawer>
```
