import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBLink from '../link.lite';
import { StorybookLinkArgTypes } from './_link.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookLinkArgTypes
});

export default function LinkDensity() {
	return (
		<Fragment>
			<DBLink data-density="functional" href="#" text="Functional" />
			<DBLink data-density="regular" href="#" text="(Default) Regular" />
			<DBLink data-density="expressive" href="#" text="Expressive" />
		</Fragment>
	);
}
