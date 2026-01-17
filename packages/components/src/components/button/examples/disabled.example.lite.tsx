import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

import { fn } from '../../../shared/examples';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['False', 'True'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonDisabled() {
	return (
		<Fragment>
			<DBButton onClick={fn} disabled={false}>
				(Default) False
			</DBButton>
			<DBButton onClick={fn} disabled={true}>
				True
			</DBButton>
		</Fragment>
	);
}
