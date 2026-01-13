## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBShell, DBControlPanelDesktop } from "@db-ux/react-core-components";

const App = () => (
	<DBShell
		slotControlPanelDesktop={
			<DBControlPanelDesktop>...</DBControlPanelDesktop>
		}
	>
		<main class="db-main">Main Shell</main>
	</DBShell>
);

export default App;
```
