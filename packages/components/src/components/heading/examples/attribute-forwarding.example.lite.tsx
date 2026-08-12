import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeading from '../heading.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Attribute forwarding',
	storybookNames: ['Native heading attributes'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingAttributeForwarding() {
	return (
		<Fragment>
			<DBHeading
				as="h2"
				id="forwarded-heading"
				class="forwarded-heading-class"
				aria-label="Forwarded accessible name"
				data-example="heading"
				title="Forwarded title"
				style={{ textTransform: 'uppercase' }}>
				Forwarded attributes
			</DBHeading>
		</Fragment>
	);
}
