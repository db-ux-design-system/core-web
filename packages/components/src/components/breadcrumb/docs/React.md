## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBBreadcrumb } from "@db-ux/react-core-components";

const App = () => (
	<DBBreadcrumb>
		<li>
			<a href="#">Home</a>
		</li>
		<li>
			<a href="#">Category</a>
		</li>
		<li aria-current="page">Current Page</li>
	</DBBreadcrumb>
);

export default App;
```
