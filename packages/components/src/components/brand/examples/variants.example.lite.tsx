import {
	Fragment,
	useMetadata,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import DBBrand from '../brand.lite';
import { StorybookBrandArgTypes } from './_brand.arg.types';

useMetadata({
	storybookTitle: 'Variants',
	storybookNames: ['(Default) With Logo', 'No Logo', 'Custom Logo'],
	storybookArgTypes: StorybookBrandArgTypes
});

export default function BrandVariants() {
	const state = useStore({
		getImage() {
			const basePath: string | undefined = useTarget({
				react: process?.env?.['NEXT_PUBLIC_BASE_PATH'],
				default: undefined
			});
			const showcase = useTarget({
				angular: 'angular',
				react: 'react',
				vue: 'vue',
				stencil: 'stencil'
			});
			const path = basePath ? basePath : `/${showcase}-showcase`;
			return `${path}/assets/images/placeholder.jpg`;
		}
	});

	return (
		<Fragment>
			<DBBrand>(Default) With Logo</DBBrand>
			<DBBrand hideLogo={true}>No Logo</DBBrand>
			<DBBrand hideLogo={true}>
				<img
					src={state.getImage()}
					alt="this is a fancy placeholder logo"
				/>
				Custom Logo
			</DBBrand>
		</Fragment>
	);
}
