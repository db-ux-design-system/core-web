import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../../navigation/navigation.lite';
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
					brand={
						<DBControlPanelBrand>
							DBControlPanel
						</DBControlPanelBrand>
					}>
					<DBNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="Full">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">Full</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBControlPanelDesktop>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					width="medium"
					brand={
						<DBControlPanelBrand>
							DBControlPanel
						</DBControlPanelBrand>
					}>
					<DBNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="Medium">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">Medium</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBControlPanelDesktop>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					width="large"
					brand={
						<DBControlPanelBrand>
							DBControlPanel
						</DBControlPanelBrand>
					}>
					<DBNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="Large">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">Large</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBControlPanelDesktop>
			</div>
		</Fragment>
	);
}
