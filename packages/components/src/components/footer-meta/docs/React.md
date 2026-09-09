## React

`DBFooterMeta` provides the secondary visual area inside `DBFooter`. It is semantically neutral and does not create a navigation landmark. Wrap navigational content in a labelled `nav`, or provide other suitable secondary content such as contact information. Its `copyright` text is optional.

```tsx App.tsx
import { DBFooter, DBFooterMeta } from "@db-ux/react-core-components";

export const App = () => (
	<DBFooter>
		<DBFooterMeta copyright="Example Company">
			<nav aria-label="Legal navigation">...</nav>
		</DBFooterMeta>
	</DBFooter>
);
```

The copyright and the secondary content sit side by side while there is room for both, and the copyright stays aligned to the top of that row. Once the secondary content no longer fits beside it, it moves below the copyright and takes the full width. The switch follows the width available to the footer rather than the viewport, so a footer inside a narrower region, such as a shell with an open side panel, stacks even while a wide window is open.
