import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBLink from '../link.lite';
import { StorybookLinkArgTypes } from './_link.arg.types';

useMetadata({
	storybookTitle: 'Examples',
	storybookNames: ['Variant Inline'],
	storybookArgTypes: StorybookLinkArgTypes
});

export default function LinkExamples() {
	return (
		<Fragment>
			<DBLink href="#" variant="inline" text="Variant Inline" />
		</Fragment>
	);
}
