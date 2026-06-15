import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelFlatIconNavigation from '../../control-panel-flat-icon-navigation/control-panel-flat-icon-navigation.lite';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../../navigation/navigation.lite';
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
					drawerHeadlinePlain="DBControlPanel"
					brand={
						<DBControlPanelBrand>
							DBControlPanel
						</DBControlPanelBrand>
					}>
					<DBNavigation
						{...useTarget({
							angular: { 'data-x': 'workaround-angular' },
							default: {}
						})}
						aria-label="(Default) Drawer">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">(Default) Drawer</a>
						</DBNavigationItem>
						<DBNavigationItem icon="x_placeholder" disabled>
							<a href="#">(Default) Drawer disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBControlPanelMobile>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					position="bottom"
					variant="flat-icon"
					drawerHeadlinePlain="DBControlPanel"
					brand={
						<DBControlPanelBrand>
							DBControlPanel
						</DBControlPanelBrand>
					}
					flatIconNavigation={
						<DBControlPanelFlatIconNavigation>
							<DBNavigation
								{...useTarget({
									angular: { 'data-x': 'workaround-angular' },
									default: {}
								})}
								aria-label="Flat Icon">
								<DBNavigationItem icon="x_placeholder">
									<a href="#">Flat Icon</a>
								</DBNavigationItem>
								<DBNavigationItem icon="x_placeholder" disabled>
									<a href="#">Flat Icon disabled</a>
								</DBNavigationItem>
							</DBNavigation>
						</DBControlPanelFlatIconNavigation>
					}></DBControlPanelMobile>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					position="bottom"
					variant="flat-icon"
					drawerHeadlinePlain="DBControlPanel"
					brand={
						<DBControlPanelBrand>
							DBControlPanel
						</DBControlPanelBrand>
					}
					flatIconNavigation={
						<DBControlPanelFlatIconNavigation noText>
							<DBNavigation
								{...useTarget({
									angular: { 'data-x': 'workaround-angular' },
									default: {}
								})}
								aria-label="Flat Icon No Text">
								<DBNavigationItem icon="x_placeholder">
									<a href="#">Flat Icon No Text</a>
								</DBNavigationItem>
								<DBNavigationItem icon="x_placeholder" disabled>
									<a href="#">Flat Icon No Text disabled</a>
								</DBNavigationItem>
							</DBNavigation>
						</DBControlPanelFlatIconNavigation>
					}></DBControlPanelMobile>
			</div>
		</Fragment>
	);
}
