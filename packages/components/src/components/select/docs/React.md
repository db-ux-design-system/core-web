## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBSelect } from "@db-ux/react-core-components";

const App = () => (
	<DBSelect>
		<option value="test1">Test1</option>
		<option value="test2">Test2</option>
	</DBSelect>
);

export default App;
```
