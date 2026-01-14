import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBDivider from '../divider.lite';
import { StorybookDividerArgTypes } from './_divider.arg.types';

useMetadata({
	storybookTitle: 'Emphasis',
	storybookNames: ['(Default) Weak', 'Strong'],
	storybookArgTypes: StorybookDividerArgTypes
});

export default function DividerEmphasis() {
	return (
		<Fragment>
			<DBDivider width="full"></DBDivider>
			<DBDivider emphasis="strong" width="full"></DBDivider>
		</Fragment>
	);
}
