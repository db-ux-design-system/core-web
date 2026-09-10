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

The copyright and the secondary content sit side by side from a viewport width of 768 px upwards, with the copyright aligned to the top of the row. Below that the secondary content moves under the copyright and takes the full width. Set `data-force-mobile="true"` on the footer to get the stacked arrangement regardless, which is what a footer placed in a region narrower than the viewport needs.
