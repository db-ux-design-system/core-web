import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBLink from '../link.lite';
import { StorybookLinkArgTypes } from './_link.arg.types';

useMetadata({
	storybookTitle: 'Show Icon',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookLinkArgTypes
});

export default function LinkShowIcon() {
	return (
		<Fragment>
			<DBLink href="#" showIcon={true} text="(Default) True" />
			<DBLink href="#" showIcon={false} text="False" />
		</Fragment>
	);
}
