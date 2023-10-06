## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBPopover, DBButton } from "@db-ui/react-components";

const App = () => (
	<DBButton>
		Hover on me to open Popover
		<DBPopover>Popover</DBPopover>
	</DBButton>
);

export default App;
```
