import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBLink from '../link.lite';
import { StorybookLinkArgTypes } from './_link.arg.types';

useMetadata({
	storybookTitle: 'Content',
	storybookNames: ['(Default) Internal', 'External'],
	storybookArgTypes: StorybookLinkArgTypes
});

export default function LinkContent() {
	return (
		<Fragment>
			<DBLink href="#">(Default) Internal</DBLink>
			<DBLink href="#" content="external">
				External
			</DBLink>
		</Fragment>
	);
}
