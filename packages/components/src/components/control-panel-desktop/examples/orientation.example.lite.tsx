import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBControlPanelDesktop from '../control-panel-desktop.lite';
import { StorybookControlPanelDesktopArgTypes } from './_control-panel-desktop.arg.types';

useMetadata({
	storybookTitle: 'Orientation',
	storybookNames: ['(Default) Horizontal', 'Vertical'],
	storybookArgTypes: StorybookControlPanelDesktopArgTypes
});

export default function ControlPanelDesktopOrientation() {
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
						aria-label="(Default) Horizontal">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">(Default) Horizontal</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem
							icon="x_placeholder"
							disabled>
							<a href="#">(Default) Horizontal disabled</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelDesktop>
			</div>
			<div
				style={{
					maxInlineSize: '300px',
					width: 'auto',
					height: '500px',
					display: 'block'
				}}>
				<DBControlPanelDesktop
					orientation="vertical"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="Vertical">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Vertical</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem
							icon="x_placeholder"
							disabled>
							<a href="#">Vertical disabled</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelDesktop>
			</div>
		</Fragment>
	);
}
