import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCheckbox from '../checkbox.lite';
import { StorybookCheckboxArgTypes } from './_checkbox.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['(Default) Medium', 'Small'],
	storybookArgTypes: StorybookCheckboxArgTypes
});

export default function CheckboxSize() {
	return (
		<Fragment>
			<DBCheckbox name="Size">(Default) Medium</DBCheckbox>
			<DBCheckbox name="Size" size="small">
				Small
			</DBCheckbox>
		</Fragment>
	);
}
