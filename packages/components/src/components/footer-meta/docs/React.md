## React

`DBFooterMeta` provides the secondary visual area inside `DBFooter`. Its `copyright` text is optional.

```tsx App.tsx
import { DBFooter, DBFooterMeta } from "@db-ux/react-core-components";

export const App = () => (
	<DBFooter>
		<DBFooterMeta copyright="© Example Company">
			<nav aria-label="Legal navigation">...</nav>
		</DBFooterMeta>
	</DBFooter>
);
```
