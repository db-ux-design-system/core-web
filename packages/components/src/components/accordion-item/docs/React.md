## React

For general installation and configuration look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBAccordionItem } from "@db-ui/react-components";

const App = () => <DBAccordionItem slotSummary={slotSummary} onToggle={() => {console.log("toggle accordion item")}}>{children}</DBAccordionItem>;

export default App;
```
