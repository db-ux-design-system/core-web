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

### Per-page options

Pass an `items` array, one entry per page, to drive the pagination from data instead
of a bare count. An entry can disable its page or give it its own `label`, neither of
which the count API can express. The visible text stays the page number.

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { DBPagination } from "@db-ux/v-core-components";

const items = [{}, { disabled: true }, { label: "Last page" }];
</script>

<template>
	<DBPagination
		:current-page="1"
		:items="items"
		@page-change="(page) => console.log(page)"
	/>
</template>
```

### Composition

Leave `totalCount` out and pass the items yourself. The pagination then renders the
default slot instead of computing the page list, which is what lets you bring a router
link. You set nothing on the item: the pagination derives each page from its position,
writes `data-page` onto every `<li>` and marks the current page with `aria-current`,
all through the DOM. It also reports the page by reading `data-page` back, so your
child never gets a handler attached to it.

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { DBPagination, DBPaginationItem } from "@db-ux/v-core-components";
</script>

<template>
	<DBPagination :currentPage="2" @page-change="(page) => console.log(page)">
		<DBPaginationItem>
			<RouterLink to="/results/1" aria-label="Page 1 of 2">1</RouterLink>
		</DBPaginationItem>
		<DBPaginationItem>
			<RouterLink to="/results/2" aria-label="Page 2 of 2">2</RouterLink>
		</DBPaginationItem>
	</DBPagination>
</template>
```

The page identity comes from the item position, so the first item is page 1, the
second page 2, and `currentPage` marks which is current. Previous and next look that
identity up: as buttons they do not report a page themselves, they click the item of
the neighbouring page. So your `<RouterLink>` runs for the arrows too, and the router
sees the same navigation it sees for a direct click. Where that neighbour is not in
your list, the arrow falls back to reporting the page through `onPageChange`.

Two things move to you in this mode. The truncation and the responsive collapsing are
not applied, because the component cannot know which pages your children stand for.
And the accessible name is yours: the pagination places `aria-current` on your link,
but the visible number alone does not name the page, so add an `aria-label` such as
`Page 2 of 2`. The last page is unknown as well, so the next button stays enabled and
an out of range request is yours to ignore.
