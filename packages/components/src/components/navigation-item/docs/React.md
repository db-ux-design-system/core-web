## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

We try to set `areaPopup` (has/hasn't sub-navigation) inside the component, but this doesn't work in all frameworks. If you encounter some problems you have the set `areaPopup` with `true/false` for sub-navigation or link

```tsx App.tsx
// App.tsx
import { Link } from "react-router-dom";
import { DBNavigationItem } from "@db-ui/react-components";

const App = () => (
	<>
		{/* Only link */}
		<DBNavigationItem>
			<Link to="mypath">NavigationItem</Link>
		</DBNavigationItem>

		{/* With Sub-Navigation */}
		<DBNavigationItem
			slotSubNavigation={
				<>
					<DBNavigationItem>
						<Link to="mypath">Sub-Navi-Item 1</Link>
					</DBNavigationItem>
					<DBNavigationItem>
						<Link to="mypath">Sub-Navi-Item 2</Link>
					</DBNavigationItem>
				</>
			}
		>
			Navi-Item 1
		</DBNavigationItem>
	</>
);

export default App;
```
