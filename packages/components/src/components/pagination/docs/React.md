## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

`DBPagination` is controlled. Update `currentPage` when `onPageChange` is called.

```tsx App.tsx
import { useState } from "react";
import { DBPagination } from "@db-ux/react-core-components";

const App = () => {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<DBPagination
			currentPage={currentPage}
			totalCount={100}
			pageSize={10}
			onPageChange={setCurrentPage}
		/>
	);
};

export default App;
```
