---
force: true
to: src/components/<%= name %>/docs/React.md
---
## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DB<%= h.changeCase.pascal(name) %> } from "@db-ux/react-core-components";

const App = () => (
	<DB<%= h.changeCase.pascal(name) %>>
		<%= h.changeCase.pascal(name) %>
	</DB<%= h.changeCase.pascal(name) %>>
);

export default App;
```

