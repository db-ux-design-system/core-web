import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

useMetadata({
	storybookTitle: 'No Text',
	storybookNames: ['False', 'True'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonNoText() {
	return (
		<Fragment>
			<DBButton icon="x_placeholder">(Default) False</DBButton>
			<DBButton icon="x_placeholder" noText={true}>
				True
			</DBButton>
		</Fragment>
	);
}
