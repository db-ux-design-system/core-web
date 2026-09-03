## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
import { Component } from "@angular/core";
import { DBPaginationItem } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	imports: [DBPaginationItem],
	standalone: true
})
export class AppComponent {}
```

### Use component

`DBPaginationItem` is a sub-component of `DBPagination`, which renders one item per
page and one per truncation. Use it directly only when you build a pagination
yourself and want the item appearance and semantics of the design system.

```html app.component.html
<nav class="db-pagination" aria-label="Pagination">
	<ul>
		<db-pagination-item [page]="1" label="Page 1 of 2" />
		<db-pagination-item [page]="2" [active]="true" label="Page 2 of 2" />
	</ul>
</nav>
```

Leave `page` out to render the truncation item. Pass `href` to render an anchor
instead of a button, and `layout` to place the item in one of the two responsive
layouts.
