## React

`DBFooterMeta` provides the secondary visual area inside `DBFooter`. It is semantically neutral and does not create a navigation landmark. Wrap navigational content in a labelled `nav`, or provide other suitable secondary content such as contact information. Its `copyright` text is optional.

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
