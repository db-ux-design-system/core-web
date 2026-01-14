import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Readonly',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputReadonly() {
	return (
		<Fragment>
			<DBInput label="Label" readOnly={false}>
				(Default) False
			</DBInput>
			<DBInput label="Label" readOnly={true}>
				True
			</DBInput>
		</Fragment>
	);
}
