import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

import { fn } from '../../../shared/examples';

useMetadata({
	storybookTitle: 'Show Icon Trailing',
	storybookNames: ['False', 'True'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonShowIconTrailing() {
	return (
		<Fragment>
			<DBButton
				onClick={fn}
				iconTrailing="x_placeholder"
				showIconTrailing={false}>
				(Default) False
			</DBButton>
			<DBButton
				onClick={fn}
				iconTrailing="x_placeholder"
				showIconTrailing={true}>
				True
			</DBButton>
		</Fragment>
	);
}
