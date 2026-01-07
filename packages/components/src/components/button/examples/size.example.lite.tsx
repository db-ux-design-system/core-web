import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['Medium', 'Small'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonSize() {
	return (
		<Fragment>
			<DBButton size="medium">(Default) Medium</DBButton>
			<DBButton size="small">Small</DBButton>
		</Fragment>
	);
}
