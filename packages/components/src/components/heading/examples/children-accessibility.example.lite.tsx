import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeadingH2 from '../heading-h2.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Decorative children hidden from screen readers',
	storybookComponentName: 'DBHeadingH2',
	storybookNames: ['Decorative children hidden from screen readers'],
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
		</Fragment>
	);
}
