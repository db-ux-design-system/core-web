import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBDivider from '../divider.lite';
import { StorybookDividerArgTypes } from './_divider.arg.types';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: ['(Default) Adaptive - Horizontal', 'Adaptive - Vertical'],
	storybookArgTypes: StorybookDividerArgTypes
});

export default function DividerVariant() {
	return (
		<Fragment>
			<DBDivider width="full"></DBDivider>
			<DBDivider variant="vertical" width="full"></DBDivider>
		</Fragment>
	);
}
