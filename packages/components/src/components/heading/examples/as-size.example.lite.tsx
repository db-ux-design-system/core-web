import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeadingH2 from '../heading-h2.lite';
import DBHeadingH6 from '../heading-h6.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Semantic and visual decoupling',
	storybookComponentName: 'DBHeadingH2',
	storybookComponentNames: ['DBHeadingH6', 'DBHeadingH2'],
	storybookNames: ['h6 rendered as h1', 'h2 rendered as h6'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingAsSize() {
	return (
		<Fragment>
			<DBHeadingH6 visualSize="h1">Semantic h6, visual h1</DBHeadingH6>
			<DBHeadingH2 visualSize="h6">Semantic h2, visual h6</DBHeadingH2>
		</Fragment>
	);
}
