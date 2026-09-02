## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
import { Component } from "@angular/core";
import { DBPagination } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	imports: [DBPagination],
	standalone: true
})
export class AppComponent {
	currentPage = 1;
}
```

### Use component

```html app.component.html
<db-pagination
	[currentPage]="currentPage"
	[totalCount]="100"
	[pageSize]="10"
	(pageChange)="currentPage = $event"
/>
```
