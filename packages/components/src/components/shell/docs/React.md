## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBShell, DBHeader } from "@db-ux/react-core-components";

const App = () => (
	<DBShell slotHeader={<DBHeader>...</DBHeader>}>
		<main class="db-main">Main Shell</main>
	</DBShell>
);

export default App;
```
