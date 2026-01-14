import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBLink from '../link.lite';
import { StorybookLinkArgTypes } from './_link.arg.types';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: ['(Default) Adaptive', 'Brand'],
	storybookArgTypes: StorybookLinkArgTypes
});

export default function LinkVariant() {
	return (
		<Fragment>
			<DBLink href="#">(Default) Adaptive</DBLink>
			<DBLink href="#" variant="brand">
				Brand
			</DBLink>
		</Fragment>
	);
}
