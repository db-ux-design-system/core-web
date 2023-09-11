## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { useState } from "react";
import { DBCheckbox } from "@db-ui/react-components";

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
