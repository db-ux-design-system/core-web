## React

For general installation and configuration look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBAccordion, DBAccordionItem } from "@db-ux/react-core-components";

const App = () => (
	<DBAccordion>
		<DBAccordionItem headlinePlain="Item 1" content="Content 1" />
		<DBAccordionItem headlinePlain="Item 2" content="Content 2" />
		<DBAccordionItem headlinePlain="Item 3" content="Content 3" />
	</DBAccordion>
);
export default App;
```
