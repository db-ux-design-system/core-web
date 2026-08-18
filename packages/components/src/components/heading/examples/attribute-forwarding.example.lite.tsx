import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomHeading from '../custom-heading.lite';
import DBHeadingH2 from '../heading-h2.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Forwarded heading attributes',
	storybookComponentName: 'DBHeadingH2',
	storybookComponentNames: ['DBHeadingH2', 'DBCustomHeading'],
	storybookNames: [
		'Native: ID, class, ARIA, data and style',
		'Wrapper: ID, class, data and style'
	],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingAttributeForwarding() {
	return (
		<Fragment>
			<DBHeadingH2
				id="forwarded-heading"
				class="forwarded-heading-class"
				aria-label="ID, class, ARIA, data and style forwarded to h2"
				data-example="heading"
				style={{ textTransform: 'uppercase' }}>
				ID, class, ARIA, data and style forwarded to h2
			</DBHeadingH2>
			<DBCustomHeading
				id="forwarded-custom-heading"
				class="forwarded-custom-heading-class"
				data-example="custom-heading"
				style={{ textTransform: 'uppercase' }}>
				<DBHeadingH2>
					ID, class, data and style on the wrapper
				</DBHeadingH2>
			</DBCustomHeading>
		</Fragment>
	);
}
