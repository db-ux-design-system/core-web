import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Show Required Asterisk',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputShowRequiredAsterisk() {
	return (
		<Fragment>
			<DBInput
				label="Label"
				required={true}
				showRequiredAsterisk={true}
				placeholder="(Default) True"></DBInput>
			<DBInput
				label="Label"
				required={true}
				showRequiredAsterisk={false}
				placeholder="False"></DBInput>
		</Fragment>
	);
}
