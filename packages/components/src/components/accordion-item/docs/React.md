## React

For general installation and configuration look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

#### With Slots

```tsx App.tsx
// App.tsx
import { DBAccordionItem } from "@db-ui/react-components";

const App = () => <DBAccordionItem headline="Title">Content</DBAccordionItem>;
export default App;
```

#### With attributes

```tsx App.tsx
// App.tsx
import { DBAccordionItem } from "@db-ui/react-components";

const App = () => <DBAccordionItem headline="Title" content="Content" />;
export default App;
```
