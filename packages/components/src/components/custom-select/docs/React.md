## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBCustomSelect } from "@db-ui/react-components";

const App = () => (
	<DBCustomSelect
		label="Label"
		placeholder="Placeholder"
		options={[
			{ value: "Option 1" },
			{ value: "Option 2" },
			{ value: "Option 3" },
			{ value: "Option 4" },
			{ value: "Option 5" }
		]}
	/>
);

export default App;
```
