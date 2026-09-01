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
			<ul>
				<DBNavigationItem
					data-density="functional"
					text="Functional"></DBNavigationItem>
			</ul>
			<ul>
				<DBNavigationItem
					data-density="regular"
					text="(Default) Regular"></DBNavigationItem>
			</ul>
			<ul>
				<DBNavigationItem
					data-density="expressive"
					text="Expressive"></DBNavigationItem>
			</ul>
		</Fragment>
	);
}
