import { Fragment, useMetadata } from '@builder.io/mitosis';
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
			<DBButton data-density="functional">Functional</DBButton>
			<DBButton data-density="regular">(Default) Regular</DBButton>
			<DBButton data-density="expressive">Expressive</DBButton>
		</Fragment>
	);
}
