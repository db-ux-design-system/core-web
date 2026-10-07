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
	storybookNames: ['h1 (largest)', 'h2', 'h3', 'h4', 'h5', 'h6 (smallest)'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingSemanticLevels() {
	return (
		<Fragment>
			<DBHeadingH1>h1 at its level default</DBHeadingH1>
			<DBHeadingH2>h2 at its level default</DBHeadingH2>
			<DBHeadingH3>h3 at its level default</DBHeadingH3>
			<DBHeadingH4>h4 at its level default</DBHeadingH4>
			<DBHeadingH5>h5 at its level default</DBHeadingH5>
			<DBHeadingH6>h6 at its level default</DBHeadingH6>
		</Fragment>
	);
}
