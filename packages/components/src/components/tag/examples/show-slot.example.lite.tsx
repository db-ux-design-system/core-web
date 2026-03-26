import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTag from '../tag.lite';
import { StorybookTagArgTypes } from './_tag.arg.types';

useMetadata({
	storybookTitle: 'Show Slot',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookTagArgTypes
});

export default function TagShowSlot() {
	return (
		<Fragment>
			<DBTag>(Default) False</DBTag>
			<DBTag
				icon="x_placeholder"
				content={<div class="default-content-slot">Swap Slot</div>}>
				True
			</DBTag>
		</Fragment>
	);
}
