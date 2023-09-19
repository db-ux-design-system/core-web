## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBTag } from "@db-ui/react-components";

const App = () => <>
	<DBTag><DBButton>Tag as Button</DBButton></DBTag>
	<DBTag><DBLink>Tag as Link</DBLink></DBTag>
	<DBTag><DBCheckbox>Tag as Checkbox</DBCheckbox></DBTag>
	<DBTag><DBRadio>Tag as Radio</DBRadio></DBTag>
	<DBTag>Static Tag</DBTag>
	</>;

export default App;
```
