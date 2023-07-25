## React

For general installation and configuration look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { Link } from "react-router-dom";
import { DBNavigationItem } from "@db-ui/react-components";

const App = () => (
	<Link to="mypath">
		<DBNavigationItem>NavigationItem</DBNavigationItem>
	</Link>
);

export default App;
```
