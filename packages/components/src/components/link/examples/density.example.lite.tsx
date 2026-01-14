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
			<DBLink data-density="functional" href="#">
				Functional
			</DBLink>
			<DBLink data-density="regular" href="#">
				(Default) Regular
			</DBLink>
			<DBLink data-density="expressive" href="#">
				Expressive
			</DBLink>
		</Fragment>
	);
}
