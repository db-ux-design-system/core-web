import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBLink from '../link.lite';
import { StorybookLinkArgTypes } from './_link.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['(Default) Medium', 'Small'],
	storybookArgTypes: StorybookLinkArgTypes
});

export default function LinkSize() {
	return (
		<Fragment>
			<DBLink href="#" text="(Default) Medium" />
			<DBLink href="#" size="small" text="Small" />
		</Fragment>
	);
}
