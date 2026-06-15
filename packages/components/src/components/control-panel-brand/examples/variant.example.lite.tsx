import {
	Fragment,
	useMetadata,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBControlPanelBrand from '../control-panel-brand.lite';
import { StorybookControlPanelBrandArgTypes } from './_control-panel-brand.arg.types';

useMetadata({
	storybookTitle: 'Variants',
	storybookNames: ['(Default) With Logo', 'Logo Variant', 'Custom Logo'],
	storybookArgTypes: StorybookControlPanelBrandArgTypes
});

export default function ControlPanelBrandVariant() {
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
			<div>
				<DBInfotext semantic="informational" size="small" icon="none">
					(Default) With Logo
				</DBInfotext>
				<DBControlPanelBrand />
			</div>
			<div>
				<DBInfotext semantic="informational" size="small" icon="none">
					Logo Variant
				</DBInfotext>
				<DBControlPanelBrand data-logo="db-systel" />
			</div>
			<div>
				<DBInfotext semantic="informational" size="small" icon="none">
					Custom Logo
				</DBInfotext>
				<DBControlPanelBrand>
					<img
						src={state.getImage()}
						alt="this is a fancy placeholder logo"
					/>
				</DBControlPanelBrand>
			</div>
		</Fragment>
	);
}
