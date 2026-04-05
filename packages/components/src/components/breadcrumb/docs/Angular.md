## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Usage Patterns

There are two ways to use the breadcrumb component:

1. **Using the `items` prop** (recommended): Pass an array of breadcrumb items
2. **Using child components**: Use `<db-breadcrumb-item>` components as children

### Basic Usage with Items Array (Recommended)

The `items` prop provides a declarative way to define breadcrumbs and supports all features including collapse functionality.

```ts app.component.ts
import { Component } from "@angular/core";
import { DBBreadcrumb } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-root",
	imports: [DBBreadcrumb],
	template: `
		<db-breadcrumb [items]="items" aria-label="Breadcrumb"></db-breadcrumb>
	`,
	standalone: true
})
export class AppComponent {
	items = [
		{ href: "/", text: "Home" },
		{ href: "/category", text: "Category" },
		{ text: "Current Page", ariaCurrent: "page" as const }
	];
}
```

### Using Child Components

Alternatively, use `<db-breadcrumb-item>` components for more flexibility:

```ts app.component.ts
import { Component } from "@angular/core";
import { DBBreadcrumb, DBBreadcrumbItem } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-root",
	imports: [DBBreadcrumb, DBBreadcrumbItem],
	template: `
		<db-breadcrumb>
			<db-breadcrumb-item href="/">Home</db-breadcrumb-item>
			<db-breadcrumb-item href="/category">Category</db-breadcrumb-item>
			<db-breadcrumb-item aria-current="page">
				Current Page
			</db-breadcrumb-item>
		</db-breadcrumb>
	`,
	standalone: true
})
export class AppComponent {}
```

### With Icons

Add icons to breadcrumb items using the `icon` property:

```ts
items = [
	{ href: "/", text: "Home", icon: "home" },
	{ href: "/category", text: "Category", icon: "folder" },
	{ text: "Current Page", ariaCurrent: "page" as const }
];
```

### Size Options

Control the size of breadcrumb items:

```html
<!-- Small size (default) -->
<db-breadcrumb [items]="items" size="small"></db-breadcrumb>

<!-- Medium size -->
<db-breadcrumb [items]="items" size="medium"></db-breadcrumb>
```

### Separator Options

Choose between different separators:

```html
<!-- Chevron separator (default) -->
<db-breadcrumb [items]="items" separator="chevron"></db-breadcrumb>

<!-- Slash separator -->
<db-breadcrumb [items]="items" separator="slash"></db-breadcrumb>
```

### Collapse Long Breadcrumbs

Use `maxItems` to collapse breadcrumbs when they exceed a certain length. The first item and last items are shown, with an ellipsis button in between:

```ts
items = [
	{ href: "/", text: "Home" },
	{ href: "/level1", text: "Level 1" },
	{ href: "/level2", text: "Level 2" },
	{ href: "/level3", text: "Level 3" },
	{ href: "/level4", text: "Level 4" },
	{ text: "Current Page", ariaCurrent: "page" as const }
];
```

```html
<!-- Shows: Home > … > Level 4 > Current Page -->
<!-- Clicking the ellipsis expands to show all items -->
<db-breadcrumb
	[items]="items"
	[maxItems]="3"
	ellipsisAriaLabel="Expand to show all breadcrumb items"
></db-breadcrumb>
```
