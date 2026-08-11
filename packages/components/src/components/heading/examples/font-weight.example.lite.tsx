import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeading from '../heading.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Font weight',
	storybookNames: ['(Default) Black', 'Light'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingFontWeight() {
	return (
		<Fragment>
			<DBHeading as="h2" fontWeight="black">
				(Default) Black
			</DBHeading>
			<DBHeading as="h2" fontWeight="light">
				Light
			</DBHeading>
		</Fragment>
	);
}
