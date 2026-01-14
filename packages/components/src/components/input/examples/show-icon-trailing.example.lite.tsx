import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Show Icon Trailing',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputShowIconTrailing() {
	return (
		<Fragment>
			<DBInput
				label="False"
				iconTrailing="x_placeholder"
				showIconTrailing={false}>
				(Default) False
			</DBInput>
			<DBInput
				label="True"
				iconTrailing="x_placeholder"
				showIconTrailing={true}>
				True
			</DBInput>
		</Fragment>
	);
}
