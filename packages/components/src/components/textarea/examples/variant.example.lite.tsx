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
			<DBTextarea label="Label" placeholder="(Default) Above" />
			<DBTextarea
				label="Label"
				variant="floating"
				value="Floating Label"
				placeholder="Floating"
			/>
		</Fragment>
	);
}
