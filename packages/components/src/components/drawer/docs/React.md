## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### General

If you use `width !== full` you are able to overwrite the `max-width` with `--db-drawer-max-width:` CSS variable.

### Use component

```tsx App.tsx
// App.tsx
import { useState } from "react";
import { DBButton, DBDrawer } from "@db-ui/react-components";

const App = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<div>
			<DBDrawer
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				My Drawer content
			</DBDrawer>
			<DBButton
				onClick={() => {
					setOpen(true);
				}}
			>
				Open Me
			</DBButton>
		</div>
	);
};

export default App;
```
