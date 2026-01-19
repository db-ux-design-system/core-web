import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Show Icon Leading',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputShowIconLeading() {
	return (
		<Fragment>
			<DBInput
				label="False"
				icon="x_placeholder"
				showIcon={false}
				placeholder="(Default) False"></DBInput>
			<DBInput
				label="True"
				icon="x_placeholder"
				showIcon={true}
				placeholder="True"></DBInput>
		</Fragment>
	);
}
