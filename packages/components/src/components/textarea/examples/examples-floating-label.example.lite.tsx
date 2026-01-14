import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTextarea from '../textarea.lite';
import { StorybookTextareaArgTypes } from './_textarea.arg.types';

useMetadata({
	storybookTitle: 'Examples Floating Label',
	storybookNames: [
		'(Default) Empty',
		'Filled',
		'Disabled',
		'Readonly - Filled'
	],
	storybookArgTypes: StorybookTextareaArgTypes
});

export default function TextareaExamplesFloatingLabel() {
	return (
		<Fragment>
			<DBTextarea label="Label" variant="floating">
				(Default) Empty
			</DBTextarea>
			<DBTextarea label="Label" value="Filled" variant="floating">
				Filled
			</DBTextarea>
			<DBTextarea label="Label" disabled={true} variant="floating">
				Disabled
			</DBTextarea>
			<DBTextarea
				label="Label"
				value="Readonly - Filled"
				readOnly={true}
				variant="floating">
				Readonly - Filled
			</DBTextarea>
		</Fragment>
	);
}
