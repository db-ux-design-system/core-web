## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script>
import {
	DBTable,
	DBTableHead,
	DBTableBody,
	DBTableRow,
	DBTableHeaderCell,
	DBTableDataCell
} from "@db-ux/v-core-components";
</script>

<template>
	<DBTable captionPlain="Table Caption">
		<DBTableHead>
			<DBTableRow>
				<DBTableHeaderCell scope="col">A</DBTableHeaderCell>
				<DBTableHeaderCell scope="col">B</DBTableHeaderCell>
				<DBTableHeaderCell scope="col">C</DBTableHeaderCell>
			</DBTableRow>
		</DBTableHead>
		<DBTableBody>
			<DBTableRow>
				<DBTableHeaderCell scope="row">1</DBTableHeaderCell>
				<DBTableDataCell>2</DBTableDataCell>
				<DBTableDataCell>3</DBTableDataCell>
			</DBTableRow>
			<DBTableRow>
				<DBTableHeaderCell scope="row">4</DBTableHeaderCell>
				<DBTableDataCell>5</DBTableDataCell>
				<DBTableDataCell>6</DBTableDataCell>
			</DBTableRow>
		</DBTableBody>
	</DBTable>
</template>
```

### More than 20 columns

The table detects up to 20 columns automatically. For wider tables, set `--db-table-grid-template-columns` on an ancestor of `DBTable`:

```vue App.vue
<template>
	<div
		:style="{
			'--db-table-grid-template-columns': `repeat(${columnCount}, 1fr)`
		}"
	>
		<DBTable :data="data" />
	</div>
</template>
```
