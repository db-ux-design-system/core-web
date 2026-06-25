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
		'Navigation Item with Badge',
		'Group with Badge',
		'Brand with Badge'
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
						<DBControlPanelNavigation aria-label="shell-slots-nav-item-badge">
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Inbox"
								startSlot={
									<DBBadge semantic="warning" size="small">
										3
									</DBBadge>
								}>
								<a href="#" aria-current="page">
									Inbox
								</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Messages"
								endSlot={
									<DBBadge
										semantic="informational"
										size="small">
										12
									</DBBadge>
								}>
								<a href="#">Messages</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Settings">
								<a href="#">Settings</a>
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
						<DBControlPanelNavigation aria-label="shell-slots-nav-item-badge-mobile">
							<DBControlPanelNavigationItem
								startSlot={
									<DBBadge semantic="warning" size="small">
										3
									</DBBadge>
								}>
								<a href="#" aria-current="page">
									Inbox
								</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								endSlot={
									<DBBadge
										semantic="informational"
										size="small">
										12
									</DBBadge>
								}>
								<a href="#">Messages</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Settings</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellContent mainLabel="shell-slots-nav-item-badge">
						Navigation Item with Badge - StartSlot and EndSlot
					</DBShellContent>
				</DBShell>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-slots-group-badge"
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
						<DBControlPanelNavigation aria-label="shell-slots-group-badge">
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Notifications"
								startSlot={
									<DBBadge semantic="critical" size="small">
										5
									</DBBadge>
								}>
								<DBControlPanelNavigationItem>
									<a href="#" aria-current="page">
										Alerts
									</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Updates</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
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
							<DBControlPanelNavigationItemGroup
								text="Notifications"
								startSlot={
									<DBBadge semantic="critical" size="small">
										5
									</DBBadge>
								}>
								<DBControlPanelNavigationItem>
									<a href="#" aria-current="page">
										Alerts
									</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Updates</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
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
					<DBShellContent mainLabel="shell-slots-group-badge">
						Group with Badge - StartSlot and EndSlot
					</DBShellContent>
				</DBShell>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-slots-brand-badge"
					controlPanelDesktopPosition="top">
					<DBControlPanelDesktop
						brand={
							<DBControlPanelBrand data-logo="db-systel">
								<DBBadge
									semantic="informational"
									size="small"
									placement="corner-top-right"
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
						<DBControlPanelNavigation aria-label="shell-slots-brand-badge">
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Home">
								<a href="#" aria-current="page">
									Home
								</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="About">
								<a href="#">About</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Brand Badge"
						brand={
							<DBControlPanelBrand data-logo="db-systel">
								<DBBadge
									semantic="informational"
									size="small"
									placement="corner-top-right"
									label="New version available">
									New
								</DBBadge>
							</DBControlPanelBrand>
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
						<DBControlPanelNavigation aria-label="shell-slots-brand-badge-mobile">
							<DBControlPanelNavigationItem>
								<a href="#" aria-current="page">
									Home
								</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">About</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellContent mainLabel="shell-slots-brand-badge">
						Brand with Badge - Corner Placement
					</DBShellContent>
				</DBShell>
			</div>
		</Fragment>
	);
}
