import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelDesktop from '../../control-panel-desktop/control-panel-desktop.lite';
import DBControlPanelMetaNavigation from '../../control-panel-meta-navigation/control-panel-meta-navigation.lite';
import DBControlPanelPrimaryActions from '../../control-panel-primary-actions/control-panel-primary-actions.lite';
import DBControlPanelSecondaryActions from '../../control-panel-secondary-actions/control-panel-secondary-actions.lite';
import DBLink from '../../link/link.lite';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../../navigation/navigation.lite';
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
					controlPanelDesktopPosition="top"
					controlPanelDesktop={
						<DBControlPanelDesktop
							brand={
								<DBControlPanelBrand data-logo="db-systel" />
							}
							metaNavigation={
								<DBControlPanelMetaNavigation>
									<DBLink href="#">Imprint</DBLink>
									<DBLink href="#">Help</DBLink>
								</DBControlPanelMetaNavigation>
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
							<DBNavigation aria-label="shell-position-top">
								<DBNavigationItem
									icon="x_placeholder"
									tooltip="Item">
									<a href="#">Item</a>
								</DBNavigationItem>
								<DBNavigationItem
									disabled
									icon="x_placeholder"
									tooltip="Item disabled">
									<a href="#">Item disabled</a>
								</DBNavigationItem>
							</DBNavigation>
						</DBControlPanelDesktop>
					}>
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
					controlPanelDesktopPosition="top"
					controlPanelDesktop={
						<DBControlPanelDesktop
							brand={
								<DBControlPanelBrand data-logo="db-systel" />
							}
							metaNavigation={
								<DBControlPanelMetaNavigation>
									<DBLink href="#">Imprint</DBLink>
									<DBLink href="#">Help</DBLink>
								</DBControlPanelMetaNavigation>
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
							<DBNavigation aria-label="shell-position-top">
								<DBNavigationItem
									icon="x_placeholder"
									tooltip="Item">
									<a href="#">Item</a>
								</DBNavigationItem>
								<DBNavigationItem
									disabled
									icon="x_placeholder"
									tooltip="Item disabled">
									<a href="#">Item disabled</a>
								</DBNavigationItem>
							</DBNavigation>
						</DBControlPanelDesktop>
					}>
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
					controlPanelDesktop={
						<DBControlPanelDesktop
							brand={
								<DBControlPanelBrand data-logo="db-systel" />
							}
							metaNavigation={
								<DBControlPanelMetaNavigation>
									<DBLink href="#">Imprint</DBLink>
									<DBLink href="#">Help</DBLink>
								</DBControlPanelMetaNavigation>
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
							<DBNavigation aria-label="shell-position-left">
								<DBNavigationItem
									icon="x_placeholder"
									tooltip="Item">
									<a href="#">Item</a>
								</DBNavigationItem>
								<DBNavigationItem
									disabled
									icon="x_placeholder"
									tooltip="Item disabled">
									<a href="#">Item disabled</a>
								</DBNavigationItem>
							</DBNavigation>
						</DBControlPanelDesktop>
					}>
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
					controlPanelDesktop={
						<DBControlPanelDesktop
							brand={
								<DBControlPanelBrand data-logo="db-systel" />
							}
							metaNavigation={
								<DBControlPanelMetaNavigation>
									<DBLink href="#">Imprint</DBLink>
									<DBLink href="#">Help</DBLink>
								</DBControlPanelMetaNavigation>
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
							<DBNavigation aria-label="shell-position-left">
								<DBNavigationItem
									icon="x_placeholder"
									tooltip="Item">
									<a href="#">Item</a>
								</DBNavigationItem>
								<DBNavigationItem
									disabled
									icon="x_placeholder"
									tooltip="Item disabled">
									<a href="#">Item disabled</a>
								</DBNavigationItem>
							</DBNavigation>
						</DBControlPanelDesktop>
					}>
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
