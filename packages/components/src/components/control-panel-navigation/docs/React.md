## React

For general installation and configuration look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import {
	DBControlPanelNavigation,
	DBControlPanelNavigationItem,
	DBControlPanelNavigationItemGroup
} from "@db-ux/react-core-components";

const App = () => (
	<DBControlPanelNavigation>
		<DBControlPanelNavigationItemGroup text="Navi-Group 1">
			<DBControlPanelNavigationItemGroup text="Sub-Group 1">
				<DBControlPanelNavigationItem>
					<a href="#" aria-current="page">
						Sub-Sub-Navi-Item 1
					</a>
				</DBControlPanelNavigationItem>
				<DBControlPanelNavigationItem>
					<a href="#">Sub-Sub-Navi-Item 2</a>
				</DBControlPanelNavigationItem>
			</DBControlPanelNavigationItemGroup>
			<DBControlPanelNavigationItem>
				<a href="#">Sub-Navi-Item 2</a>
			</DBControlPanelNavigationItem>
		</DBControlPanelNavigationItemGroup>
		<DBControlPanelNavigationItem icon="x_placeholder">
			<a href="#">Navi-Item 2</a>
		</DBControlPanelNavigationItem>
		<DBControlPanelNavigationItem disabled>
			<a href="#">Navi-Item 3</a>
		</DBControlPanelNavigationItem>
	</DBControlPanelNavigation>
);

export default App;
```

### Active handling

Usually, a `NavigationItem` is implicitly set to active by setting the attribute `aria-current="page"` to the anchor it contains.

For other purposes, `NavigationItems` themselves can also be set to active with their prop `active`. However, this does not guarantee correct a11y.
