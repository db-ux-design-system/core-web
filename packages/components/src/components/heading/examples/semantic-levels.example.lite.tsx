import { Fragment, useMetadata } from '@builder.io/mitosis';
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
		'DBHeadingH6'
	],
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
			<DBHeadingH1>h1 maps to xl</DBHeadingH1>
			<DBHeadingH2>h2 maps to lg</DBHeadingH2>
			<DBHeadingH3>h3 maps to md</DBHeadingH3>
			<DBHeadingH4>h4 maps to sm</DBHeadingH4>
			<DBHeadingH5>h5 maps to xs</DBHeadingH5>
			<DBHeadingH6>h6 maps to 2xs</DBHeadingH6>
		</Fragment>
	);
}
