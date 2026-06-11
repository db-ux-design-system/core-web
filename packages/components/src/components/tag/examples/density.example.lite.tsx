import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTag from '../tag.lite';
import { StorybookTagArgTypes } from './_tag.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookTagArgTypes
});

export default function TagDensity() {
	return (
		<Fragment>
			<DBTag data-density="functional">Functional</DBTag>
			<DBTag data-density="regular">(Default) Regular</DBTag>
			<DBTag data-density="expressive">Expressive</DBTag>
		</Fragment>
	);
}
