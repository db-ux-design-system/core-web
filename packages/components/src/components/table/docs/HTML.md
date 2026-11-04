## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

```html index.html
<!-- index.html -->
...
<body>
	<div class="db-table">
		<table>
			<caption>
				Table Caption
			</caption>
			<thead>
				<tr class="db-table-row">
					<th class="db-table-header-cell" scope="col">A</th>
					<th class="db-table-header-cell" scope="col">B</th>
					<th class="db-table-header-cell" scope="col">C</th>
				</tr>
			</thead>
			<tbody>
				<tr class="db-table-row">
					<th class="db-table-header-cell" scope="row">1</th>
					<td class="db-table-data-cell">2</td>
					<td class="db-table-data-cell">3</td>
				</tr>
				<tr class="db-table-row">
					<th class="db-table-header-cell" scope="row">4</th>
					<td class="db-table-data-cell">5</td>
					<td class="db-table-data-cell">6</td>
				</tr>
			</tbody>
			<tfoot>
				<tr class="db-table-row">
					<th class="db-table-header-cell" scope="row">Footer 1</th>
					<td class="db-table-data-cell" colspan="2">Footer 2</td>
				</tr>
			</tfoot>
		</table>
	</div>
</body>
```

### More than 20 columns

The table detects up to 20 columns automatically. For wider tables, define the grid tracks yourself with the `--db-table-grid-template-columns` custom property on `.db-table` or one of its ancestors:

```html index.html
<!-- 25 equally wide columns -->
<div class="db-table" style="--db-table-grid-template-columns: repeat(25, 1fr)">
	<table>
		...
	</table>
</div>
```

The value accepts any [`grid-template-columns`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) syntax, so you can also mix fixed and flexible columns, e.g. `200px repeat(24, 1fr)`. If the column count changes at runtime, update the custom property with JavaScript:

```js
const table = document.querySelector(".db-table");
table.style.setProperty(
	"--db-table-grid-template-columns",
	`repeat(${columnCount}, 1fr)`
);
```
