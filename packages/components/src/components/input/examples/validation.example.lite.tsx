import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Validation',
	storybookNames: ['(Default) No validation', 'Invalid', 'Valid'],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputValidation() {
	return (
		<Fragment>
			<DBInput
				label="Label"
				validation="no-validation"
				placeholder="(Default) No validation"></DBInput>
			<DBInput
				label="Label"
				validation="invalid"
				invalidMessage="Invalid Message"
				placeholder="Invalid"></DBInput>
			<DBInput
				label="Label"
				validation="valid"
				validMessage="Valid message"
				placeholder="Valid"></DBInput>
		</Fragment>
	);
}
