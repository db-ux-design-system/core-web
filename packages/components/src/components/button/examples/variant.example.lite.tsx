import { Fragment, useMetadata } from '@builder.io/mitosis';
import { fn } from '../../../shared/examples';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: ['Outlined', 'Filled', 'Ghost', 'Brand'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonVariant() {
	return (
		<Fragment>
			<DBButton onClick={fn} variant="outlined">
				(Default) Outlined - Adaptive
			</DBButton>
			<DBButton onClick={fn} variant="filled">
				Filled - Adaptive
			</DBButton>
			<DBButton onClick={fn} variant="ghost">
				Ghost - Adaptive
			</DBButton>
			<DBButton onClick={fn} variant="brand">
				Brand
			</DBButton>
		</Fragment>
	);
}
