<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBStack } from "@db-ux/react-core-components";

const App = () => (
	<DBStack>
		<span>Test 1</span>
		<span>Test 2</span>
		<span>Test 3</span>
	</DBStack>
);

export default App;
```
