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
