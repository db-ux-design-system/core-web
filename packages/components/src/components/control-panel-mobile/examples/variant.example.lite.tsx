import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelFlatIconNavigation from '../../control-panel-flat-icon-navigation/control-panel-flat-icon-navigation.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBControlPanelMobile from '../control-panel-mobile.lite';
import { StorybookControlPanelMobileArgTypes } from './_control-panel-mobile.arg.types';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: ['(Default) Drawer', 'Flat Icon', 'Flat Icon No Text'],
	storybookArgTypes: StorybookControlPanelMobileArgTypes
});

export default function ControlPanelMobileVariant() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					variant="drawer"
					position="top"
					drawerHeaderText="DBControlPanel"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: { 'data-x': 'workaround-angular' },
							default: {}
						})}
						aria-label="(Default) Drawer">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">(Default) Drawer</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem
							icon="x_placeholder"
							disabled>
							<a href="#">(Default) Drawer disabled</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelMobile>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					position="bottom"
					variant="flat-icon"
					drawerHeaderText="DBControlPanel"
					brand={<DBControlPanelBrand data-logo="db-systel" />}
					flatIconNavigation={
						<DBControlPanelFlatIconNavigation>
							<DBControlPanelNavigation
								{...useTarget({
									angular: { 'data-x': 'workaround-angular' },
									default: {}
								})}
								aria-label="Flat Icon">
								<DBControlPanelNavigationItem icon="x_placeholder">
									<a href="#">Flat Icon</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem
									icon="x_placeholder"
									disabled>
									<a href="#">Flat Icon disabled</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigation>
						</DBControlPanelFlatIconNavigation>
					}></DBControlPanelMobile>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					position="bottom"
					variant="flat-icon"
					drawerHeaderText="DBControlPanel"
					brand={<DBControlPanelBrand data-logo="db-systel" />}
					flatIconNavigation={
						<DBControlPanelFlatIconNavigation noText>
							<DBControlPanelNavigation
								{...useTarget({
									angular: { 'data-x': 'workaround-angular' },
									default: {}
								})}
								aria-label="Flat Icon No Text">
								<DBControlPanelNavigationItem icon="x_placeholder">
									<a href="#">Flat Icon No Text</a>
								</DBControlPanelNavigationItem>
								<DBControlPanelNavigationItem
									icon="x_placeholder"
									disabled>
									<a href="#">Flat Icon No Text disabled</a>
								</DBControlPanelNavigationItem>
							</DBControlPanelNavigation>
						</DBControlPanelFlatIconNavigation>
					}></DBControlPanelMobile>
			</div>
		</Fragment>
	);
}
