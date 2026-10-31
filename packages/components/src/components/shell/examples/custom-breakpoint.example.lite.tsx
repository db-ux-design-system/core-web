import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBControlPanelActions1 from '../../control-panel-actions/control-panel-actions-1.lite';
import DBControlPanelActions2 from '../../control-panel-actions/control-panel-actions-2.lite';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelDesktop from '../../control-panel-desktop/control-panel-desktop.lite';
import DBControlPanelMobile from '../../control-panel-mobile/control-panel-mobile.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBShellContent from '../../shell-content/shell-content.lite';
import DBShell from '../shell.lite';
import { StorybookShellArgTypes } from './_shell.arg.types';

useMetadata({
	storybookTitle: 'Custom Breakpoint',
	storybookNames: ['Force Mobile (2000px)', 'Force Desktop (400px)'],
	storybookArgTypes: StorybookShellArgTypes
});

export default function ShellCustomBreakpoint() {
	return (
		<Fragment>
			{/* A large breakpoint keeps the shell in its mobile layout on almost
			    every viewport (the switch only happens at >= 2000px). This is the
			    migration path for consumers who relied on the old, lower switch
			    point or who want a "force mobile" behavior. The breakpoint is set
			    with the `--db-desktop-breakpoint` custom property; the showcase
			    stylesheet applies it to this shell via its data-test-id. */}
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-custom-breakpoint-force-mobile"
					controlPanelDesktopPosition="top">
					<DBControlPanelDesktop
						brand={<DBControlPanelBrand data-logo="db-systel" />}
						actions1={
							<DBControlPanelActions1>
								<DBButton
									icon="magnifying_glass"
									variant="ghost"
									noText>
									Search
								</DBButton>
							</DBControlPanelActions1>
						}
						actions2={
							<DBControlPanelActions2>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Profile
								</DBButton>
							</DBControlPanelActions2>
						}>
						<DBControlPanelNavigation aria-label="shell-custom-breakpoint-force-mobile">
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item">
								<a href="#">Item</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Force Mobile"
						brand={<DBControlPanelBrand data-logo="db-systel" />}
						actions1={
							<DBControlPanelActions1>
								<DBButton
									icon="magnifying_glass"
									variant="ghost"
									noText>
									Search
								</DBButton>
							</DBControlPanelActions1>
						}
						actions2={
							<DBControlPanelActions2>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Profile
								</DBButton>
							</DBControlPanelActions2>
						}>
						<DBControlPanelNavigation
							{...useTarget({
								angular: {
									'data-x': 'workaround-angular'
								},
								default: {}
							})}
							aria-label="shell-custom-breakpoint-force-mobile-mobile">
							<DBControlPanelNavigationItem icon="x_placeholder">
								<a href="#">Item</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellContent
						mainId="main-content-custom-breakpoint-force-mobile"
						mainLabel="shell-custom-breakpoint-force-mobile">
						<p>
							This shell uses{' '}
							<code>--db-desktop-breakpoint: 2000px</code>, so it
							stays in its mobile layout until the viewport is at
							least 2000px wide.
						</p>
					</DBShellContent>
				</DBShell>
			</div>
			{/* A small breakpoint switches to the desktop layout very early (at
			    >= 400px), so the shell shows its desktop control panel on almost
			    every viewport. */}
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-custom-breakpoint-force-desktop"
					controlPanelDesktopPosition="top">
					<DBControlPanelDesktop
						brand={<DBControlPanelBrand data-logo="db-systel" />}
						actions1={
							<DBControlPanelActions1>
								<DBButton
									icon="magnifying_glass"
									variant="ghost"
									noText>
									Search
								</DBButton>
							</DBControlPanelActions1>
						}
						actions2={
							<DBControlPanelActions2>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Profile
								</DBButton>
							</DBControlPanelActions2>
						}>
						<DBControlPanelNavigation aria-label="shell-custom-breakpoint-force-desktop">
							<DBControlPanelNavigationItem
								icon="x_placeholder"
								tooltip="Item">
								<a href="#">Item</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelDesktop>
					<DBControlPanelMobile
						drawerHeaderText="Force Desktop"
						brand={<DBControlPanelBrand data-logo="db-systel" />}
						actions1={
							<DBControlPanelActions1>
								<DBButton
									icon="magnifying_glass"
									variant="ghost"
									noText>
									Search
								</DBButton>
							</DBControlPanelActions1>
						}
						actions2={
							<DBControlPanelActions2>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Profile
								</DBButton>
							</DBControlPanelActions2>
						}>
						<DBControlPanelNavigation
							{...useTarget({
								angular: {
									'data-x': 'workaround-angular'
								},
								default: {}
							})}
							aria-label="shell-custom-breakpoint-force-desktop-mobile">
							<DBControlPanelNavigationItem icon="x_placeholder">
								<a href="#">Item</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelMobile>
					<DBShellContent
						mainId="main-content-custom-breakpoint-force-desktop"
						mainLabel="shell-custom-breakpoint-force-desktop">
						<p>
							This shell uses{' '}
							<code>--db-desktop-breakpoint: 400px</code>, so it
							switches to its desktop layout on almost every
							viewport.
						</p>
					</DBShellContent>
				</DBShell>
			</div>
		</Fragment>
	);
}
