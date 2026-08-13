import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeading from '../heading.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Decorative slots hidden from screen readers',
	storybookNames: ['Decorative slots hidden from screen readers'],
	storybookArgTypes: StorybookHeadingArgTypes
});

// The heading text is wrapped in an element so template-based frameworks strip
// the surrounding newline whitespace, matching the JSX output exactly.
export default function HeadingSlotsAccessibility() {
	return (
		<Fragment>
			<DBHeading
				as="h2"
				startSlot={<span aria-hidden="true">★ </span>}
				endSlot={<span aria-hidden="true"> ★</span>}>
				<span>Current disruptions</span>
			</DBHeading>
		</Fragment>
	);
}
