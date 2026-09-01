import { useMetadata } from '@builder.io/mitosis';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Validation',
	storybookNames: ['(Default) No validation', 'Invalid', 'Valid'],
	storybookArgTypes: StorybookRadioArgTypes
});

export default function RadioValidation() {
	return (
		<div role="radiogroup" aria-label="Validation">
			<DBRadio name="No validation" validation="no-validation">
				(Default) No validation
			</DBRadio>
			<DBRadio name="invalid" validation="invalid">
				Invalid
			</DBRadio>
			<DBRadio name="valid" validation="valid" checked={true}>
				Valid
			</DBRadio>
		</div>
	);
}
