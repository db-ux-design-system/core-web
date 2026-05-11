import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Show Label',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputShowLabel() {
	return (
		<Fragment>
			<DBInput
				label="Label"
				showLabel={true}
				placeholder="(Default) True"></DBInput>
			<DBInput
				label="Label"
				showLabel={false}
				placeholder="False"></DBInput>
		</Fragment>
	);
}
