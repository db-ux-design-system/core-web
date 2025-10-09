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

#### Adding Formatted Infotext

The message prop of the DBCheckbox does not accept React Nodes or HTML for security reasons (to prevent Cross-Site Scripting (XSS)). To add a richly formatted description, use the DBInfotext component as a sibling element. It is crucial to link both components using the [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-HTML-attribute to ensure accessibility.

```tsx App.tsx
import { DBCheckbox, DBInfotext } from "@db-ux/react-core-components";

const App = () => {
	return (
		<div>
			<DBCheckbox
				// The aria-describedby attribute links the checkbox to its description.
				aria-describedby="checkbox-message"
			>
				Example Checkbox
			</DBCheckbox>

			{/* The DBInfotext component holds the formatted message. */}
			<DBInfotext id="checkbox-message">
				Example <strong>Text</strong>
			</DBInfotext>
		</div>
	);
};

export default App;
```
