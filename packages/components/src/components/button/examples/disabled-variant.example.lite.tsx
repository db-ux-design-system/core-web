import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

import { fn } from '../../../shared/examples';

useMetadata({
	storybookTitle: 'Disabled Variant',
	storybookNames: ['Outlined', 'Filled', 'Ghost', 'Brand'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonDisabledVariant() {
	return (
		<Fragment>
			<DBButton onClick={fn} disabled={true} variant="outlined">
				Outlined
			</DBButton>
			<DBButton onClick={fn} disabled={true} variant="filled">
				Filled
			</DBButton>
			<DBButton onClick={fn} disabled={true} variant="ghost">
				Ghost
			</DBButton>
			<DBButton onClick={fn} disabled={true} variant="brand">
				Brand
			</DBButton>
		</Fragment>
	);
}
