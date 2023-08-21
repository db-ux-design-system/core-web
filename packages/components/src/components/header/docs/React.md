## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

#### Simple

```tsx App.tsx
// App.tsx
import { DBHeader, DBBrand } from "@db-ui/react-components";

const App = () => <DBHeader slotBrand={<DBBrand>Header</DBBrand>} />;

export default App;
```

#### Full

```tsx App.tsx
// App.tsx
import { useState } from "react";
import { DBHeader, DBBrand, DBLink } from "@db-ui/react-components";

const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

const App = () => (
	<DBHeader
		drawerOpen={drawerOpen}
		onToggle={setDrawerOpen}
		slotBrand={<DBBrand>My Awesome App</DBBrand>}
		slotMetaNavigation={
			<>
				<DBLink href="#">Imprint</DBLink>
				<DBLink href="#">Help</DBLink>
			</>
		}
		slotCallToAction={
			<DBButton icon="search" variant="text" noText>
				Search
			</DBButton>
		}
		slotActionBar={
			<>
				<DBButton icon="account" variant="text" noText>
					Profile
				</DBButton>
				<DBButton icon="alert" variant="text" noText>
					Notification
				</DBButton>
				<DBButton icon="help" variant="text" noText>
					Help
				</DBButton>
			</>
		}
	>
		<DBMainNavigation>
			// https://github.com/db-ui/mono/blob/main/packages/components/src/components/main-navigation/docs/React.md
		</DBMainNavigation>
	</DBHeader>
);

export default App;
```
