<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## React

For general installation and configuration take a look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

#### Simple

```tsx App.tsx
// App.tsx
import { DBHeader, DBBrand } from "@db-ui/react-components";

const App = () => <DBHeader brand={<DBBrand>Header</DBBrand>} />;

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
			https://github.com/db-ui/mono/blob/main/packages/components/src/components/navigation/docs/React.md
		</DBNavigation>
	</DBHeader>
);

export default App;
```
