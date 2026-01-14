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
			<DBInput data-density="functional" label="Label">
				Functional
			</DBInput>
			<DBInput data-density="regular" label="Label">
				(Default) Regular
			</DBInput>
			<DBInput data-density="expressive" label="Label">
				Expressive
			</DBInput>
		</Fragment>
	);
}
