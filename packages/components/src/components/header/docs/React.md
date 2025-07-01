## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

#### Simple

```tsx App.tsx
// App.tsx
import { DBHeader, DBBrand } from "@db-ux/react-core-components";

const App = () => <DBHeader brand={<DBBrand>Header</DBBrand>} />;

export default App;
```

#### Full

```tsx App.tsx
// App.tsx
import { useState } from "react";
import { DBHeader, DBBrand, DBLink } from "@db-ux/react-core-components";

const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

const App = () => (
	<DBHeader
		drawerOpen={drawerOpen}
		onToggle={setDrawerOpen}
		brand={<DBBrand>My Awesome App</DBBrand>}
		metaNavigation={
			<>
				<DBLink href="#">Imprint</DBLink>
				<DBLink href="#">Help</DBLink>
			</>
		}
		primaryAction={
			<DBButton icon="magnifying_glass" variant="ghost" noText>
				Search
			</DBButton>
		}
		secondaryAction={
			<>
				<DBButton icon="x_placeholder" variant="ghost" noText>
					Profile
				</DBButton>
				<DBButton icon="alert" variant="ghost" noText>
					Notification
				</DBButton>
				<DBButton icon="help" variant="ghost" noText>
					Help
				</DBButton>
			</>
		}
	>
		<DBNavigation>
			//
			https://github.com/db-ux-design-system/core-web/blob/main/packages/components/src/components/navigation/docs/React.md
		</DBNavigation>
	</DBHeader>
);

export default App;
```
