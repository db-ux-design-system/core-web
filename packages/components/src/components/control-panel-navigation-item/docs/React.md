## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

We try to set `areaPopup` (has/hasn't sub-navigation) inside the component, but this doesn't work in all frameworks. If you encounter some problems you have the set `areaPopup` with `true/false` for sub-navigation or link

```tsx App.tsx
// App.tsx
import { Link } from "react-router-dom";
import { DBControlPanelNavigationItem } from "@db-ux/react-core-components";

const App = () => (
	<>
		{/* Only link */}
		<DBControlPanelNavigationItem>
			<Link to="mypath">NavigationItem</Link>
		</DBControlPanelNavigationItem>

		{/* With Sub-Navigation */}
		<DBControlPanelNavigationItem
			subNavigation={
				<>
					<DBControlPanelNavigationItem>
						<Link to="mypath">Sub-Navi-Item 1</Link>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem>
						<Link to="mypath">Sub-Navi-Item 2</Link>
					</DBControlPanelNavigationItem>
				</>
			}
		>
			Navi-Item 1
		</DBControlPanelNavigationItem>
	</>
);

export default App;
```
