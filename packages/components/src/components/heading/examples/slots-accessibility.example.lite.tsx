import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeading from '../heading.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Slots and accessibility',
	storybookNames: ['Decorative start and end slots'],
	storybookArgTypes: StorybookHeadingArgTypes
});

// The heading text is wrapped in an element so template-based frameworks strip
// the surrounding newline whitespace, matching the JSX output exactly.
export default function HeadingSlotsAccessibility() {
	return (
		<Fragment>
			<DBHeading
				as="h2"
				startSlot={<span aria-hidden="true">[</span>}
				endSlot={<span aria-hidden="true">]</span>}>
				<span>Accessible heading name</span>
			</DBHeading>
		</Fragment>
	);
}
