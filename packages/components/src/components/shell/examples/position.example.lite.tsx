import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelDesktop from '../../control-panel-desktop/control-panel-desktop.lite';
import DBControlPanelMetaNavigation from '../../control-panel-meta-navigation/control-panel-meta-navigation.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBControlPanelPrimaryActions from '../../control-panel-primary-actions/control-panel-primary-actions.lite';
import DBControlPanelSecondaryActions from '../../control-panel-secondary-actions/control-panel-secondary-actions.lite';
import DBLink from '../../link/link.lite';
import DBShellContent from '../../shell-content/shell-content.lite';
import DBShell from '../shell.lite';
import { StorybookShellArgTypes } from './_shell.arg.types';

useMetadata({
	storybookTitle: 'Position',
	storybookNames: ['(Default) Top', 'Left'],
	storybookArgTypes: StorybookShellArgTypes
});

export default function ShellPosition() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-position-top"
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
							<DBControlPanelNavigation aria-label="shell-position-top">
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
					}>
					<DBShellContent mainLabel="shell-position-top">
						Top position content
					</DBShellContent>
				</DBShell>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-position-left"
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
							<DBControlPanelNavigation aria-label="shell-position-left">
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
					}>
					<DBShellContent mainLabel="shell-position-left">
						Left position content
					</DBShellContent>
				</DBShell>
			</div>
		</Fragment>
	);
}
