import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../../navigation/navigation.lite';
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
					<DBNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="(Default) Top">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">(Default) Top</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBControlPanelMobile>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					position="bottom"
					drawerHeaderText="DBControlPanel"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="Bottom">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">Bottom</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBControlPanelMobile>
			</div>
		</Fragment>
	);
}
