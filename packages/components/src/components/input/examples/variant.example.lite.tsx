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
			<DBInput label="Label">(Default) Above</DBInput>
			<DBInput label="Label" variant="floating" value="Floating">
				Floating
			</DBInput>
		</Fragment>
	);
}
