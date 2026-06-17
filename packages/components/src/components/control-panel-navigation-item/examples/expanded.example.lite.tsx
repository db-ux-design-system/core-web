import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBControlPanelNavigationItemGroup from '../../control-panel-navigation-item-group/control-panel-navigation-item-group.lite';
import DBControlPanelNavigationItem from '../control-panel-navigation-item.lite';
import { StorybookControlPanelNavigationItemArgTypes } from './_control-panel-navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Expanded',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookControlPanelNavigationItemArgTypes
});

export default function ControlPanelNavigationItemExpanded() {
	return (
		<Fragment>
			<ul>
				<DBControlPanelNavigationItemGroup text="(Default) False">
					<DBControlPanelNavigationItemGroup text="Also a navigation item with longer label">
						<DBControlPanelNavigationItem>
							<a href="#">Navigation-Item 2</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigationItemGroup>
					<DBControlPanelNavigationItem>
						<a href="#">Navigation-Item 1</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigationItemGroup>
			</ul>
			<ul>
				<DBControlPanelNavigationItemGroup text="True" expanded={true}>
					<DBControlPanelNavigationItemGroup text="Also a navigation item with longer label">
						<DBControlPanelNavigationItem>
							<a href="#">Navigation-Item 2</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigationItemGroup>
					<DBControlPanelNavigationItem>
						<a href="#">Navigation-Item 1</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigationItemGroup>
			</ul>
		</Fragment>
	);
}
