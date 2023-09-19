---
to: "<%= readme ? `src/components/${name}/docs/React.md` : null %>"
---
## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DB<%= h.changeCase.pascal(name) %> } from "@db-ui/react-components";

const App = () => (
	<DB<%= h.changeCase.pascal(name) %>>
		<%= h.changeCase.pascal(name) %>
	</DB<%= h.changeCase.pascal(name) %>>
);

export default App;
```

