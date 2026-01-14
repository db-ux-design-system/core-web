import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBIcon from '../icon.lite';
import { StorybookIconArgTypes } from './_icon.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookIconArgTypes
});

export default function IconDensity() {
	return (
		<Fragment>
			<DBIcon data-density="functional">Functional</DBIcon>
			<DBIcon data-density="regular">(Default) Regular</DBIcon>
			<DBIcon data-density="expressive">Expressive</DBIcon>
		</Fragment>
	);
}
