## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBTooltip, DBButton } from "@db-ux/react-core-components";

const App = () => (
	<DBButton aria-describedby="tooltip-01">
		Hover on me to open Tooltip
		<DBTooltip id="tooltip-01">Tooltip</DBTooltip>
	</DBButton>
);

export default App;
```
