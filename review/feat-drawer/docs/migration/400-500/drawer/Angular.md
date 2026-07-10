# Migration DBDrawer

## Breaking Changes

| Change                      | Before                        | After                                               |
| --------------------------- | ----------------------------- | --------------------------------------------------- |
| `header` slot now required  | Optional, no header needed    | Must pass `<db-drawer-header>` in the `header` slot |
| `spacing` property removed  | `<db-drawer spacing="small">` | Remove `spacing` prop (no longer supported)         |
| `direction` values renamed  | `right`, `left`               | `to-left`, `to-right`                               |
| `width` renamed             | `<db-drawer width="full">`    | `<db-drawer containerSize="full">`                  |
| New `showSpacing` property  | N/A                           | `<db-drawer [showSpacing]="false">` to disable      |
| New `containerSize` options | `width`: `full`, `auto`       | `containerSize`: `small`, `medium`, `large`, `full` |

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
	<db-drawer-header header>Title</db-drawer-header>
	Content
</db-drawer>
```

## `direction` Values Renamed

The direction values have been renamed from `right`/`left` to `to-left`/`to-right`. If you relied on the default `right` behavior (which was opening from right), you now need to set `direction="to-left"` explicitly (slides from right border to the left).

### Before

```html
<!-- Previously opened from the right by default -->
<db-drawer [open]="open()" (close)="open.set(false)"> Content </db-drawer>
```

### After

```html
<!-- Now opens from the left by default — add direction="to-left" to keep old behavior (slides from right to left) -->
<db-drawer direction="to-left" [open]="open()" (close)="open.set(false)">
	Content
</db-drawer>
```

## `width` Renamed to `containerSize`

The `width` property has been replaced by `containerSize` with new size options: `small` (default on desktop), `medium`, `large`, and `full`.

### Before

```html
<db-drawer width="full" [open]="open()" (close)="open.set(false)">
	Content
</db-drawer>
```

### After

```html
<db-drawer containerSize="full" [open]="open()" (close)="open.set(false)">
	Content
</db-drawer>
```

## New `showSpacing` Property

The `showSpacing` property controls the spacing between the screen edge and the drawer content. It defaults to `true`. Set `[showSpacing]="false"` to remove the spacing.

```html
<!-- Default: with spacing -->
<db-drawer [open]="open()" (close)="open.set(false)"> Content </db-drawer>

<!-- Without spacing -->
<db-drawer [showSpacing]="false" [open]="open()" (close)="open.set(false)">
	Content
</db-drawer>
```
