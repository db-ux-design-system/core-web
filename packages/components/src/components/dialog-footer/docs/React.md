## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBDialogFooter } from "@db-ux/react-core-components";

const App = () => {
	return (
		<DBDialogFooter>
			<DBButton
				variant="ghost">
				Cancel
			</DBButton>
			<DBButton
				variant="brand">
				Confirm
			</DBButton>
		</DBDialogFooter>;
	);
};

export default App;
```
