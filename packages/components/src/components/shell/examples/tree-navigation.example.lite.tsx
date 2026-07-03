import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelDesktop from '../../control-panel-desktop/control-panel-desktop.lite';
import DBControlPanelMeta from '../../control-panel-meta/control-panel-meta.lite';
import DBControlPanelMobile from '../../control-panel-mobile/control-panel-mobile.lite';
import DBControlPanelNavigationItemGroup from '../../control-panel-navigation-item-group/control-panel-navigation-item-group.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBControlPanelPrimaryActions from '../../control-panel-primary-actions/control-panel-primary-actions.lite';
import DBControlPanelSecondaryActions from '../../control-panel-secondary-actions/control-panel-secondary-actions.lite';
import DBLink from '../../link/link.lite';
import DBShellContent from '../../shell-content/shell-content.lite';
import DBShell from '../shell.lite';
import { StorybookShellArgTypes } from './_shell.arg.types';

useMetadata({
	storybookTitle: 'Tree Navigation',
	storybookNames: ['Single', 'Multiple'],
	storybookArgTypes: StorybookShellArgTypes
});

export default function ShellTreeNavigation() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-tree-nav-single"
					controlPanelDesktopPosition="left">
					<DBControlPanelDesktop
						brand={<DBControlPanelBrand data-logo="db-systel" />}
						metaNavigation={
							<DBControlPanelMeta>
								<DBLink href="#">Imprint</DBLink>
								<DBLink href="#">Help</DBLink>
							</DBControlPanelMeta>
						}
						primaryActions={
							<DBControlPanelPrimaryActions>
								<DBButton
									icon="magnifying_glass"
									variant="ghost"
									noText>
									Search
								</DBButton>
							</DBControlPanelPrimaryActions>
						}
						secondaryActions={
							<DBControlPanelSecondaryActions>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Profile
								</DBButton>
							</DBControlPanelSecondaryActions>
						}>
						<DBControlPanelNavigation
							aria-label="shell-tree-nav-single"
							variant="tree"
							behavior="single">
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Category A">
								<DBControlPanelNavigationItem>
									<a href="#" aria-current="page">
										Item A1
									</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A2</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A3</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Category B">
								<DBControlPanelNavigationItem>
									<a href="#">Item B1</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item B2</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Category C">
								<DBControlPanelNavigationItem>
									<a href="#">Item C1</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item C2</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Simple Item">
								<a href="#">Simple Item</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Tree Nav Single"
						brand={<DBControlPanelBrand data-logo="db-systel" />}
						primaryActions={
							<DBControlPanelPrimaryActions>
								<DBButton
									icon="magnifying_glass"
									variant="ghost"
									noText>
									Search
								</DBButton>
							</DBControlPanelPrimaryActions>
						}
						secondaryActions={
							<DBControlPanelSecondaryActions>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Profile
								</DBButton>
							</DBControlPanelSecondaryActions>
						}>
						<DBControlPanelNavigation aria-label="shell-tree-nav-single-mobile">
							<DBControlPanelNavigationItemGroup
								text="Category A"
								icon="x_placeholder">
								<DBControlPanelNavigationItem>
									<a href="#" aria-current="page">
										Item A1
									</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A2</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItemGroup
								text="Category B"
								icon="x_placeholder">
								<DBControlPanelNavigationItem>
									<a href="#">Item B1</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellContent
						mainId="main-content-tree-nav-single"
						mainLabel="shell-tree-nav-single">
						<p>
							Tree Navigation - Single Behavior (only one group
							open at a time)
						</p>
						<DBButton>Action</DBButton>
					</DBShellContent>
				</DBShell>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-tree-nav-multiple"
					controlPanelDesktopPosition="left">
					<DBControlPanelDesktop
						brand={<DBControlPanelBrand data-logo="db-systel" />}
						metaNavigation={
							<DBControlPanelMeta>
								<DBLink href="#">Imprint</DBLink>
								<DBLink href="#">Help</DBLink>
							</DBControlPanelMeta>
						}
						primaryActions={
							<DBControlPanelPrimaryActions>
								<DBButton
									icon="magnifying_glass"
									variant="ghost"
									noText>
									Search
								</DBButton>
							</DBControlPanelPrimaryActions>
						}
						secondaryActions={
							<DBControlPanelSecondaryActions>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Profile
								</DBButton>
							</DBControlPanelSecondaryActions>
						}>
						<DBControlPanelNavigation
							aria-label="shell-tree-nav-multiple"
							variant="tree"
							behavior="multiple">
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Category A">
								<DBControlPanelNavigationItem>
									<a href="#" aria-current="page">
										Item A1
									</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A2</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A3</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Category B">
								<DBControlPanelNavigationItem>
									<a href="#">Item B1</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item B2</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Category C">
								<DBControlPanelNavigationItem>
									<a href="#">Item C1</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item C2</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Simple Item">
								<a href="#">Simple Item</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Tree Nav Multiple"
						brand={<DBControlPanelBrand data-logo="db-systel" />}
						primaryActions={
							<DBControlPanelPrimaryActions>
								<DBButton
									icon="magnifying_glass"
									variant="ghost"
									noText>
									Search
								</DBButton>
							</DBControlPanelPrimaryActions>
						}
						secondaryActions={
							<DBControlPanelSecondaryActions>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Profile
								</DBButton>
							</DBControlPanelSecondaryActions>
						}>
						<DBControlPanelNavigation aria-label="shell-tree-nav-multiple-mobile">
							<DBControlPanelNavigationItemGroup
								text="Category A"
								icon="x_placeholder">
								<DBControlPanelNavigationItem>
									<a href="#" aria-current="page">
										Item A1
									</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Item A2</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItemGroup
								text="Category B"
								icon="x_placeholder">
								<DBControlPanelNavigationItem>
									<a href="#">Item B1</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellContent
						mainId="main-content-tree-nav-multiple"
						mainLabel="shell-tree-nav-multiple">
						<p>
							Tree Navigation - Multiple Behavior (multiple groups
							can be open simultaneously)
						</p>
						<DBButton>Action</DBButton>
					</DBShellContent>
				</DBShell>
			</div>
		</Fragment>
	);
}
