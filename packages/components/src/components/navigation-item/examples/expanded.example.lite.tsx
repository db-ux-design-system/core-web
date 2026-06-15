import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNavigationItemGroup from '../../navigation-item-group/navigation-item-group.lite';
import DBNavigationItem from '../navigation-item.lite';
import { StorybookNavigationItemArgTypes } from './_navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Expanded',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookNavigationItemArgTypes
});

export default function NavigationItemExpanded() {
	return (
		<Fragment>
			<ul>
				<DBNavigationItemGroup text="(Default) False">
					<DBNavigationItemGroup text="Also a navigation item with longer label">
						<DBNavigationItem>
							<a href="#">Navigation-Item 2</a>
						</DBNavigationItem>
					</DBNavigationItemGroup>
					<DBNavigationItem>
						<a href="#">Navigation-Item 1</a>
					</DBNavigationItem>
				</DBNavigationItemGroup>
			</ul>
			<ul>
				<DBNavigationItemGroup text="True" expanded={true}>
					<DBNavigationItemGroup text="Also a navigation item with longer label">
						<DBNavigationItem>
							<a href="#">Navigation-Item 2</a>
						</DBNavigationItem>
					</DBNavigationItemGroup>
					<DBNavigationItem>
						<a href="#">Navigation-Item 1</a>
					</DBNavigationItem>
				</DBNavigationItemGroup>
			</ul>
		</Fragment>
	);
}
