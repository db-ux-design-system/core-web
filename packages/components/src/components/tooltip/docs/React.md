## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBTooltip, DBButton } from "@db-ui/react-components";

const App = () => (
	<DBButton describedbyid="tooltip-01">
		Hover on me to open Tooltip
		<DBTooltip id="tooltip-01">Tooltip</DBTooltip>
	</DBButton>
);

export default App;
```
