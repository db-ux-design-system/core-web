## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

#### Simple

```tsx App.tsx
// App.tsx
import {
	DBControlPanelDesktop,
	DBControlPanelBrand
} from "@db-ux/react-core-components";

const App = () => (
	<DBControlPanelDesktop
		control-panel-brand={
			<DBControlPanelBrand>ControlPanelDesktop</DBControlPanelBrand>
		}
	/>
);

export default App;
```

#### Full

```tsx App.tsx
// App.tsx
import { useState } from "react";
import {
	DBControlPanelDesktop,
	DBControlPanelBrand,
	DBLink
} from "@db-ux/react-core-components";

const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

const App = () => (
	<DBControlPanelDesktop
		drawerOpen={drawerOpen}
		onToggle={setDrawerOpen}
		control-panel-brand={
			<DBControlPanelBrand>My Awesome App</DBControlPanelBrand>
		}
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
	</DBControlPanelDesktop>
);

export default App;
```
