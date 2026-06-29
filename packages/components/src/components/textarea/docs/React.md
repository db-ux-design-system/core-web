## React

For general installation and configuration look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { useState } from "react";
import { DBTextarea } from "@db-ux/react-core-components";

const App = () => {
	const [textarea, setTextarea] = useState("default textarea");
	return (
		<DBTextarea
			label="Textarea Controlled"
			message="Message"
			value={textarea}
			onChange={(event) => {
				setTextarea(event.target.value);
			}}
		/>
	);
};

export default App;
```
