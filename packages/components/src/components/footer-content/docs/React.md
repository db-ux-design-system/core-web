## React

`DBFooterContent` provides the primary visual area and is intended for use inside `DBFooter`.

```tsx App.tsx
import { DBFooter, DBFooterContent } from "@db-ux/react-core-components";

export const App = () => (
	<DBFooter>
		<DBFooterContent>
			<nav aria-label="Footer navigation">...</nav>
		</DBFooterContent>
	</DBFooter>
);
```
