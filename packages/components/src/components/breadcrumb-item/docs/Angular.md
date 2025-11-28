## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Use component

```ts app.component.ts
// app.component.ts
import { Component } from "@angular/core";
import { DBBreadcrumb, DBBreadcrumbItem } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-root",
	imports: [DBBreadcrumb, DBBreadcrumbItem],
	template: `
		<db-breadcrumb>
			<db-breadcrumb-item href="/">Home</db-breadcrumb-item>
			<db-breadcrumb-item href="/category">Category</db-breadcrumb-item>
			<db-breadcrumb-item aria-current="page"
				>Current Page</db-breadcrumb-item
			>
		</db-breadcrumb>
	`,
	standalone: true
})
export class App {}
```

### With text prop

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

### Disabled item

```html
<db-breadcrumb>
	<db-breadcrumb-item href="/">Home</db-breadcrumb-item>
	<db-breadcrumb-item [disabled]="true">Disabled Item</db-breadcrumb-item>
	<db-breadcrumb-item aria-current="page">Current Page</db-breadcrumb-item>
</db-breadcrumb>
```
