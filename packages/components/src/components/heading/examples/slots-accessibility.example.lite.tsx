import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeading from '../heading.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Slots and accessibility',
	storybookNames: ['Decorative start and end slots'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingSlotsAccessibility() {
	return (
		<Fragment>
			<DBHeading
				as="h2"
				startSlot={<span aria-hidden="true">[</span>}
				endSlot={<span aria-hidden="true">]</span>}>
				Accessible heading name
			</DBHeading>
		</Fragment>
	);
}
