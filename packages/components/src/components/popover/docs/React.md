## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBPopover, DBButton } from "@db-ui/react-components";

const App = () => (
	<DBPopover trigger={<DBButton>Hover on me to open Popover</DBButton>}>
		Use any html code here like e.g. a <code>button</code>:
		<button type="button">Test</button>
	</DBPopover>
);

export default App;
```
