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
		docuementOverflow="hidden"
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
	DBControlPanelMetaNavigation, // new
	DBControlPanelPrimaryActions, // new
	DBControlPanelSecondaryActions, // new
	DBLink,
	DBNavigation,
	DBNavigationItem,
	DBNavigationItemGroup // new
} from "@db-ux/react-core-components";

// No need for own drawer state
/*const [drawerOpen, setDrawerOpen] = useState<boolean>(false);*/

const MetaNavigation = () => (
	<DBControlPanelMetaNavigation>
		{/* added DBControlPanelMetaNavigation */}
		<DBLink href="#">Imprint</DBLink>
		<DBLink href="#">Help</DBLink>
	</DBControlPanelMetaNavigation>
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
	<DBNavigation>
		<DBNavigationItemGroup text="Navi-Item 1">
			{/* replaced DBNavigationItem with `subNavigation` */}
			<DBNavigationItemGroup text="Sub-Navi-Item 1">
				{/* replaced DBNavigationItem with `subNavigation` */}
				<DBNavigationItem>
					<a href="#" aria-current="page">
						Sub-Sub-Navi-Item 1
					</a>
				</DBNavigationItem>
				<DBNavigationItem>
					<a href="#">Sub-Sub-Navi-Item 2</a>
				</DBNavigationItem>
			</DBNavigationItemGroup>
			<DBNavigationItem>
				<a href="#">Sub-Navi-Item 2</a>
			</DBNavigationItem>
		</DBNavigationItemGroup>
		<DBNavigationItem icon="x_placeholder">
			<a href="#">Navi-Item 2</a>
		</DBNavigationItem>
		<DBNavigationItem disabled>
			<a href="#">Navi-Item 3</a>
		</DBNavigationItem>
	</DBNavigation>
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
				drawerHeadlinePlain="My Awesome App"
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
