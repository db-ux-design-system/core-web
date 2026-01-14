import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTextarea from '../textarea.lite';
import { StorybookTextareaArgTypes } from './_textarea.arg.types';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: ['(Default) Above', 'Floating'],
	storybookArgTypes: StorybookTextareaArgTypes
});

export default function TextareaVariant() {
	return (
		<Fragment>
			<DBTextarea label="Label">(Default) Above</DBTextarea>
			<DBTextarea label="Label" variant="floating" value="Floating Label">
				Floating
			</DBTextarea>
		</Fragment>
	);
}
