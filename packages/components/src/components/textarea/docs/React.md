## React

For general installation and configuration look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { useState } from "react";
import { DBTextarea } from "@db-ui/react-components";

const App = () => {
	const [textarea, setTextarea] = useState("default textarea");
	return (
		<DBTextarea
			label="Textarea Controlled"
			value={textarea}
			onChange={(event) => {
				setTextarea(event.target.value);
			}}
		/>
	);
};

export default App;
```
