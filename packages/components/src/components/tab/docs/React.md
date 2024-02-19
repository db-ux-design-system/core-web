## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBTab, DBTabList, DBTabs, DBTabPanel } from "@db-ui/react-components";

const App = () => (
	<DBTabs>
		<DBTabList>
			<DBTab>Tab 1</DBTab>
			<DBTab>Tab 2</DBTab>
			<DBTab>Tab 3</DBTab>
		</DBTabList>
		<DBTabPanel>Tab Panel 1</DBTabPanel>
		<DBTabPanel>Tab Panel 2</DBTabPanel>
		<DBTabPanel>Tab Panel 3</DBTabPanel>
	</DBTabs>
);

export default App;
```
