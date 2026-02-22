import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInput from '../input.lite';
import { StorybookInputArgTypes } from './_input.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookInputArgTypes
});

export default function InputDensity() {
	return (
		<Fragment>
			<DBInput
				data-density="functional"
				label="Label"
				placeholder="Functional"></DBInput>
			<DBInput
				data-density="regular"
				label="Label"
				placeholder="(Default) Regular"></DBInput>
			<DBInput
				data-density="expressive"
				label="Label"
				placeholder="Expressive"></DBInput>
		</Fragment>
	);
}
