## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBPopover, DBButton } from "@db-ui/react-components";

const App = () => (
	<DBButton describedbyid="popover-01" type="button">
		Hover on me to open Popover
		<DBPopover id="popover-01">Popover</DBPopover>
	</DBButton>
);

export default App;
```
