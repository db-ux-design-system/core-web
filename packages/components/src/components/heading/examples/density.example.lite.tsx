import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeading from '../heading.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingDensity() {
	return (
		<Fragment>
			<DBHeading as="h2" data-density="functional">
				Functional
			</DBHeading>
			<DBHeading as="h2" data-density="regular">
				(Default) Regular
			</DBHeading>
			<DBHeading as="h2" data-density="expressive">
				Expressive
			</DBHeading>
		</Fragment>
	);
}
