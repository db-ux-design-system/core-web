import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputDisabled() {
	return (
		<Fragment>
			<DBInput label="Label" disabled={false}>
				(Default) False
			</DBInput>
			<DBInput label="Label" disabled={true}>
				True
			</DBInput>
		</Fragment>
	);
}
