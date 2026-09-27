import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBControlPanelMobile from '../control-panel-mobile.lite';
import { StorybookControlPanelMobileArgTypes } from './_control-panel-mobile.arg.types';

useMetadata({
	storybookTitle: 'Position',
	storybookNames: ['(Default) Top', 'Bottom'],
	storybookArgTypes: StorybookControlPanelMobileArgTypes
});

export default function ControlPanelMobilePosition() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					position="top"
					drawerHeaderText="DBControlPanel"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="(Default) Top">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">(Default) Top</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelMobile>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					position="bottom"
					drawerHeaderText="DBControlPanel"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="Bottom">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Bottom</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelMobile>
			</div>
		</Fragment>
	);
}
