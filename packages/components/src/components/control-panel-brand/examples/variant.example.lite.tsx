import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBControlPanelBrand from '../control-panel-brand.lite';
import { StorybookControlPanelBrandArgTypes } from './_control-panel-brand.arg.types';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: ['(Default) Show Icon', 'No Icon', 'With Text'],
	storybookArgTypes: StorybookControlPanelBrandArgTypes
});

export default function ControlPanelBrandVariant() {
	return (
		<Fragment>
			<DBControlPanelBrand>(Default) Show Icon</DBControlPanelBrand>
			<DBControlPanelBrand showIcon={false}>No Icon</DBControlPanelBrand>
			<DBControlPanelBrand text="With Text" />
		</Fragment>
	);
}
