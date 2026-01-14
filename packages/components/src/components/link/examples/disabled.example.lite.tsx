import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBLink from '../link.lite';
import { StorybookLinkArgTypes } from './_link.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookLinkArgTypes
});

export default function LinkDisabled() {
	return (
		<Fragment>
			<DBLink href="#" disabled={false}>
				(Default) False
			</DBLink>
			<DBLink href="#" disabled={true}>
				True
			</DBLink>
		</Fragment>
	);
}
