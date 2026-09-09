## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import {
	DBControlPanelNavigationItemGroup,
	DBControlPanelNavigationItem
} from "@db-ux/react-core-components";

const App = () => (
	<DBControlPanelNavigationItemGroup
		text="Group Label"
		backButtonText="Back to Group"
	>
		<DBControlPanelNavigationItem>
			<a href="/page-1">Sub-Item 1</a>
		</DBControlPanelNavigationItem>
		<DBControlPanelNavigationItem>
			<a href="/page-2">Sub-Item 2</a>
		</DBControlPanelNavigationItem>
	</DBControlPanelNavigationItemGroup>
);

export default App;
```
