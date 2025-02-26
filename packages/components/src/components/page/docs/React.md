<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBPage, DBHeader } from "@db-ux/react-core-components";

const App = () => (
	<DBPage slotHeader={<DBHeader>...</DBHeader>}>
		<main class="db-main">Main Page</main>
	</DBPage>
);

export default App;
```
