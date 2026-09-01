import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTag from '../tag.lite';
import { StorybookTagArgTypes } from './_tag.arg.types';

useMetadata({
	storybookTitle: 'Emphasis',
	storybookNames: ['(Default) Weak', 'Strong'],
	storybookArgTypes: StorybookTagArgTypes
});

export default function TagEmphasis() {
	return (
		<Fragment>
			<DBTag>(Default) Weak</DBTag>
			<DBTag emphasis="strong">Strong</DBTag>
		</Fragment>
	);
}
