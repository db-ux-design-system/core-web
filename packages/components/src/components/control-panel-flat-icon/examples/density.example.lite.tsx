import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBControlPanelFlatIcon from '../control-panel-flat-icon.lite';
import { StorybookControlPanelFlatIconArgTypes } from './_control-panel-flat-icon.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', 'Regular', 'Expressive'],
	storybookArgTypes: StorybookControlPanelFlatIconArgTypes
});

export default function ControlPanelFlatIconDensity() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelFlatIcon data-density="functional">
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
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Functional</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Functional</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelFlatIcon>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelFlatIcon data-density="regular">
					<DBControlPanelNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="Regular">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Regular</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Regular</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Regular</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelFlatIcon>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelFlatIcon data-density="expressive">
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
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Expressive</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Expressive</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelFlatIcon>
			</div>
		</Fragment>
	);
}
