## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Use component

```ts app.component.ts
// app.component.ts
import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	template: `
		<db-breadcrumb>
			<li><a href="#">Home</a></li>
			<li><a href="#">Category</a></li>
			<li aria-current="page">Current Page</li>
		</db-breadcrumb>
	`
})
export class AppComponent {}
```

### Use component with items array

```ts app.component.ts
import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	template: `
		<db-breadcrumb
			[items]="items"
			[maxItems]="3"
			aria-label="Breadcrumb"
		></db-breadcrumb>
	`
})
export class AppComponent {
	items = [
		{ href: "#", text: "Home" },
		{ href: "#", text: "Category" },
		{ text: "Current Page", ariaCurrent: "page" as const }
	];
}
```
