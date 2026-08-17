import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomHeading from '../custom-heading.lite';
import DBHeadingH2 from '../heading-h2.lite';
import DBHeadingH6 from '../heading-h6.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Semantic and visual decoupling',
	storybookComponentName: 'DBHeadingH2',
	storybookComponentNames: ['DBHeadingH6', 'DBHeadingH2', 'DBCustomHeading'],
	storybookNames: [
		'h6 rendered at 2xl',
		'h2 rendered at 3xs',
		'Custom level 3 rendered at 3xl'
	],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingAsSize() {
	return (
		<Fragment>
			<DBHeadingH6 size="2xl">Semantic h6, visual 2xl</DBHeadingH6>
			<DBHeadingH2 size="3xs">Semantic h2, visual 3xs</DBHeadingH2>
			<DBCustomHeading semanticLevel={3} size="3xl">
				<span>Custom semantic level 3, visual 3xl</span>
			</DBCustomHeading>
		</Fragment>
	);
}
