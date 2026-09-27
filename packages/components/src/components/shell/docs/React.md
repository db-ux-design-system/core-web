## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import {
	DBShell,
	DBShellContent,
	DBControlPanelDesktop,
	DBControlPanelBrand
} from "@db-ux/react-core-components";

const App = () => (
	<DBShell>
		<DBControlPanelDesktop
			brand={<DBControlPanelBrand>My App</DBControlPanelBrand>}
		>
			{/* Navigation goes here */}
		</DBControlPanelDesktop>
		<DBShellContent>Main Content</DBShellContent>
	</DBShell>
);

export default App;
```
