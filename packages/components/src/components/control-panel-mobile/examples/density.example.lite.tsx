import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBControlPanelMobile from '../control-panel-mobile.lite';
import { StorybookControlPanelMobileArgTypes } from './_control-panel-mobile.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookControlPanelMobileArgTypes
});

export default function ControlPanelMobileDensity() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					data-density="functional"
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
						aria-label="Functional">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Functional</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelMobile>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					data-density="regular"
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
						aria-label="(Default) Regular">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">(Default) Regular</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelMobile>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					data-density="expressive"
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
						aria-label="Expressive">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Expressive</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelMobile>
			</div>
		</Fragment>
	);
}
