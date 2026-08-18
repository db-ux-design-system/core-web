import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
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
				<h2>Current disruptions</h2>
				<DBBadge semantic="critical" emphasis="strong">
					3
				</DBBadge>
			</DBCustomHeading>
		</Fragment>
	);
}
