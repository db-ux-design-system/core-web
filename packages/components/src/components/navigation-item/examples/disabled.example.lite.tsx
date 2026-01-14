import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNavigationItem from '../navigation-item.lite';
import { StorybookNavigationItemArgTypes } from './_navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookNavigationItemArgTypes
});

export default function NavigationItemDisabled() {
	return (
		<Fragment>
			<ul className="nav-item-list">
				<DBNavigationItem disabled={false}>
					<a href="#">(Default) False</a>
				</DBNavigationItem>
			</ul>
			<ul className="nav-item-list">
				<DBNavigationItem disabled={true}>
					<a href="#">True</a>
				</DBNavigationItem>
			</ul>
		</Fragment>
	);
}
