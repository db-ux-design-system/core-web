import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBControlPanelBrand from '../control-panel-brand.lite';
import { StorybookControlPanelBrandArgTypes } from './_control-panel-brand.arg.types';

useMetadata({
	storybookTitle: 'Variants',
	storybookNames: ['(Default) With Logo', 'Logo Variant', 'As Link'],
	storybookArgTypes: StorybookControlPanelBrandArgTypes
});

export default function ControlPanelBrandVariant() {
	return (
		<Fragment>
			<div>
				<DBInfotext semantic="informational" size="small" icon="none">
					(Default) With Logo
				</DBInfotext>
				<DBControlPanelBrand>Functional</DBControlPanelBrand>
			</div>
			<div>
				<DBControlPanelBrand data-logo="db-systel">
					Logo Variant
				</DBControlPanelBrand>
			</div>
			<div>
				<DBControlPanelBrand>
					<a href="#"> As Link</a>
				</DBControlPanelBrand>
			</div>
		</Fragment>
	);
}
