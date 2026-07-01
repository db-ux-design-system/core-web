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
					As Link
				</DBInfotext>
				<DBControlPanelBrand>
					<a href="#">Home</a>
				</DBControlPanelBrand>
			</div>
		</Fragment>
	);
}
