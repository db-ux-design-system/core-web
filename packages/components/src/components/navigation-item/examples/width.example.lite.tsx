import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNavigationItem from '../navigation-item.lite';
import { StorybookNavigationItemArgTypes } from './_navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Width',
	storybookNames: ['(Default) Auto', 'Full'],
	storybookArgTypes: StorybookNavigationItemArgTypes
});

export default function NavigationItemWidth() {
	return (
		<Fragment>
			<ul className="nav-item-list">
				<DBNavigationItem>
					<a href="#">(Default) Auto</a>
				</DBNavigationItem>
			</ul>
			<ul className="nav-item-list">
				<DBNavigationItem width="full">
					<a href="#">Full</a>
				</DBNavigationItem>
			</ul>
		</Fragment>
	);
}
