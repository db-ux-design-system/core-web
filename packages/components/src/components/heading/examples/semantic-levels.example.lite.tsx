import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomHeading from '../custom-heading.lite';
import DBHeadingH1 from '../heading-h1.lite';
import DBHeadingH2 from '../heading-h2.lite';
import DBHeadingH3 from '../heading-h3.lite';
import DBHeadingH4 from '../heading-h4.lite';
import DBHeadingH5 from '../heading-h5.lite';
import DBHeadingH6 from '../heading-h6.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Semantic levels and default mapping',
	storybookComponentName: 'DBHeadingH2',
	storybookComponentNames: [
		'DBHeadingH1',
		'DBHeadingH2',
		'DBHeadingH3',
		'DBHeadingH4',
		'DBHeadingH5',
		'DBHeadingH6',
		'DBCustomHeading',
		'DBCustomHeading',
		'DBCustomHeading',
		'DBCustomHeading',
		'DBCustomHeading',
		'DBCustomHeading'
	],
	storybookNames: [
		'h1 / xl',
		'h2 / lg',
		'h3 / md',
		'h4 / sm',
		'h5 / xs',
		'h6 / 2xs',
		'Custom level 1 / xl',
		'Custom level 2 / lg',
		'Custom level 3 / md',
		'Custom level 4 / sm',
		'Custom level 5 / xs',
		'Custom level 6 / 2xs'
	],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingSemanticLevels() {
	return (
		<Fragment>
			<DBHeadingH1>h1 maps to xl</DBHeadingH1>
			<DBHeadingH2>h2 maps to lg</DBHeadingH2>
			<DBHeadingH3>h3 maps to md</DBHeadingH3>
			<DBHeadingH4>h4 maps to sm</DBHeadingH4>
			<DBHeadingH5>h5 maps to xs</DBHeadingH5>
			<DBHeadingH6>h6 maps to 2xs</DBHeadingH6>
			<DBCustomHeading semanticLevel={1}>
				<span>Custom level 1 maps to xl</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={2}>
				<span>Custom level 2 maps to lg</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={3}>
				<span>Custom level 3 maps to md</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={4}>
				<span>Custom level 4 maps to sm</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={5}>
				<span>Custom level 5 maps to xs</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={6}>
				<span>Custom level 6 maps to 2xs</span>
			</DBCustomHeading>
		</Fragment>
	);
}
