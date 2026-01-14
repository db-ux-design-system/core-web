import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCheckbox from '../checkbox.lite';
import { StorybookCheckboxArgTypes } from './_checkbox.arg.types';

useMetadata({
	storybookTitle: 'Indeterminate',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookCheckboxArgTypes
});

export default function CheckboxIndeterminate() {
	return (
		<Fragment>
			<DBCheckbox name="Indeterminate" indeterminate={false}>
				(Default) False
			</DBCheckbox>
			<DBCheckbox name="Indeterminate" indeterminate={true}>
				True
			</DBCheckbox>
		</Fragment>
	);
}
