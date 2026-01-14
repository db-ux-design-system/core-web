import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Required',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputRequired() {
	return (
		<Fragment>
			<DBInput label="Label" required={false}>
				(Default) False
			</DBInput>
			<DBInput label="Label" required={true}>
				True
			</DBInput>
		</Fragment>
	);
}
