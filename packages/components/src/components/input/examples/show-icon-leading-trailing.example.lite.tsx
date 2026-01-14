import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Show Icon Leading + Trailing',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputShowIconLeadingTrailing() {
	return (
		<Fragment>
			<DBInput
				label="False"
				icon="x_placeholder"
				showIcon={false}
				iconTrailing="x_placeholder"
				showIconTrailing={false}>
				(Default) False
			</DBInput>
			<DBInput
				label="True"
				icon="x_placeholder"
				showIcon={true}
				iconTrailing="x_placeholder"
				showIconTrailing={true}>
				True
			</DBInput>
		</Fragment>
	);
}
