## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBSelect } from "@db-ui/react-components";

const App = () => (
	<DBSelect>
		<option value="test1">Test1</option>
		<option value="test2">Test2</option>
	</DBSelect>
);

export default App;
```
