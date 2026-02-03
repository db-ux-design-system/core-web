## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Overview

`DBBreadcrumbItem` is used as a child component of `DBBreadcrumb` to create individual breadcrumb items. This provides more flexibility than using the `items` prop, especially when you need custom content or dynamic behavior.

**Note**: For most use cases, using the `items` prop on `DBBreadcrumb` is simpler and supports all features including collapse functionality. Use child components when you need more control over rendering.

### Basic Usage

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
export class App {}
```

### With Text Property

You can use the `text` property instead of child content:

```html
<db-breadcrumb>
	<db-breadcrumb-item href="/" text="Home"></db-breadcrumb-item>
	<db-breadcrumb-item href="/category" text="Category"></db-breadcrumb-item>
	<db-breadcrumb-item
		text="Current Page"
		aria-current="page"
	></db-breadcrumb-item>
</db-breadcrumb>
```

### With Icons

Add icons to breadcrumb items:

```html
<db-breadcrumb>
	<db-breadcrumb-item href="/" icon="home">Home</db-breadcrumb-item>
	<db-breadcrumb-item href="/category" icon="folder">
		Category
	</db-breadcrumb-item>
	<db-breadcrumb-item aria-current="page">Current Page</db-breadcrumb-item>
</db-breadcrumb>
```

### Disabled Item

Disable breadcrumb items to render them as spans instead of links:

```html
<db-breadcrumb>
	<db-breadcrumb-item href="/">Home</db-breadcrumb-item>
	<db-breadcrumb-item [disabled]="true">Disabled Item</db-breadcrumb-item>
	<db-breadcrumb-item aria-current="page">Current Page</db-breadcrumb-item>
</db-breadcrumb>
```

### Dynamic Content

Use child components for dynamic or complex content:

```ts
@Component({
	template: `
		<db-breadcrumb>
			<db-breadcrumb-item href="/">Home</db-breadcrumb-item>
			<db-breadcrumb-item
				*ngFor="let item of breadcrumbPath"
				[href]="item.url"
			>
				{{ item.label }}
			</db-breadcrumb-item>
			<db-breadcrumb-item aria-current="page">
				{{ currentPage }}
			</db-breadcrumb-item>
		</db-breadcrumb>
	`
})
export class AppComponent {
	breadcrumbPath = [
		{ url: "/products", label: "Products" },
		{ url: "/products/electronics", label: "Electronics" }
	];
	currentPage = "Laptops";
}
```

### All Available Properties

- **href**: The URL the breadcrumb item links to
- **text**: The text content of the breadcrumb item (alternative to using child content)
- **icon**: Icon name from DB UX icon library
- **ariaCurrent**: Indicates the current page (typically `"page"` for the last item)
- **disabled**: When `true`, renders as a span instead of a link
- **id**: Custom ID for the element
- **className**: Additional CSS classes
