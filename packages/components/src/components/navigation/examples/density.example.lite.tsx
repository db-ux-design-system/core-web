import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../navigation.lite';
import { StorybookNavigationArgTypes } from './_navigation.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookNavigationArgTypes
});

export default function NavigationDensity() {
	return (
		<Fragment>
			<DBNavigation data-density="functional">
				<DBNavigationItem>
					<a href="#">Item 1</a>
				</DBNavigationItem>
				<DBNavigationItem>
					<a href="#">Item 2</a>
				</DBNavigationItem>
			</DBNavigation>
			<DBNavigation data-density="regular">
				<DBNavigationItem>
					<a href="#">Item 1</a>
				</DBNavigationItem>
				<DBNavigationItem>
					<a href="#">Item 2</a>
				</DBNavigationItem>
			</DBNavigation>
			<DBNavigation data-density="expressive">
				<DBNavigationItem>
					<a href="#">Item 1</a>
				</DBNavigationItem>
				<DBNavigationItem>
					<a href="#">Item 2</a>
				</DBNavigationItem>
			</DBNavigation>
		</Fragment>
	);
}
