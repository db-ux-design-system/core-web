import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNavigationItemGroup from '../../navigation-item-group/navigation-item-group.lite';
import DBNavigationItem from '../navigation-item.lite';
import { StorybookNavigationItemArgTypes } from './_navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Wrap',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookNavigationItemArgTypes
});

export default function NavigationItemWrap() {
	return (
		<Fragment>
			<ul>
				<DBNavigationItem>
					<a href="#">No Wrap (Default)</a>
				</DBNavigationItem>
			</ul>
			<ul
				style={{
					width: '200px'
				}}>
				<DBNavigationItemGroup
					text="This is a very long text that is broken into multiple lines."
					icon="x_placeholder"
					showIcon={true}
					wrap={true}>
					<DBNavigationItemGroup text="Sub-Navi-Item 1">
						<DBNavigationItem>
							<a href="#">Sub-Sub-Navi-Item 1</a>
						</DBNavigationItem>
						<DBNavigationItem>
							<a href="#">Sub-Sub-Navi-Item 2</a>
						</DBNavigationItem>
					</DBNavigationItemGroup>
					<DBNavigationItem>
						<a href="#">Sub-Navi-Item 2</a>
					</DBNavigationItem>
				</DBNavigationItemGroup>
			</ul>
		</Fragment>
	);
}
