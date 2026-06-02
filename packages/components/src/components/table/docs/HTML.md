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
