## React

For general installation and configuration look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBAccordion } from "@db-ui/react-components";

const App = () => (
	<DBAccordion>
		<DBAccordionItem title="Item 1" content="Content 1" />
		<DBAccordionItem title="Item 2" content="Content 2" />
		<DBAccordionItem title="Item 3" content="Content 3" />
	</DBAccordion>
);
export default App;
```
