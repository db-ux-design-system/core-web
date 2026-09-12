import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBControlPanelBrand from '../control-panel-brand.lite';
import { StorybookControlPanelBrandArgTypes } from './_control-panel-brand.arg.types';

useMetadata({
	storybookTitle: 'Content',
	storybookNames: [
		'Single Line',
		'With Second Line',
		'Strong Single Line',
		'Strong With Second Line',
		'With Badge'
	],
	storybookArgTypes: StorybookControlPanelBrandArgTypes
});

export default function ControlPanelBrandContent() {
	return (
		<Fragment>
			<div>
				<DBControlPanelBrand>Single Line</DBControlPanelBrand>
			</div>
			<div>
				<DBControlPanelBrand secondLine="Second Line">
					With Second Line
				</DBControlPanelBrand>
			</div>
			<div>
				<DBControlPanelBrand>
					<strong>Strong Single Line</strong>
				</DBControlPanelBrand>
			</div>
			<div>
				<DBControlPanelBrand secondLine="Second Line">
					<strong>Strong With Second Line</strong>
				</DBControlPanelBrand>
			</div>
			<div>
				<DBControlPanelBrand endSlot={<DBBadge>New</DBBadge>}>
					With Badge
				</DBControlPanelBrand>
			</div>
		</Fragment>
	);
}
