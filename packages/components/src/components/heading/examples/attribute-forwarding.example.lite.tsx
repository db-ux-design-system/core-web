import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeading from '../heading.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Forwarded native heading attributes',
	storybookNames: ['ID, class, ARIA, data and style'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingAttributeForwarding() {
	return (
		<Fragment>
			<DBHeading
				as="h2"
				id="forwarded-heading"
				class="forwarded-heading-class"
				aria-label="ID, class, ARIA, data and style forwarded to h2"
				data-example="heading"
				style={{ textTransform: 'uppercase' }}>
				ID, class, ARIA, data and style forwarded to h2
			</DBHeading>
		</Fragment>
	);
}
