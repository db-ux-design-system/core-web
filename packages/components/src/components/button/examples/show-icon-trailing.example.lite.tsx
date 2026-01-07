import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

useMetadata({
	storybookTitle: 'Show Icon Trailing',
	storybookNames: ['False', 'True'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonShowIconTrailing() {
	return (
		<Fragment>
			<DBButton iconTrailing="x_placeholder" showIconTrailing={false}>
				(Default) False
			</DBButton>
			<DBButton iconTrailing="x_placeholder" showIconTrailing={true}>
				True
			</DBButton>
		</Fragment>
	);
}
