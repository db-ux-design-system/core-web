import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomHeading from '../custom-heading.lite';
import DBHeadingH2 from '../heading-h2.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Accessible children',
	storybookComponentName: 'DBHeadingH2',
	storybookComponentNames: ['DBHeadingH2', 'DBCustomHeading'],
	storybookNames: [
		'Native: Decorative children hidden from screen readers',
		'Custom: Arbitrary children with one accessible name'
	],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingChildrenAccessibility() {
	return (
		<Fragment>
			<DBHeadingH2>
				<span aria-hidden="true">★ </span>
				<span>Current disruptions</span>
				<span aria-hidden="true"> ★</span>
			</DBHeadingH2>
			<DBCustomHeading semanticLevel={2}>
				<span aria-hidden="true">★ </span>
				<div class="heading-inline-child">Custom content container</div>
				<strong> with arbitrary children</strong>
				<span aria-hidden="true"> ★</span>
			</DBCustomHeading>
		</Fragment>
	);
}
