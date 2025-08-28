## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { useState } from "react";
import { DBRadio } from "@db-ux/react-core-components";

const App = () => {
	const [radio, setRadio] = useState("");

	return (
		<fieldset>
			<legend>Radio group example</legend>
			{["X", "Y", "Z"].map((radioName) => (
				<DBRadio
					key={radioName}
					name="radio-group"
					value={radioName}
					checked={radio === radioName}
					onChange={() => {
						setRadio(radioName);
					}}
				>
					Radio {radioName}
				</DBRadio>
			))}
		</fieldset>
	);
};

export default App;
```
