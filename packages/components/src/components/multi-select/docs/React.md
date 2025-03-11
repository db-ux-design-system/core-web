## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBMultiSelect } from "@db-ui/react-components";

const App = () => (
	<DBMultiSelect
		label="Label"
		placeholder="Placeholder"
		options={[{ value: "Option 1" }, { value: "Option 2" }]}
	/>
);

export default App;
```
