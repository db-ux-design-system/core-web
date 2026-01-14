import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBBrand from '../brand.lite';
import { StorybookBrandArgTypes } from './_brand.arg.types';

useMetadata({
	storybookTitle: 'Variants',
	storybookNames: ['(Default) With Logo', 'No Logo', 'Custom Logo'],
	storybookArgTypes: StorybookBrandArgTypes
});

export default function BrandVariants() {
	return (
		<Fragment>
			<DBBrand>(Default) With Logo</DBBrand>
			<DBBrand hideLogo={true}>No Logo</DBBrand>
			<DBBrand hideLogo={true}>
				<img
					src={`${process?.env?.NEXT_PUBLIC_BASE_PATH ?? `/${useTarget({ angular: 'angular', react: 'react', vue: 'vue', stencil: 'stencil' })}-showcase`}/assets/images/placeholder.jpg`}
					alt="this is a fancy placeholder logo"
				/>
				Custom Logo
			</DBBrand>
		</Fragment>
	);
}
