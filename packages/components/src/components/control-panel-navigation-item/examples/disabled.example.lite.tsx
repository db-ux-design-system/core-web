import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBControlPanelNavigationItem from '../control-panel-navigation-item.lite';
import { StorybookControlPanelNavigationItemArgTypes } from './_control-panel-navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookControlPanelNavigationItemArgTypes
});

export default function ControlPanelNavigationItemDisabled() {
	return (
		<Fragment>
			<ul>
				<DBControlPanelNavigationItem disabled={false}>
					<a href="#">(Default) False</a>
				</DBControlPanelNavigationItem>
			</ul>
			<ul>
				<DBControlPanelNavigationItem disabled={true}>
					<a href="#">True</a>
				</DBControlPanelNavigationItem>
			</ul>
		</Fragment>
	);
}
