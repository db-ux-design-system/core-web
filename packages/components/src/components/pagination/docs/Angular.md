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

### Page links

With `hrefPattern` the pages render as anchors instead of buttons. `{page}` is
replaced with the page number, so the pagination becomes deep linkable, shareable
and usable before hydration.

The current page is the exception. It gets no `href`, because a link to the page one
is already on promises a change and delivers none, so it stays a focusable
`<button>` carrying `aria-current="page"` and shows neither a pointer cursor nor a
hover or pressed state.

```html app.component.html
<db-pagination
	[currentPage]="currentPage"
	[totalCount]="100"
	[pageSize]="10"
	hrefPattern="?page={page}"
/>
```

The component does **not** call `preventDefault`, otherwise the plain href usage
would be broken. `pageChange` still emits, so it can be combined with
`hrefPattern` to keep local state in sync.

For the Angular router, intercept the click on a wrapper element and read the
`href` from the anchor; `$event` carries the page number only.

### Single items

`DBPaginationItem` is the `<li>` that `DBPagination` renders once per page. Use it
directly only when you build the surrounding list yourself and want the item
appearance and semantics of the design system.

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

```html app.component.html
<nav class="db-pagination" aria-label="Pagination">
	<ul>
		<db-pagination-item [page]="1" text="1" label="Page 1 of 2" />
		<db-pagination-item
			[page]="2"
			text="2"
			label="Page 2 of 2"
			[active]="true"
		/>
	</ul>
</nav>
```

`text` is what the item renders. Without it the item renders its children instead, so
an item with neither stays empty. Leave `page` out only for a control that is not a
page, the way `DBPagination` wraps its previous and next buttons - the truncation is
no item at all, it is drawn as a pseudo element on the page that borders the gap.
Pass `href` to render an anchor instead of a button, and `layout` to place the item in
one of the two responsive layouts: `wide` items disappear once the list collapses,
`collapsed` items only appear there, and `always` items are part of both.

### Composition

Leave `totalCount` out and pass the items yourself. The pagination then projects your
content instead of computing the page list, which is what lets you bring a router
link. It still reports the page: it listens on the list and reads `page` back from the
item, so your child never gets a handler attached to it.

```html app.component.html
<db-pagination [currentPage]="2" (pageChange)="onPageChange($event)">
	<db-pagination-item [page]="1" label="Page 1 of 2">
		<a routerLink="/results/1" aria-label="Page 1 of 2">1</a>
	</db-pagination-item>
	<db-pagination-item [page]="2" label="Page 2 of 2" [active]="true">
		<a routerLink="/results/2" aria-label="Page 2 of 2">2</a>
	</db-pagination-item>
</db-pagination>
```

`totalCount` is what selects between the two modes, because Angular can only test
inputs and never projected content.

`page` is required on a composed item: it identifies the item rather than rendering
it, and the pagination reads it back to know which page was activated.

Three things move to you in this mode. The truncation and the responsive collapsing
are not applied, because the component cannot know which pages your children stand
for. `aria-current` falls back to the `<li>`, since a child that you provide cannot be
reached from inside the component - set it on your link as well if you want it where
assistive technology expects it. And the accessible name is yours: `label` is only
used for the control the item renders itself, so without an `aria-label` on your link
it is announced as the bare number. The last page is unknown as well, so the next
button stays enabled and an out of range request is yours to ignore.
