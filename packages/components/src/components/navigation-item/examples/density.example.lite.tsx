import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNavigationItem from '../navigation-item.lite';
import { StorybookNavigationItemArgTypes } from './_navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookNavigationItemArgTypes
});

export default function NavigationItemDensity() {
	return (
		<Fragment>
			<ul className="nav-item-list">
				<DBNavigationItem data-density="functional">
					<a href="#">Functional</a>
				</DBNavigationItem>
			</ul>
			<ul className="nav-item-list">
				<DBNavigationItem data-density="regular">
					<a href="#">(Default) Regular</a>
				</DBNavigationItem>
			</ul>
			<ul className="nav-item-list">
				<DBNavigationItem data-density="expressive">
					<a href="#">Expressive</a>
				</DBNavigationItem>
			</ul>
		</Fragment>
	);
}
