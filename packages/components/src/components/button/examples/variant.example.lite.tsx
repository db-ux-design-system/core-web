import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './storybook-button.arg.types';

useMetadata({
	storybookTitle: 'Button Variant',
	storybookNames: ['Outlined', 'Filled', 'Ghost', 'Brand'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonVariant() {
	return (
		<Fragment>
			<DBButton onClick={() => {}} variant="outlined">
				(Default) Outlined - Adaptive
			</DBButton>
			<DBButton onClick={() => {}} variant="filled">
				Filled - Adaptive
			</DBButton>
			<DBButton onClick={() => {}} variant="ghost">
				Ghost - Adaptive
			</DBButton>
			<DBButton onClick={() => {}} variant="brand">
				Brand
			</DBButton>
		</Fragment>
	);
}
