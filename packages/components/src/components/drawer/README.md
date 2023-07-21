# How to use DBDrawer

## General

If you use `width !== full` you are able to overwrite the `max-width` with: `var(--db-drawer-max-width, calc(100% - $db-spacing-fixed-xl));`.

## Angular

TODO

## React

```tsx
import { useState } from "react";
import { DBButton, DBDrawer } from "../../../../../output/react/src";

const MyComponent = () => {
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
```

## Vue

TODO
