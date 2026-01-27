import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'State',
	storybookNames: ['(Default) Empty', 'Filled'],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputState() {
	return (
		<Fragment>
			<DBInput label="Label" placeholder="(Default) Empty"></DBInput>
			<DBInput
				label="Label"
				value="Filled"
				placeholder="Filled"></DBInput>
		</Fragment>
	);
}
