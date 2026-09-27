import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeadingH2 from '../heading-h2.lite';
import DBHeadingH6 from '../heading-h6.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Semantic and visual decoupling',
	storybookComponentName: 'DBHeadingH2',
	storybookComponentNames: ['DBHeadingH6', 'DBHeadingH2'],
	storybookNames: ['h6 rendered at 2xl', 'h2 rendered at 3xs'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingAsSize() {
	return (
		<Fragment>
			<DBHeadingH6 size="2xl">Semantic h6, visual 2xl</DBHeadingH6>
			<DBHeadingH2 size="3xs">Semantic h2, visual 3xs</DBHeadingH2>
		</Fragment>
	);
}
