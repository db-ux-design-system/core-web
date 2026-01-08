import { Fragment, useMetadata } from '@builder.io/mitosis';
import { fn } from '../../../shared/examples';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', 'Regular', 'Expressive'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonDensity() {
	return (
		<Fragment>
			<DBButton onClick={fn} data-density="functional">
				Functional
			</DBButton>
			<DBButton onClick={fn} data-density="regular">
				(Default) Regular
			</DBButton>
			<DBButton onClick={fn} data-density="expressive">
				Expressive
			</DBButton>
		</Fragment>
	);
}
