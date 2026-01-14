import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCheckbox from '../checkbox.lite';
import { StorybookCheckboxArgTypes } from './_checkbox.arg.types';

useMetadata({
	storybookTitle: 'Validation',
	storybookNames: ['(Default) No validation', 'Invalid', 'Valid'],
	storybookArgTypes: StorybookCheckboxArgTypes
});

export default function CheckboxValidation() {
	return (
		<Fragment>
			<DBCheckbox name="Validation" validation="no-validation">
				(Default) No validation
			</DBCheckbox>
			<DBCheckbox
				name="Validation"
				validation="invalid"
				invalidMessage="Invalid Message">
				Invalid
			</DBCheckbox>
			<DBCheckbox
				name="Validation"
				validation="valid"
				validMessage="Valid message">
				Valid
			</DBCheckbox>
		</Fragment>
	);
}
