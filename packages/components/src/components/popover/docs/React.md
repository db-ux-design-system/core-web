<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBPopover, DBButton } from "@db-ux/react-core-components";

const App = () => (
	<DBPopover trigger={<DBButton>Hover on me to open Popover</DBButton>}>
		Use any html code here like e.g. a <code>button</code>:
		<button type="button">Test</button>
	</DBPopover>
);

export default App;
```
