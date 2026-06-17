import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBControlPanelPrimaryActions from '../../control-panel-primary-actions/control-panel-primary-actions.lite';
import DBControlPanelSecondaryActions from '../../control-panel-secondary-actions/control-panel-secondary-actions.lite';
import DBControlPanelDesktop from '../control-panel-desktop.lite';
import { StorybookControlPanelDesktopArgTypes } from './_control-panel-desktop.arg.types';

useMetadata({
	storybookTitle: 'Examples',
	storybookNames: [
		'With Application Name + Navigation',
		'Without Navigation',
		'Without Navigation + Primary + Secondary',
		'Without Navigation + Primary',
		'Without Navigation + Secondary',
		'Without Application Name',
		'Without Application Name + Navigation'
	],
	storybookArgTypes: StorybookControlPanelDesktopArgTypes
});

export default function ControlPanelDesktopExamples() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: { 'data-x': 'workaround-angular' },
							default: {}
						})}
						aria-label="With Application Name + Navigation">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">With Application Name + Navigation</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem
							icon="x_placeholder"
							disabled>
							<a href="#">With Application Name disabled</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelDesktop>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					brand={<DBControlPanelBrand data-logo="db-systel" />}
				/>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
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
					}
				/>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
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
				/>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					brand={<DBControlPanelBrand data-logo="db-systel" />}
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
					}
				/>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					brand={<DBControlPanelBrand />}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: { 'data-x': 'workaround-angular' },
							default: {}
						})}
						aria-label="Without Application Name">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Without Application Name</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem
							icon="x_placeholder"
							disabled>
							<a href="#">Without Application Name disabled</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelDesktop>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					brand={<DBControlPanelBrand />}
				/>
			</div>
		</Fragment>
	);
}
