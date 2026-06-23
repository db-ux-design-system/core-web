import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTag from '../tag.lite';
import { StorybookTagArgTypes } from './_tag.arg.types';

useMetadata({
	storybookTitle: 'Overflow',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookTagArgTypes
});

export default function TagOverflow() {
	return (
		<Fragment>
			<DBTag>(Default) False</DBTag>
			<DBTag overflow={true}>
				<span>True - lorem ipsum dolor</span>
			</DBTag>
		</Fragment>
	);
}
