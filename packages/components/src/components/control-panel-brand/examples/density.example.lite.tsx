import { Fragment, useMetadata } from '@builder.io/mitosis';
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
				<DBControlPanelBrand data-density="functional">
					Functional
				</DBControlPanelBrand>
			</div>
			<div>
				<DBControlPanelBrand data-density="regular">
					(Default) Regular
				</DBControlPanelBrand>
			</div>
			<div>
				<DBControlPanelBrand data-density="expressive">
					Expressive
				</DBControlPanelBrand>
			</div>
		</Fragment>
	);
}
