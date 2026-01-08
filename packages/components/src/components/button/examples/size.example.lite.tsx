import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

import { fn } from '../../../shared/examples';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['Medium', 'Small'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonSize() {
	return (
		<Fragment>
			<DBButton onClick={fn} size="medium">
				(Default) Medium
			</DBButton>
			<DBButton onClick={fn} size="small">
				Small
			</DBButton>
		</Fragment>
	);
}
