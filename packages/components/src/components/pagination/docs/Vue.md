## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

`DBPagination` is controlled. Update `currentPage` when `page-change` is emitted.

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { ref } from "vue";
import { DBPagination } from "@db-ux/v-core-components";

const currentPage = ref(1);
</script>

<template>
	<DBPagination
		:current-page="currentPage"
		:total-count="100"
		:page-size="10"
		@page-change="currentPage = $event"
	/>
</template>
```

### Page links

With `href-pattern` the pages render as anchors instead of buttons. `{page}` is
replaced with the page number, so the pagination becomes deep linkable, shareable
and usable without JavaScript.

The current page is the exception. It gets no `href`, because a link to the page one
is already on promises a change and delivers none, so it stays a focusable
`<button>` carrying `aria-current="page"` and shows neither a pointer cursor nor a
hover or pressed state.

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { DBPagination } from "@db-ux/v-core-components";
</script>

<template>
	<DBPagination
		:current-page="currentPage"
		:total-count="100"
		:page-size="10"
		href-pattern="?page={page}"
	/>
</template>
```

The component does **not** call `preventDefault`, otherwise the plain href usage
would be broken. `page-change` is still emitted, so it can be combined with
`href-pattern` to keep local state in sync.

For Vue Router, intercept the click on a wrapper element and read the `href` from
the anchor; the emitted payload is the page number only.

### Single items

`DBPaginationItem` is the `<li>` that `DBPagination` renders once per page and once
per truncation. Use it directly only when you build the surrounding list yourself
and want the item appearance and semantics of the design system.

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { DBPaginationItem } from "@db-ux/v-core-components";
</script>

<template>
	<nav class="db-pagination" aria-label="Pagination">
		<ul>
			<DBPaginationItem :page="1" label="Page 1 of 2" />
			<DBPaginationItem :page="2" :active="true" label="Page 2 of 2" />
		</ul>
	</nav>
</template>
```

Leave `page` out to render the truncation item. Pass `href` to render an anchor
instead of a button, and `layout` to place the item in one of the two responsive
layouts.

### Composition

Leave `totalCount` out and pass the items yourself. The pagination then renders the
default slot instead of computing the page list, which is what lets you bring a router
link. It still reports the page: it listens on the list and reads `page` back from the
item, so your child never gets a handler attached to it.

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { DBPagination, DBPaginationItem } from "@db-ux/v-core-components";
</script>

<template>
	<DBPagination :currentPage="2" @page-change="(page) => console.log(page)">
		<DBPaginationItem :page="1" label="Page 1 of 2">
			<RouterLink to="/results/1">1</RouterLink>
		</DBPaginationItem>
		<DBPaginationItem :page="2" label="Page 2 of 2" :active="true">
			<RouterLink to="/results/2">2</RouterLink>
		</DBPaginationItem>
	</DBPagination>
</template>
```

`page` is required on a composed item: it identifies the item rather than rendering
it, and the pagination reads it back to know which page was activated.

Two things move to you in this mode. The truncation and the responsive collapsing are
not applied, because the component cannot know which pages your children stand for.
And `aria-current` falls back to the `<li>`, since a child that you provide cannot be
reached from inside the component - set it on your link as well if you want it where
assistive technology expects it.
