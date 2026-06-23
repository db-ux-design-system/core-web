import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Example - Length',
	storybookNames: ['MinLength', 'MaxLength', 'MinMaxLength'],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputExampleLength() {
	return (
		<Fragment>
			<DBInput
				label="Label"
				minLength={3}
				placeholder="MinLength"></DBInput>
			<DBInput
				label="Label"
				maxLength={5}
				placeholder="MaxLength"></DBInput>
			<DBInput
				label="Label"
				minLength={3}
				maxLength={5}
				placeholder="MinMaxLength"></DBInput>
		</Fragment>
	);
}
