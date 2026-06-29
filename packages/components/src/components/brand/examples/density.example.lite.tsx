import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBrand from '../brand.lite';
import { StorybookBrandArgTypes } from './_brand.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookBrandArgTypes
});

export default function BrandDensity() {
	return (
		<Fragment>
			<DBBrand data-density="functional">Functional</DBBrand>
			<DBBrand data-density="regular">(Default) Regular</DBBrand>
			<DBBrand data-density="expressive">Expressive</DBBrand>
		</Fragment>
	);
}
