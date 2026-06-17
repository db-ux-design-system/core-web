import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBControlPanelNavigationItem from '../control-panel-navigation-item.lite';
import { StorybookControlPanelNavigationItemArgTypes } from './_control-panel-navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookControlPanelNavigationItemArgTypes
});

export default function ControlPanelNavigationItemDensity() {
	return (
		<Fragment>
			<ul>
				<DBControlPanelNavigationItem data-density="functional">
					<a href="#">Functional</a>
				</DBControlPanelNavigationItem>
			</ul>
			<ul>
				<DBControlPanelNavigationItem data-density="regular">
					<a href="#">(Default) Regular</a>
				</DBControlPanelNavigationItem>
			</ul>
			<ul>
				<DBControlPanelNavigationItem data-density="expressive">
					<a href="#">Expressive</a>
				</DBControlPanelNavigationItem>
			</ul>
		</Fragment>
	);
}
