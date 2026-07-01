import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBControlPanelFlatIcon from '../control-panel-flat-icon.lite';
import { StorybookControlPanelFlatIconArgTypes } from './_control-panel-flat-icon.arg.types';

useMetadata({
	storybookTitle: 'No Text',
	storybookNames: ['(Default) With Text', 'No Text'],
	storybookArgTypes: StorybookControlPanelFlatIconArgTypes
});

export default function ControlPanelFlatIconNoText() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelFlatIcon>
					<DBControlPanelNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="(Default) With Text">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">(Default) With Text</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">(Default) With Text</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">(Default) With Text</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelFlatIcon>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelFlatIcon noText>
					<DBControlPanelNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="No Text">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">No Text</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">No Text</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">No Text</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelFlatIcon>
			</div>
		</Fragment>
	);
}
