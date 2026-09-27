## React

`DBFooterContent` provides the primary visual area and is intended for use inside `DBFooter`. Lists lay out as a single line, which fits up to seven links. From eight links onward, group them by topic and give each group a unique heading naming its content; such a group lays its list out vertically.

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
