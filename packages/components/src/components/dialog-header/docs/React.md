## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBDialogHeader } from "@db-ux/react-core-components";

const App = () => {
	return (
		<DBDialogHeader closebuttontext="Close" text="With text prop"></DBDialogHeader>
	)
};

export default App;
```
