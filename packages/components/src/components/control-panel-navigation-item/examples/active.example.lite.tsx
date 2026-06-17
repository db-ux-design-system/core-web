import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBControlPanelNavigationItem from '../control-panel-navigation-item.lite';
import { StorybookControlPanelNavigationItemArgTypes } from './_control-panel-navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Active',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookControlPanelNavigationItemArgTypes
});

export default function ControlPanelNavigationItemActive() {
	return (
		<Fragment>
			<ul>
				<DBControlPanelNavigationItem active={false}>
					<a href="#">(Default) False</a>
				</DBControlPanelNavigationItem>
			</ul>
			<ul>
				<DBControlPanelNavigationItem active={true}>
					<a href="#">True</a>
				</DBControlPanelNavigationItem>
			</ul>
		</Fragment>
	);
}
