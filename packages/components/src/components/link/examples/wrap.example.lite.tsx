import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBLink from '../link.lite';
import { StorybookLinkArgTypes } from './_link.arg.types';

useMetadata({
	storybookTitle: 'Wrap',
	storybookNames: ['(Default) False', 'True [Multiline]'],
	storybookArgTypes: StorybookLinkArgTypes
});

export default function LinkWrap() {
	return (
		<Fragment>
			<DBLink href="#" wrap={false}>
				(Default) False
			</DBLink>
			<DBLink href="#" wrap={true}>
				True [Multiline]
			</DBLink>
		</Fragment>
	);
}
