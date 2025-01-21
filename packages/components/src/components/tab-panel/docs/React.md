<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import {
	DBTabItem,
	DBTabList,
	DBTabs,
	DBTabPanel
} from "@db-ui/react-components";

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
