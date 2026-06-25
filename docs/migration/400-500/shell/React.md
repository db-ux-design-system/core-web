# Migration DBPage, DBHeader, DBNavigation

## Original Example

```tsx
import { useState } from "react";
import {
	DBPage,
	DBHeader,
	DBBrand,
	DBLink,
	DBNavigation,
	DBNavigationItem
} from "@db-ux/react-core-components";

const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

const MetaNavigation = () => (
	<>
		<DBLink href="#">Imprint</DBLink>
		<DBLink href="#">Help</DBLink>
	</>
);

const PrimaryActions = () => (
	<DBButton icon="magnifying_glass" variant="ghost" noText>
		Search
	</DBButton>
);

const SecondaryActions = () => (
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
);

const Navigation = () => (
	<DBNavigation>
		<DBNavigationItem
			slotSubNavigation={
				<>
					<DBNavigationItem
						subNavigation={
							<>
								<DBNavigationItem>
									<a href="#" aria-current="page">
										Sub-Sub-Navi-Item 1
									</a>
								</DBNavigationItem>
								<DBNavigationItem>
									<a href="#">Sub-Sub-Navi-Item 2</a>
								</DBNavigationItem>
							</>
						}
					>
						Sub-Navi-Item 1
					</DBNavigationItem>
					<DBNavigationItem>
						<a href="#">Sub-Navi-Item 2</a>
					</DBNavigationItem>
				</>
			}
		>
			Navi-Item 1
		</DBNavigationItem>
		<DBNavigationItem icon="x_placeholder">
			<a href="#">Navi-Item 2</a>
		</DBNavigationItem>
		<DBNavigationItem disabled>
			<a href="#">Navi-Item 3</a>
		</DBNavigationItem>
	</DBNavigation>
);

const App = () => (
	<DBPage
		fadeIn
		documentOverflow="hidden"
		variant="fixed"
		header={
			<DBHeader
				drawerOpen={drawerOpen}
				onToggle={setDrawerOpen}
				brand={<DBBrand>My Awesome App</DBBrand>}
				metaNavigation={<MetaNavigation />}
				primaryAction={<PrimaryActions />}
				secondaryAction={<SecondaryActions />}
			>
				<Navigation />
			</DBHeader>
		}
		footer={<div>Footer</div>}
	>
		Main Page
	</DBPage>
);

export default App;
```

## Refactored Example

```tsx
import {
	DBShell, // previously: DBPage
	DBControlPanelDesktop, // previously: DBHeader
	DBControlPanelMobile, // previously: DBHeader
	DBControlPanelBrand, // previously: DBBrand
	DBControlPanelMeta, // new
	DBControlPanelPrimaryActions, // new
	DBControlPanelSecondaryActions, // new
	DBLink,
	DBControlPanelNavigation,
	DBControlPanelNavigationItem,
	DBControlPanelNavigationItemGroup // new
} from "@db-ux/react-core-components";

// No need for own drawer state
/*const [drawerOpen, setDrawerOpen] = useState<boolean>(false);*/

const MetaNavigation = () => (
	<DBControlPanelMeta>
		{/* added DBControlPanelMeta */}
		<DBLink href="#">Imprint</DBLink>
		<DBLink href="#">Help</DBLink>
	</DBControlPanelMeta>
);

const PrimaryActions = () => (
	<DBControlPanelPrimaryActions>
		{/* added DBControlPanelPrimaryActions */}
		<DBButton icon="magnifying_glass" variant="ghost" noText>
			Search
		</DBButton>
	</DBControlPanelPrimaryActions>
);

const SecondaryActions = () => (
	<DBControlPanelSecondaryActions>
		{/* added DBControlPanelSecondaryActions */}
		<DBButton icon="x_placeholder" variant="ghost" noText>
			Profile
		</DBButton>
		<DBButton icon="alert" variant="ghost" noText>
			Notification
		</DBButton>
		<DBButton icon="help" variant="ghost" noText>
			Help
		</DBButton>
	</DBControlPanelSecondaryActions>
);

const Navigation = () => (
	<DBControlPanelNavigation>
		<DBControlPanelNavigationItemGroup text="Navi-Item 1">
			{/* replaced DBControlPanelNavigationItem with `subNavigation` */}
			<DBControlPanelNavigationItemGroup text="Sub-Navi-Item 1">
				{/* replaced DBControlPanelNavigationItem with `subNavigation` */}
				<DBControlPanelNavigationItem>
					<a href="#" aria-current="page">
						Sub-Sub-Navi-Item 1
					</a>
				</DBControlPanelNavigationItem>
				<DBControlPanelNavigationItem>
					<a href="#">Sub-Sub-Navi-Item 2</a>
				</DBControlPanelNavigationItem>
			</DBControlPanelNavigationItemGroup>
			<DBControlPanelNavigationItem>
				<a href="#">Sub-Navi-Item 2</a>
			</DBControlPanelNavigationItem>
		</DBControlPanelNavigationItemGroup>
		<DBControlPanelNavigationItem icon="x_placeholder">
			<a href="#">Navi-Item 2</a>
		</DBControlPanelNavigationItem>
		<DBControlPanelNavigationItem disabled>
			<a href="#">Navi-Item 3</a>
		</DBControlPanelNavigationItem>
	</DBControlPanelNavigation>
);

const App = () => (
	<DBShell
		fadeIn
		controlPanelDesktop={
			<DBControlPanelDesktop
				brand={<DBBrand>My Awesome App</DBBrand>}
				metaNavigation={<MetaNavigation />}
				primaryActions={<PrimaryActions />}
				secondaryActions={<SecondaryActions />}
			>
				<Navigation />
			</DBControlPanelDesktop>
		}
		controlPanelMobile={
			<DBControlPanelMobile
				drawerHeaderText="My Awesome App"
				brand={<DBBrand>My Awesome App</DBBrand>}
				metaNavigation={<MetaNavigation />}
				primaryActions={<PrimaryActions />}
				secondaryActions={<SecondaryActions />}
			>
				<Navigation />
			</DBControlPanelMobile>
		}
	>
		Main Page
	</DBShell>
);

export default App;
```
