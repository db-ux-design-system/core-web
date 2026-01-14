import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBrand from '../../brand/brand.lite';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../../navigation/navigation.lite';
import DBHeader from '../header.lite';
import { StorybookHeaderArgTypes } from './_header.arg.types';

useMetadata({
	storybookTitle: 'Examples',
	storybookNames: [
		'With Application Name + Navigation',
		'Without Navigation',
		'Without Application Name',
		'Without Application Name + Navigation'
	],
	storybookArgTypes: StorybookHeaderArgTypes
});

export default function HeaderExamples() {
	return (
		<Fragment>
			<DBHeader brand={<DBBrand>Brand</DBBrand>}>
				<DBNavigation>
					<DBNavigationItem>
						<a href="#">With Application Name + Navigation</a>
					</DBNavigationItem>
				</DBNavigation>
			</DBHeader>
			<DBHeader brand={<DBBrand>Brand</DBBrand>}></DBHeader>
			<DBHeader brand={<DBBrand></DBBrand>}>
				<DBNavigation>
					<DBNavigationItem>
						<a href="#">Without Application Name</a>
					</DBNavigationItem>
				</DBNavigation>
			</DBHeader>
			<DBHeader brand={<DBBrand></DBBrand>}></DBHeader>
		</Fragment>
	);
}
