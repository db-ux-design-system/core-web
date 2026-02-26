import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTag from '../tag.lite';
import { StorybookTagArgTypes } from './_tag.arg.types';

useMetadata({
	storybookTitle: 'Show Icon',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookTagArgTypes
});

export default function TagShowIcon() {
	return (
		<Fragment>
			<DBTag icon="x_placeholder" showIcon={false}>
				(Default) False
			</DBTag>
			<DBTag icon="x_placeholder" showIcon={true}>
				True
			</DBTag>
		</Fragment>
	);
}
