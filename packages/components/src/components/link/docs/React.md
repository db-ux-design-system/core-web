<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBLink } from "@db-ui/react-components";

const App = () => (
	<DBLink href="#" variant="brand">
		Link
	</DBLink>
);

export default App;
```
