import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBControlPanelNavigationItem from '../control-panel-navigation-item.lite';
import { StorybookControlPanelNavigationItemArgTypes } from './_control-panel-navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Show Icon',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookControlPanelNavigationItemArgTypes
});

export default function ControlPanelNavigationItemShowIcon() {
	return (
		<Fragment>
			<ul>
				<DBControlPanelNavigationItem
					icon="x_placeholder"
					showIcon={false}>
					<a href="#">(Default) False</a>
				</DBControlPanelNavigationItem>
			</ul>
			<ul>
				<DBControlPanelNavigationItem
					icon="x_placeholder"
					showIcon={true}>
					<a href="#">True</a>
				</DBControlPanelNavigationItem>
			</ul>
		</Fragment>
	);
}
