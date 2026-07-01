import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
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
import DBShellSubNavigation from '../../shell-sub-navigation/shell-sub-navigation.lite';
import DBShell from '../shell.lite';
import { StorybookShellArgTypes } from './_shell.arg.types';

useMetadata({
	storybookTitle: 'Sub Navigation',
	storybookNames: [
		'Top + Sub Top',
		'Top + Sub Left Popover',
		'Top + Sub Left Tree',
		'Left + Sub Top'
	],
	storybookArgTypes: StorybookShellArgTypes
});

export default function ShellSubNavigation() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-top-sub-top"
					controlPanelDesktopPosition="top"
					subNavigationDesktopPosition="top"
					showSubNavigation={true}>
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
						<DBControlPanelNavigation aria-label="shell-top-sub-top-main">
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 1">
								<a href="#">Item 1</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 2">
								<a href="#">Item 2</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Top + Sub Top"
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
							{...useTarget({
								angular: {
									'data-x': 'workaround-angular'
								},
								default: {}
							})}
							aria-label="shell-top-sub-top-mobile">
							<DBControlPanelNavigationItemGroup text="Group 1">
								<DBControlPanelNavigationItem>
									<a href="#" aria-current="page">
										Sub-Item 1
									</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Sub-Item 2</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 3</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 4</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 5</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellSubNavigation>
						<DBControlPanelNavigation aria-label="shell-top-sub-top-sub">
							<DBControlPanelNavigationItemGroup text="Group 1">
								<DBControlPanelNavigationItem>
									<a href="#" aria-current="page">
										Sub-Item 1
									</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Sub-Item 2</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 3</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 4</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 5</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBShellSubNavigation>
					<DBShellContent
						mainId="main-content-top-sub-top"
						mainLabel="shell-top-sub-top">
						Top + Sub Top content
					</DBShellContent>
				</DBShell>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-top-sub-left"
					controlPanelDesktopPosition="top"
					subNavigationDesktopPosition="left"
					subNavigationMobilePosition="bottom"
					showSubNavigation={true}>
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
						<DBControlPanelNavigation aria-label="shell-top-sub-left-main">
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 1">
								<a href="#">Item 1</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 2">
								<a href="#">Item 2</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Top + Sub Left Popover"
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
							{...useTarget({
								angular: {
									'data-x': 'workaround-angular'
								},
								default: {}
							})}
							aria-label="shell-top-sub-left-mobile">
							<DBControlPanelNavigationItemGroup text="Group 1">
								<DBControlPanelNavigationItem>
									<a href="#" aria-current="page">
										Sub-Item 1
									</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Sub-Item 2</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 3</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 4</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 5</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellSubNavigation>
						<DBControlPanelNavigation aria-label="shell-top-sub-left-sub">
							<DBControlPanelNavigationItemGroup text="Group 1">
								<DBControlPanelNavigationItem>
									<a href="#" aria-current="page">
										Sub-Item 1
									</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Sub-Item 2</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 3</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 4</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 5</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBShellSubNavigation>
					<DBShellContent
						mainId="main-content-top-sub-left"
						mainLabel="shell-top-sub-left">
						Top + Sub Left Popover content
					</DBShellContent>
				</DBShell>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-top-sub-left-tree"
					controlPanelDesktopPosition="top"
					subNavigationDesktopPosition="left"
					controlPanelMobilePosition="bottom"
					showSubNavigation={true}>
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
						<DBControlPanelNavigation aria-label="shell-top-sub-left-tree-main">
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 1">
								<a href="#">Item 1</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 2">
								<a href="#">Item 2</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Top + Sub Left Tree"
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
							{...useTarget({
								angular: {
									'data-x': 'workaround-angular'
								},
								default: {}
							})}
							aria-label="shell-top-sub-left-tree-mobile">
							<DBControlPanelNavigationItemGroup text="Group 1">
								<DBControlPanelNavigationItem>
									<a href="#" aria-current="page">
										Sub-Item 1
									</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Sub-Item 2</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 3</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 4</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 5</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellSubNavigation>
						<DBControlPanelNavigation
							variant="tree"
							aria-label="shell-top-sub-left-tree-sub">
							<DBControlPanelNavigationItemGroup text="Group 1">
								<DBControlPanelNavigationItem>
									<a href="#" aria-current="page">
										Sub-Item 1
									</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Sub-Item 2</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 3</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 4</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 5</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBShellSubNavigation>
					<DBShellContent
						mainId="main-content-top-sub-left-tree"
						mainLabel="shell-top-sub-left-tree">
						Top + Sub Left Tree content
					</DBShellContent>
				</DBShell>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-left-sub-top"
					controlPanelDesktopPosition="left"
					subNavigationDesktopPosition="top"
					controlPanelMobilePosition="bottom"
					subNavigationMobilePosition="bottom"
					showSubNavigation={true}>
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
						<DBControlPanelNavigation aria-label="shell-left-sub-top-main">
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 1">
								<a href="#">Item 1</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item 2">
								<a href="#">Item 2</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Left + Sub Top"
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
							{...useTarget({
								angular: {
									'data-x': 'workaround-angular'
								},
								default: {}
							})}
							aria-label="shell-left-sub-top-mobile">
							<DBControlPanelNavigationItemGroup text="Group 1">
								<DBControlPanelNavigationItem>
									<a href="#" aria-current="page">
										Sub-Item 1
									</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Sub-Item 2</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 3</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 4</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 5</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellSubNavigation>
						<DBControlPanelNavigation aria-label="shell-left-sub-top-sub">
							<DBControlPanelNavigationItemGroup text="Group 1">
								<DBControlPanelNavigationItem>
									<a href="#" aria-current="page">
										Sub-Item 1
									</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem>
									<a href="#">Sub-Item 2</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigationItemGroup>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 3</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 4</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Item 5</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBShellSubNavigation>
					<DBShellContent
						mainId="main-content-left-sub-top"
						mainLabel="shell-left-sub-top">
						Left + Sub Top content
					</DBShellContent>
				</DBShell>
			</div>
		</Fragment>
	);
}
