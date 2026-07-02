import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBControlPanelFlatIcon from '../../control-panel-flat-icon/control-panel-flat-icon.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBShellContent from '../../shell-content/shell-content.lite';
import DBShellSubNavigation from '../../shell-sub-navigation/shell-sub-navigation.lite';
import DBShell from '../shell.lite';
import { StorybookShellArgTypes } from './_shell.arg.types';

useMetadata({
	storybookTitle: 'Flat Icon',
	storybookNames: [
		'With Text',
		'No Text',
		'With Text + Sub-Navigation',
		'No Text + Sub-Navigation'
	],
	storybookArgTypes: StorybookShellArgTypes
});

export default function ShellFlatIcon() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell data-test-id="shell-flat-icon-with-text">
					<DBControlPanelFlatIcon>
						<DBControlPanelNavigation
							{...useTarget({
								angular: {
									'data-x': 'workaround-angular'
								},
								default: {}
							})}
							aria-label="Flat Icon With Text">
							<DBControlPanelNavigationItem icon="house" active>
								<a href="#">Home</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem icon="magnifying_glass">
								<a href="#">Search Full</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem icon="person">
								<a href="#">Account</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelFlatIcon>
					<DBShellContent
						mainId="main-content-flat-icon-with-text"
						mainLabel="shell-flat-icon-with-text">
						Flat icon with text content
					</DBShellContent>
				</DBShell>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell data-test-id="shell-flat-icon-no-text">
					<DBControlPanelFlatIcon noText>
						<DBControlPanelNavigation
							{...useTarget({
								angular: {
									'data-x': 'workaround-angular'
								},
								default: {}
							})}
							aria-label="Flat Icon No Text">
							<DBControlPanelNavigationItem icon="house" active>
								<a href="#">Home</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem icon="magnifying_glass">
								<a href="#">Search Full</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem icon="person">
								<a href="#">Account</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelFlatIcon>
					<DBShellContent
						mainId="main-content-flat-icon-no-text"
						mainLabel="shell-flat-icon-no-text">
						Flat icon no text content
					</DBShellContent>
				</DBShell>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-flat-icon-with-text-sub-navigation"
					showSubNavigation={true}>
					<DBControlPanelFlatIcon>
						<DBControlPanelNavigation
							{...useTarget({
								angular: {
									'data-x': 'workaround-angular'
								},
								default: {}
							})}
							aria-label="Flat Icon With Text Sub Nav">
							<DBControlPanelNavigationItem icon="house" active>
								<a href="#">Home</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem icon="magnifying_glass">
								<a href="#">Search Full</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem icon="person">
								<a href="#">Account</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelFlatIcon>
					<DBShellSubNavigation aria-label="shell-flat-icon-with-text-sub-nav">
						<DBControlPanelNavigation aria-label="shell-flat-icon-with-text-sub-nav">
							<DBControlPanelNavigationItem active>
								<a href="#">Test 1</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem active>
								<a href="#">Test 2</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem active>
								<a href="#">Test 3</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBShellSubNavigation>
					<DBShellContent
						mainId="main-content-flat-icon-with-text-sub"
						mainLabel="shell-flat-icon-with-text-sub">
						Flat icon with text content + Sub-Navigation
					</DBShellContent>
				</DBShell>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBShell
					data-test-id="shell-flat-icon-no-text-sub-navigation"
					showSubNavigation={true}>
					<DBControlPanelFlatIcon noText>
						<DBControlPanelNavigation
							{...useTarget({
								angular: {
									'data-x': 'workaround-angular'
								},
								default: {}
							})}
							aria-label="Flat Icon No Text Sub Nav">
							<DBControlPanelNavigationItem icon="house" active>
								<a href="#">Home</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem icon="magnifying_glass">
								<a href="#">Search Full</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem icon="person">
								<a href="#">Account</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBControlPanelFlatIcon>
					<DBShellSubNavigation aria-label="shell-flat-icon-no-text-sub-nav">
						<DBControlPanelNavigation aria-label="shell-flat-icon-no-text-sub-nav">
							<DBControlPanelNavigationItem active>
								<a href="#">Test 1</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem active>
								<a href="#">Test 2</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem active>
								<a href="#">Test 3</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigation>
					</DBShellSubNavigation>
					<DBShellContent
						mainId="main-content-flat-icon-no-text-sub"
						mainLabel="shell-flat-icon-no-text-sub">
						Flat icon no text content + Sub-Navigation
					</DBShellContent>
				</DBShell>
			</div>
		</Fragment>
	);
}
