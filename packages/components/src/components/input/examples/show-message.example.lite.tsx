import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Show Message',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputShowMessage() {
	return (
		<Fragment>
			<DBInput
				label="Label"
				message="Message"
				showMessage={false}
				placeholder="(Default) False"></DBInput>
			<DBInput
				label="Label"
				message="Message"
				showMessage={true}
				placeholder="True"></DBInput>
		</Fragment>
	);
}
