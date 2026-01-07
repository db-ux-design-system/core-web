import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

useMetadata({
	storybookTitle: 'Width',
	storybookNames: ['Auto', 'Full'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonWidth() {
	return (
		<Fragment>
			<DBButton width="auto">(Default) Auto</DBButton>
			<div style={{ width: '500px' }}>
				<DBButton width="full">Full</DBButton>
			</div>
		</Fragment>
	);
}
