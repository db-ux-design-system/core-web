## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
<<<<<<< HEAD:packages/components/src/components/switch/docs/React.md
import { DBSwitch } from "@db-ui/react-components";

const App = () => <DBSwitch>Switch</DBSwitch>;
=======
import { DBNotification } from "@db-ui/react-components";

const App = () => (
	<DBNotification headline="Headline">Notification</DBNotification>
);
>>>>>>> b171ef6b5fc68b075d15b6ef4b8c7b24c67ae1aa:packages/components/src/components/notification/docs/React.md

export default App;
```
