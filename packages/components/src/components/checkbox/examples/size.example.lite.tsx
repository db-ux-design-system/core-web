import { useMetadata } from '@builder.io/mitosis';
import DBDivider from '../../divider/divider.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBCheckbox from '../checkbox.lite';
import { StorybookCheckboxArgTypes } from './_checkbox.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['(Default) Medium', 'Small'],
	storybookArgTypes: StorybookCheckboxArgTypes
});

export default function CheckboxSize() {
	return (
		<div role="group" aria-label="Size">
			<DBCheckbox name="Size">(Default) Medium</DBCheckbox>
			<DBCheckbox name="Size" size="small">
				Small
			</DBCheckbox>

			<DBDivider width="full"></DBDivider>

			<DBInfotext size="small" semantic="informational">
				Next Generation
			</DBInfotext>
			<DBCheckbox name="Size" size="3xs">
				3XS
			</DBCheckbox>
			<DBCheckbox name="Size" size="2xs">
				2XS
			</DBCheckbox>
			<DBCheckbox name="Size" size="xs">
				XS
			</DBCheckbox>
			<DBCheckbox name="Size" size="sm">
				SM
			</DBCheckbox>
			<DBCheckbox name="Size" size="md">
				MD
			</DBCheckbox>
			<DBCheckbox name="Size" size="lg">
				LG
			</DBCheckbox>
			<DBCheckbox name="Size" size="xl">
				XL
			</DBCheckbox>
			<DBCheckbox name="Size" size="2xl">
				2XL
			</DBCheckbox>
		</div>
	);
}
