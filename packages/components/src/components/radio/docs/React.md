## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { useState } from "react";
import { DBRadio } from "@db-ux/react-core-components";

const App = () => (
	<ul>
		{["X", "Y", "Z"].map((radioName) => (
			<li key={radioName}>
				<DBRadio
					name="radio-group"
					value={radioName}
					onChange={() => {
						setRadio(radioName);
					}}
				>
					Radio {radioName}
				</DBRadio>
			</li>
		))}
	</ul>
);

export default App;
```
