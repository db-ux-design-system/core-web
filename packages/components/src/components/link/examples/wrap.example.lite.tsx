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
			<DBLink href="#" wrap={false} text="(Default) False" />
			<div style={{ width: '2ch' }}>
				<DBLink href="#" wrap={true} text="True [Multiline]" />
			</div>
		</Fragment>
	);
}
