import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTag from '../tag.lite';
import { StorybookTagArgTypes } from './_tag.arg.types';

useMetadata({
	storybookTitle: 'No Text',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookTagArgTypes
});

export default function TagNoText() {
	return (
		<Fragment>
			<DBTag icon="x_placeholder">(Default) False</DBTag>
			<DBTag icon="x_placeholder" noText={true}>
				True
			</DBTag>
		</Fragment>
	);
}
