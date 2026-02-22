import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

import { fn } from '../../../shared/examples';

useMetadata({
	storybookTitle: 'Width',
	storybookNames: ['Auto', 'Full'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonWidth() {
	return (
		<Fragment>
			<DBButton onClick={fn} width="auto">
				(Default) Auto
			</DBButton>
			<div style={{ width: '500px' }}>
				<DBButton onClick={fn} width="full">
					Width
				</DBButton>
			</div>
		</Fragment>
	);
}
