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
		'Wrapper: Sibling content outside the accessible name'
	],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingChildrenAccessibility() {
	return (
		<Fragment>
			<DBHeadingH2>
				<span aria-hidden="true">* </span>
				<span>Current disruptions</span>
				<span aria-hidden="true"> *</span>
			</DBHeadingH2>
			<DBCustomHeading>
				<DBHeadingH2>Current disruptions</DBHeadingH2>
				<span>3 active</span>
			</DBCustomHeading>
		</Fragment>
	);
}
