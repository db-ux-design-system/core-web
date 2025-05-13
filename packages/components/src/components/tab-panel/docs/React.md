## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import {
	DBTabItem,
	DBTabList,
	DBTabs,
	DBTabPanel
} from "@db-ux/react-core-components";

const App = () => (
	<DBTabs>
		<DBTabList>
			<DBTabItem>Tab 1</DBTabItem>
			<DBTabItem>Tab 2</DBTabItem>
			<DBTabItem>Tab 3</DBTabItem>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>
);

export default App;
```
