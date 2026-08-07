## React

For general installation and configuration look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

#### With Slots

```tsx App.tsx
// App.tsx
import { DBAccordion, DBAccordionItem } from "@db-ux/react-core-components";

const App = () => (
	<DBAccordion>
		<DBAccordionItem headline="Title">Content</DBAccordionItem>
	</DBAccordion>
);
export default App;
```

#### With attributes

```tsx App.tsx
// App.tsx
import { DBAccordion, DBAccordionItem } from "@db-ux/react-core-components";

const App = () => (
	<DBAccordion>
		<DBAccordionItem headline="Title" content="Content" />
	</DBAccordion>
);
export default App;
```
