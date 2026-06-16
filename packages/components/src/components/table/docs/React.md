## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import {
	DBTable,
	DBTableHead,
	DBTableBody,
	DBTableRow,
	DBTableHeaderCell,
	DBTableDataCell
} from "@db-ux/react-core-components";

const App = () => (
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
);

export default App;
```
