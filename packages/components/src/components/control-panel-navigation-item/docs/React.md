## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { Link } from "react-router-dom";
import {
	DBControlPanelNavigationItem,
	DBControlPanelNavigationItemGroup
} from "@db-ux/react-core-components";

const App = () => (
	<>
		{/* Simple link item */}
		<DBControlPanelNavigationItem>
			<Link to="mypath">NavigationItem</Link>
		</DBControlPanelNavigationItem>

		{/* With Sub-Navigation (use DBControlPanelNavigationItemGroup) */}
		<DBControlPanelNavigationItemGroup text="Navi-Group 1">
			<DBControlPanelNavigationItem>
				<Link to="mypath">Sub-Navi-Item 1</Link>
			</DBControlPanelNavigationItem>
			<DBControlPanelNavigationItem>
				<Link to="mypath">Sub-Navi-Item 2</Link>
			</DBControlPanelNavigationItem>
		</DBControlPanelNavigationItemGroup>
	</>
);

export default App;
```
