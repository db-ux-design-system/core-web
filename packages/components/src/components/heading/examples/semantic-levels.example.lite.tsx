import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeading from '../heading.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Semantic levels and default mapping',
	storybookNames: [
		'h1 / xl',
		'h2 / lg',
		'h3 / md',
		'h4 / sm',
		'h5 / xs',
		'h6 / 2xs'
	],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingSemanticLevels() {
	return (
		<Fragment>
			<DBHeading as="h1">h1 maps to xl</DBHeading>
			<DBHeading as="h2">h2 maps to lg</DBHeading>
			<DBHeading as="h3">h3 maps to md</DBHeading>
			<DBHeading as="h4">h4 maps to sm</DBHeading>
			<DBHeading as="h5">h5 maps to xs</DBHeading>
			<DBHeading as="h6">h6 maps to 2xs</DBHeading>
		</Fragment>
	);
}
