import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

import { fn } from '../../../shared/examples';

useMetadata({
	storybookTitle: 'Show Icon Leading',
	storybookNames: ['False', 'True'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonShowIconLeading() {
	return (
		<Fragment>
			<DBButton onClick={fn} icon="x_placeholder" showIcon={false}>
				(Default) False
			</DBButton>
			<DBButton onClick={fn} icon="x_placeholder" showIcon={true}>
				True
			</DBButton>
		</Fragment>
	);
}
