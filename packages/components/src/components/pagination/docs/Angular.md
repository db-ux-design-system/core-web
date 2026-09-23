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

### Per-page options

Pass an `items` array, one entry per page, to drive the pagination from data instead
of a bare count. An entry can disable its page or give it its own `label`, neither of
which the count API can express. The visible text stays the page number.

```html app.component.html
<db-pagination
	[currentPage]="1"
	[items]="[{}, { disabled: true }, { label: 'Last page' }]"
	(pageChange)="onPageChange($event)"
/>
```

### Composition

Leave `totalCount` out and pass the items yourself. The pagination then projects your
content instead of computing the page list, which is what lets you bring a router
link. You set nothing on the item: the pagination derives each page from its position,
writes `data-page` onto every `<li>` and marks the current page with `aria-current`,
all through the DOM. It also reports the page by reading `data-page` back, so your
child never gets a handler attached to it.

A composed item is a child of your own component, so the directives it uses have to
be imported there. `RouterLink` belongs in that list next to both components -
without it `routerLink` is an inert attribute and the example below does not
navigate:

```ts app.component.ts
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { DBPagination, DBPaginationItem } from "@db-ux/ngx-core-components";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	imports: [DBPagination, DBPaginationItem, RouterLink],
	standalone: true
})
export class AppComponent {
	onPageChange(page: number) {
		// Keep your own state in sync; the router handles the navigation itself.
	}
}
```

```html app.component.html
<db-pagination [currentPage]="2" (pageChange)="onPageChange($event)">
	<db-pagination-item>
		<a routerLink="/results/1" aria-label="Page 1 of 2">1</a>
	</db-pagination-item>
	<db-pagination-item>
		<a routerLink="/results/2" aria-label="Page 2 of 2">2</a>
	</db-pagination-item>
</db-pagination>
```

`totalCount` is what selects between the two modes, because Angular can only test
inputs and never projected content.

The page identity comes from the item position, so the first item is page 1, the
second page 2, and `currentPage` marks which is current. Previous and next look that
identity up: as buttons they do not report a page themselves, they click the item of
the neighbouring page. So your router link runs for the arrows too, and the router
sees the same navigation it sees for a direct click. Where that neighbour is not in
your list, the arrow falls back to reporting the page through `pageChange`.

Two things move to you in this mode. The truncation and the responsive collapsing are
not applied, because the component cannot know which pages your children stand for.
And the accessible name is yours: the pagination places `aria-current` on your link,
but the visible number alone does not name the page, so add an `aria-label` such as
`Page 2 of 2`. The last page is unknown as well, so the next button stays enabled and
an out of range request is yours to ignore.
