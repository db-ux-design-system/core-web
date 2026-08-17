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
		'Custom: ID, class, ARIA, data and style'
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
				semanticLevel={2}
				id="forwarded-custom-heading"
				class="forwarded-custom-heading-class"
				aria-label="ID, class, ARIA, data and style forwarded to custom heading"
				data-example="custom-heading"
				style={{ textTransform: 'uppercase' }}>
				<span>ID, class, ARIA, data and style on a custom heading</span>
			</DBCustomHeading>
		</Fragment>
	);
}
