## React

For general installation and configuration look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBHeader, DBBrand } from "@db-ui/react-components";

const App = () => <DBHeader slotBrand={<DBBrand>Header</DBBrand>} />;

export default App;
```
