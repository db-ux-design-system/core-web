## Angular

For general installation and configuration take a look at the [ngx-core-components](https://www.npmjs.com/package/@db-ux/ngx-core-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import {
	DBTable,
	DBTableHead,
	DBTableBody,
	DBTableRow,
	DBTableHeaderCell,
	DBTableDataCell
} from '@db-ux/ngx-core-components';

@Component({
  // ...
	standalone: true,
  imports: [..., DBTable, DBTableHead, DBTableBody, DBTableRow, DBTableHeaderCell, DBTableDataCell],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-table captionPlain="Table Caption">
	<db-table-head>
		<db-table-row>
			<db-table-header-cell scope="col">A</db-table-header-cell>
			<db-table-header-cell scope="col">B</db-table-header-cell>
			<db-table-header-cell scope="col">C</db-table-header-cell>
		</db-table-row>
	</db-table-head>
	<db-table-body>
		<db-table-row>
			<db-table-header-cell scope="row">1</db-table-header-cell>
			<db-table-data-cell>2</db-table-data-cell>
			<db-table-data-cell>3</db-table-data-cell>
		</db-table-row>
		<db-table-row>
			<db-table-header-cell scope="row">4</db-table-header-cell>
			<db-table-data-cell>5</db-table-data-cell>
			<db-table-data-cell>6</db-table-data-cell>
		</db-table-row>
	</db-table-body>
</db-table>
```

### More than 20 columns

The table detects up to 20 columns automatically. For wider tables, set `--db-table-grid-template-columns` on an ancestor of `db-table`:

```html app.component.html
<div
	[style.--db-table-grid-template-columns]="'repeat(' + columnCount + ', 1fr)'"
>
	<db-table [data]="data"></db-table>
</div>
```
