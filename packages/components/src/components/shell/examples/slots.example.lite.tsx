import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
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
	storybookTitle: 'Slots',
	storybookNames: [
		'ControlPanel Top',
		'ControlPanel Left Popover',
		'ControlPanel Left Tree'
	],
	storybookArgTypes: StorybookShellArgTypes
});

export default function ShellSlots() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-slots-nav-item-badge"
					controlPanelDesktopPosition="top">
					<DBControlPanelDesktop
						brand={
							<DBControlPanelBrand data-logo="db-systel">
								<DBBadge
									semantic="informational"
									size="small"
									label="New version available">
									New
								</DBBadge>
							</DBControlPanelBrand>
						}
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
						<DBControlPanelNavigation aria-label="shell-slots-top">
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Inbox"
								endSlot={
									<DBBadge
										semantic="warning"
										placement="corner-top-right"
										size="small">
										3
									</DBBadge>
								}>
								<a href="#" aria-current="page">
									Inbox
								</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Tasks"
								endSlot={
									<DBBadge
										semantic="successful"
										size="small"
										placement="corner-top-right">
										2
									</DBBadge>
								}>
								<DBControlPanelNavigationItem>
									<a href="#">Open Tasks</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Completed</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Dashboard">
								<a href="#">Dashboard</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Nav Item Badge"
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
						<DBControlPanelNavigation aria-label="shell-slots-top">
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Inbox"
								endSlot={
									<DBBadge
										semantic="warning"
										placement="corner-top-right"
										size="small">
										3
									</DBBadge>
								}>
								<a href="#" aria-current="page">
									Inbox
								</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Tasks"
								endSlot={
									<DBBadge
										semantic="successful"
										size="small"
										placement="corner-top-right">
										2
									</DBBadge>
								}>
								<DBControlPanelNavigationItem>
									<a href="#">Open Tasks</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Completed</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Dashboard">
								<a href="#">Dashboard</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellContent
						mainId="main-content-slots-nav-item-badge"
						mainLabel="shell-slots-nav-item-badge">
						<p>
							Navigation Item with Badge - StartSlot and EndSlot
						</p>
						<DBButton>Action</DBButton>
					</DBShellContent>
				</DBShell>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-slots-group-badge"
					controlPanelDesktopPosition="left">
					<DBControlPanelDesktop
						brand={
							<DBControlPanelBrand data-logo="db-systel">
								<DBBadge
									semantic="informational"
									size="small"
									label="New version available">
									New
								</DBBadge>
							</DBControlPanelBrand>
						}
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
						<DBControlPanelNavigation aria-label="shell-slots-group-badge">
							<DBControlPanelNavigationItem
								endSlot={
									<DBBadge semantic="successful" size="small">
										2
									</DBBadge>
								}>
								<a href="#">Inbox</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Tasks"
								endSlot={
									<DBBadge semantic="successful" size="small">
										2
									</DBBadge>
								}>
								<DBControlPanelNavigationItem>
									<a href="#">Open Tasks</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Completed</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Dashboard">
								<a href="#">Dashboard</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Group Badge"
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
						<DBControlPanelNavigation aria-label="shell-slots-group-badge-mobile">
							<DBControlPanelNavigationItem
								endSlot={
									<DBBadge semantic="successful" size="small">
										2
									</DBBadge>
								}>
								<a href="#">Inbox</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItemGroup
								text="Tasks"
								endSlot={
									<DBBadge semantic="successful" size="small">
										2
									</DBBadge>
								}>
								<DBControlPanelNavigationItem>
									<a href="#">Open Tasks</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Completed</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem>
								<a href="#">Dashboard</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellContent
						mainId="main-content-slots-group-badge"
						mainLabel="shell-slots-group-badge-mobile">
						<p>Group with Badge - StartSlot and EndSlot</p>
						<DBButton>Action</DBButton>
					</DBShellContent>
				</DBShell>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-slots-left-tree"
					controlPanelDesktopPosition="left">
					<DBControlPanelDesktop
						brand={
							<DBControlPanelBrand data-logo="db-systel">
								<DBBadge
									semantic="informational"
									size="small"
									label="New version available">
									New
								</DBBadge>
							</DBControlPanelBrand>
						}
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
							aria-label="shell-slots-left-tree"
							variant="tree">
							<DBControlPanelNavigationItem
								endSlot={
									<DBBadge semantic="successful" size="small">
										2
									</DBBadge>
								}>
								<a href="#">Inbox</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Tasks"
								endSlot={
									<DBBadge semantic="successful" size="small">
										2
									</DBBadge>
								}>
								<DBControlPanelNavigationItem>
									<a href="#">Open Tasks</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Completed</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Dashboard">
								<a href="#">Dashboard</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Group Badge"
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
						<DBControlPanelNavigation
							aria-label="shell-slots-left-tree-mobile"
							variant="tree">
							<DBControlPanelNavigationItem
								endSlot={
									<DBBadge semantic="successful" size="small">
										2
									</DBBadge>
								}>
								<a href="#">Inbox</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItemGroup
								text="Tasks"
								endSlot={
									<DBBadge semantic="successful" size="small">
										2
									</DBBadge>
								}>
								<DBControlPanelNavigationItem>
									<a href="#">Open Tasks</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Completed</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem>
								<a href="#">Dashboard</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellContent
						mainId="main-content-slots-group-badge"
						mainLabel="shell-slots-group-badge">
						<p>Group with Badge - StartSlot and EndSlot</p>
						<DBButton>Action</DBButton>
					</DBShellContent>
				</DBShell>
			</div>
		</Fragment>
	);
}
