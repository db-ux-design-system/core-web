import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Example Floating Label',
	storybookNames: [
		'(Default) Empty',
		'Filled',
		'Disabled',
		'Readonly - Filled',
		'Invalid'
	],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputExampleFloatingLabel() {
	return (
		<Fragment>
			<DBInput label="Label" variant="floating">
				(Default) Empty
			</DBInput>
			<DBInput label="Label" value="Filled" variant="floating">
				Filled
			</DBInput>
			<DBInput label="Label" disabled={true} variant="floating">
				Disabled
			</DBInput>
			<DBInput
				label="Label"
				value="Readonly - Filled"
				readOnly={true}
				variant="floating">
				Readonly - Filled
			</DBInput>
			<DBInput
				label="Label"
				validation="invalid"
				invalidMessage="Invalid Message"
				variant="floating">
				Invalid
			</DBInput>
		</Fragment>
	);
}
