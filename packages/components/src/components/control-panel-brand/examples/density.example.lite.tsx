import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBControlPanelBrand from '../control-panel-brand.lite';
import { StorybookControlPanelBrandArgTypes } from './_control-panel-brand.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookControlPanelBrandArgTypes
});

export default function ControlPanelBrandDensity() {
	return (
		<Fragment>
			<div>
				<DBInfotext semantic="informational" size="small" icon="none">
					Functional
				</DBInfotext>
				<DBControlPanelBrand data-density="functional" />
			</div>
			<div>
				<DBInfotext semantic="informational" size="small" icon="none">
					(Default) Regular
				</DBInfotext>
				<DBControlPanelBrand data-density="regular" />
			</div>
			<div>
				<DBInfotext semantic="informational" size="small" icon="none">
					Expressive
				</DBInfotext>
				<DBControlPanelBrand data-density="expressive" />
			</div>
		</Fragment>
	);
}
