import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTextarea from '../textarea.lite';
import { StorybookTextareaArgTypes } from './_textarea.arg.types';

useMetadata({
	storybookTitle: 'Validation',
	storybookNames: ['(Default) No validation', 'Invalid', 'Valid'],
	storybookArgTypes: StorybookTextareaArgTypes
});

export default function TextareaValidation() {
	return (
		<Fragment>
			<DBTextarea
				label="Label"
				validation="no-validation"
				placeholder="(Default) No validation"
			/>
			<DBTextarea
				label="Label"
				validation="invalid"
				invalidMessage="Invalid Message"
				placeholder="Invalid"
			/>
			<DBTextarea
				label="Label"
				validation="valid"
				validMessage="Valid message"
				placeholder="Valid"
			/>
		</Fragment>
	);
}
