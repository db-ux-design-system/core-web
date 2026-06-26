import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelDesktop from '../../control-panel-desktop/control-panel-desktop.lite';
import DBControlPanelMeta from '../../control-panel-meta/control-panel-meta.lite';
import DBControlPanelMobile from '../../control-panel-mobile/control-panel-mobile.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBControlPanelPrimaryActions from '../../control-panel-primary-actions/control-panel-primary-actions.lite';
import DBControlPanelSecondaryActions from '../../control-panel-secondary-actions/control-panel-secondary-actions.lite';
import DBLink from '../../link/link.lite';
import DBNotification from '../../notification/notification.lite';
import DBShellContent from '../../shell-content/shell-content.lite';
import DBShell from '../shell.lite';
import { StorybookShellArgTypes } from './_shell.arg.types';

useMetadata({
	storybookTitle: 'Position',
	storybookNames: [
		'(Default) Auto - Top',
		'Fixed - Top',
		'Auto - Left',
		'Fixed - Left'
	],
	storybookArgTypes: StorybookShellArgTypes
});

export default function ShellContent() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-position-auto-top"
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
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Notification
								</DBButton>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Help
								</DBButton>
							</DBControlPanelSecondaryActions>
						}>
						<DBControlPanelNavigation aria-label="content-position-auto-top">
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item">
								<a href="#">Item</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								disabled
								icon="x_placeholder"
								tooltip="Item disabled">
								<a href="#">Item disabled</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Auto Top"
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
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Notification
								</DBButton>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Help
								</DBButton>
							</DBControlPanelSecondaryActions>
						}>
						<DBControlPanelNavigation
							{...useTarget({
								angular: {
									'data-x': 'workaround-angular'
								},
								default: {}
							})}
							aria-label="content-position-auto-top-mobile">
							<DBControlPanelNavigationItem icon="x_placeholder">
								<a href="#">Item</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								disabled
								icon="x_placeholder">
								<a href="#">Item disabled</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellContent
						startSlot={
							<DBNotification headline="Test">
								Test
							</DBNotification>
						}
						endSlot={
							<DBNotification headline="Test">
								Test
							</DBNotification>
						}
						mainId="main-content-auto-top"
						mainLabel="shell-position-auto-top">
						<p>Auto-Top position content</p>
						<p>Auto-Top position content</p>
						<p>Auto-Top position content</p>
						<p>Auto-Top position content</p>
						<p>Auto-Top position content</p>
						<p>Auto-Top position content</p>
					</DBShellContent>
				</DBShell>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-position-fixed-top"
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
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Notification
								</DBButton>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Help
								</DBButton>
							</DBControlPanelSecondaryActions>
						}>
						<DBControlPanelNavigation aria-label="content-position-fixed-top">
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item">
								<a href="#">Item</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								disabled
								icon="x_placeholder"
								tooltip="Item disabled">
								<a href="#">Item disabled</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Fixed Top"
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
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Notification
								</DBButton>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Help
								</DBButton>
							</DBControlPanelSecondaryActions>
						}>
						<DBControlPanelNavigation
							{...useTarget({
								angular: {
									'data-x': 'workaround-angular'
								},
								default: {}
							})}
							aria-label="content-position-fixed-top-mobile">
							<DBControlPanelNavigationItem icon="x_placeholder">
								<a href="#">Item</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								disabled
								icon="x_placeholder">
								<a href="#">Item disabled</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellContent
						variant="fixed"
						startSlot={
							<DBNotification headline="Test">
								Test
							</DBNotification>
						}
						endSlot={
							<DBNotification headline="Test">
								Test
							</DBNotification>
						}
						mainId="main-content-fixed-top"
						mainLabel="shell-position-fixed-top">
						<p>Fixed-Top position content</p>
						<p>Fixed-Top position content</p>
						<p>Fixed-Top position content</p>
						<p>Fixed-Top position content</p>
						<p>Fixed-Top position content</p>
						<p>Fixed-Top position content</p>
					</DBShellContent>
				</DBShell>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-position-auto-left"
					controlPanelDesktopPosition="left"
					controlPanelMobilePosition="bottom">
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
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Notification
								</DBButton>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Help
								</DBButton>
							</DBControlPanelSecondaryActions>
						}>
						<DBControlPanelNavigation aria-label="content-position-auto-left">
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item">
								<a href="#">Item</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								disabled
								icon="x_placeholder"
								tooltip="Item disabled">
								<a href="#">Item disabled</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Auto Left"
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
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Notification
								</DBButton>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Help
								</DBButton>
							</DBControlPanelSecondaryActions>
						}>
						<DBControlPanelNavigation
							{...useTarget({
								angular: {
									'data-x': 'workaround-angular'
								},
								default: {}
							})}
							aria-label="content-position-auto-left-mobile">
							<DBControlPanelNavigationItem icon="x_placeholder">
								<a href="#">Item</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								disabled
								icon="x_placeholder">
								<a href="#">Item disabled</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellContent
						startSlot={
							<DBNotification headline="Test">
								Test
							</DBNotification>
						}
						endSlot={
							<DBNotification headline="Test">
								Test
							</DBNotification>
						}
						mainId="main-content-auto-left"
						mainLabel="shell-position-auto-left">
						<p>Auto-Left position content</p>
						<p>Auto-Left position content</p>
						<p>Auto-Left position content</p>
						<p>Auto-Left position content</p>
						<p>Auto-Left position content</p>
						<p>Auto-Left position content</p>
					</DBShellContent>
				</DBShell>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-position-fixed-left"
					controlPanelDesktopPosition="left"
					controlPanelMobilePosition="bottom">
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
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Notification
								</DBButton>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Help
								</DBButton>
							</DBControlPanelSecondaryActions>
						}>
						<DBControlPanelNavigation aria-label="content-position-fixed-left">
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item">
								<a href="#">Item</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								disabled
								icon="x_placeholder"
								tooltip="Item disabled">
								<a href="#">Item disabled</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Fixed Left"
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
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Notification
								</DBButton>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Help
								</DBButton>
							</DBControlPanelSecondaryActions>
						}>
						<DBControlPanelNavigation
							{...useTarget({
								angular: {
									'data-x': 'workaround-angular'
								},
								default: {}
							})}
							aria-label="content-position-fixed-left-mobile">
							<DBControlPanelNavigationItem icon="x_placeholder">
								<a href="#">Item</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								disabled
								icon="x_placeholder">
								<a href="#">Item disabled</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellContent
						variant="fixed"
						startSlot={
							<DBNotification headline="Test">
								Test
							</DBNotification>
						}
						endSlot={
							<DBNotification headline="Test">
								Test
							</DBNotification>
						}
						mainId="main-content-fixed-left"
						mainLabel="shell-position-fixed-left">
						<p>Fixed-Left position content</p>
						<p>Fixed-Left position content</p>
						<p>Fixed-Left position content</p>
						<p>Fixed-Left position content</p>
						<p>Fixed-Left position content</p>
						<p>Fixed-Left position content</p>
					</DBShellContent>
				</DBShell>
			</div>
		</Fragment>
	);
}
