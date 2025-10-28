import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../button.lite';

useMetadata({
	storybookNames: ['Outlined', 'Filled', 'Ghost', 'Brand']
});

export default function ButtonVariant() {
	return (
		<Fragment>
			<DBButton variant="outlined">
				(Default) Outlined - Adaptive
			</DBButton>
			<DBButton variant="filled">Filled - Adaptive</DBButton>
			<DBButton variant="ghost">Ghost - Adaptive</DBButton>
			<DBButton variant="brand">Brand</DBButton>
		</Fragment>
	);
}
