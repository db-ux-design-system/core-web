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
	storybookTitle: 'Deep Navigation',
	storybookNames: ['Top', 'Left'],
	storybookArgTypes: StorybookShellArgTypes
});

export default function ShellDeepNavigation() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-deep-nav-top"
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
						<DBControlPanelNavigation aria-label="shell-deep-nav-top">
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Level 1a">
								<DBControlPanelNavigationItemGroup text="Level 2a">
									<DBControlPanelNavigationItemGroup text="Level 3a">
										<DBControlPanelNavigationItem>
											<a href="#" aria-current="page">
												Level 4a
											</a>
										</DBControlPanelNavigationItem>
										<DBControlPanelNavigationItem>
											<a href="#">Level 4b</a>
										</DBControlPanelNavigationItem>
										<DBControlPanelNavigationItem>
											<a href="#">Level 4c</a>
										</DBControlPanelNavigationItem>
									</DBControlPanelNavigationItemGroup>
									<DBControlPanelNavigationItemGroup text="Level 3b">
										<DBControlPanelNavigationItem>
											<a href="#">Level 4d</a>
										</DBControlPanelNavigationItem>
										<DBControlPanelNavigationItem>
											<a href="#">Level 4e</a>
										</DBControlPanelNavigationItem>
									</DBControlPanelNavigationItemGroup>
									<DBControlPanelNavigationItem>
										<a href="#">Level 3c</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItemGroup text="Level 2b">
									<DBControlPanelNavigationItem>
										<a href="#">Level 3d</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Level 3e</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItem>
									<a href="#">Level 2c</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Level 1b">
								<DBControlPanelNavigationItemGroup text="Level 2d">
									<DBControlPanelNavigationItemGroup text="Level 3f">
										<DBControlPanelNavigationItem>
											<a href="#">Level 4f</a>
										</DBControlPanelNavigationItem>
										<DBControlPanelNavigationItem>
											<a href="#">Level 4g</a>
										</DBControlPanelNavigationItem>
									</DBControlPanelNavigationItemGroup>
									<DBControlPanelNavigationItem>
										<a href="#">Level 3g</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItem>
									<a href="#">Level 2e</a>
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
						drawerHeaderText="Deep Nav Top"
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
						<DBControlPanelNavigation aria-label="shell-deep-nav-top-mobile">
							<DBControlPanelNavigationItemGroup text="Level 1a">
								<DBControlPanelNavigationItemGroup text="Level 2a">
									<DBControlPanelNavigationItem>
										<a href="#" aria-current="page">
											Level 3a
										</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Level 3b</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItem>
									<a href="#">Level 2b</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem>
								<a href="#">Level 1b</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellContent
						mainId="main-content-deep-nav-top"
						mainLabel="shell-deep-nav-top">
						Deep Navigation - Top Position
						<DBButton>Action</DBButton>
					</DBShellContent>
				</DBShell>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-deep-nav-left"
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
						<DBControlPanelNavigation aria-label="shell-deep-nav-left">
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Level 1a">
								<DBControlPanelNavigationItemGroup text="Level 2a">
									<DBControlPanelNavigationItemGroup text="Level 3a">
										<DBControlPanelNavigationItem>
											<a href="#" aria-current="page">
												Level 4a
											</a>
										</DBControlPanelNavigationItem>
										<DBControlPanelNavigationItem>
											<a href="#">Level 4b</a>
										</DBControlPanelNavigationItem>
										<DBControlPanelNavigationItem>
											<a href="#">Level 4c</a>
										</DBControlPanelNavigationItem>
									</DBControlPanelNavigationItemGroup>
									<DBControlPanelNavigationItemGroup text="Level 3b">
										<DBControlPanelNavigationItem>
											<a href="#">Level 4d</a>
										</DBControlPanelNavigationItem>
										<DBControlPanelNavigationItem>
											<a href="#">Level 4e</a>
										</DBControlPanelNavigationItem>
									</DBControlPanelNavigationItemGroup>
									<DBControlPanelNavigationItem>
										<a href="#">Level 3c</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItemGroup text="Level 2b">
									<DBControlPanelNavigationItem>
										<a href="#">Level 3d</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Level 3e</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItem>
									<a href="#">Level 2c</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItemGroup
								icon="x_placeholder"
								text="Level 1b">
								<DBControlPanelNavigationItemGroup text="Level 2d">
									<DBControlPanelNavigationItemGroup text="Level 3f">
										<DBControlPanelNavigationItem>
											<a href="#">Level 4f</a>
										</DBControlPanelNavigationItem>
										<DBControlPanelNavigationItem>
											<a href="#">Level 4g</a>
										</DBControlPanelNavigationItem>
									</DBControlPanelNavigationItemGroup>
									<DBControlPanelNavigationItem>
										<a href="#">Level 3g</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItem>
									<a href="#">Level 2e</a>
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
						drawerHeaderText="Deep Nav Left"
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
						<DBControlPanelNavigation aria-label="shell-deep-nav-left-mobile">
							<DBControlPanelNavigationItemGroup text="Level 1a">
								<DBControlPanelNavigationItemGroup text="Level 2a">
									<DBControlPanelNavigationItem>
										<a href="#" aria-current="page">
											Level 3a
										</a>
									</DBControlPanelNavigationItem>
									<DBControlPanelNavigationItem>
										<a href="#">Level 3b</a>
									</DBControlPanelNavigationItem>
								</DBControlPanelNavigationItemGroup>
								<DBControlPanelNavigationItem>
									<a href="#">Level 2b</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem>
								<a href="#">Level 1b</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellContent
						mainId="main-content-deep-nav-left"
						mainLabel="shell-deep-nav-left">
						Deep Navigation - Left Position
						<DBButton>Action</DBButton>
					</DBShellContent>
				</DBShell>
			</div>
		</Fragment>
	);
}
