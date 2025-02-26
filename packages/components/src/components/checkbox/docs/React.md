<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { useState } from "react";
import { DBCheckbox } from "@db-ux/react-core-components";

const App = () => {
	const [checkbox, setCheckbox] = useState("");

	return (
		<DBCheckbox
			name="checkbox"
			value="Checkbox checked"
			onChange={(event) => {
				setCheckbox(event.target.checked);
			}}
		>
			Checkbox
		</DBCheckbox>
	);
};

export default App;
```
