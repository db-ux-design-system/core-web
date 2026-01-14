import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBDivider from '../divider.lite';
import { StorybookDividerArgTypes } from './_divider.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookDividerArgTypes
});

export default function DividerDensity() {
	return (
		<Fragment>
			<DBDivider data-density="functional" width="full"></DBDivider>
			<DBDivider data-density="regular" width="full"></DBDivider>
			<DBDivider data-density="expressive" width="full"></DBDivider>
		</Fragment>
	);
}
