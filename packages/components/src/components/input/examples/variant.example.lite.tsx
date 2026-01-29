import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: ['(Default) Above', 'Floating'],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputVariant() {
	return (
		<Fragment>
			<DBInput label="Label" placeholder="(Default) Above"></DBInput>
			<DBInput
				label="Label"
				variant="floating"
				placeholder="Floating"
				value="Floating"></DBInput>
		</Fragment>
	);
}
