import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBControlPanelDesktop from '../control-panel-desktop.lite';
import { StorybookControlPanelDesktopArgTypes } from './_control-panel-desktop.arg.types';

useMetadata({
	storybookTitle: 'Width',
	storybookNames: ['Full', 'Medium', 'Large'],
	storybookArgTypes: StorybookControlPanelDesktopArgTypes
});

export default function ControlPanelDesktopWidth() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="Full">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Full</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelDesktop>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					width="medium"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="Medium">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Medium</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelDesktop>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					width="large"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="Large">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Large</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelDesktop>
			</div>
		</Fragment>
	);
}
