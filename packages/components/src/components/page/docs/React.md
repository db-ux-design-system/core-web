## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBPage, DBHeader } from "@db-ui/react-components";

const App = () => (
	<DBPage slotHeader={<DBHeader>...</DBHeader>}>
		<main class="db-main">Main Page</main>
	</DBPage>
);

export default App;
```
