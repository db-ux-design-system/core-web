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
			<DBLink href="#" text="(Default) Adaptive" />
			<DBLink href="#" variant="brand" text="Brand" />
		</Fragment>
	);
}
