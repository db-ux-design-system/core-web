import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBControlPanelMobile from '../control-panel-mobile.lite';
import { StorybookControlPanelMobileArgTypes } from './_control-panel-mobile.arg.types';

useMetadata({
	storybookTitle: 'Custom Header',
	storybookNames: ['With action element in drawer header'],
	storybookArgTypes: StorybookControlPanelMobileArgTypes
});

export default function ControlPanelMobileCustomHeader() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					position="top"
					brand={<DBControlPanelBrand data-logo="db-systel" />}
					header={
						<DBDrawerHeader
							text="DBControlPanel"
							closeButtonText="Close"
							endSlot={
								<DBButton
									icon="moon"
									variant="ghost"
									noText
									type="button">
									Dark mode
								</DBButton>
							}
						/>
					}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: { 'data-x': 'workaround-angular' },
							default: {}
						})}
						aria-label="With action element in drawer header">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">With action element in drawer header</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelMobile>
			</div>
		</Fragment>
	);
}
