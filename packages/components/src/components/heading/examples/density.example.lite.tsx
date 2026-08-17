import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomHeading from '../custom-heading.lite';
import DBHeadingH2 from '../heading-h2.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookComponentName: 'DBHeadingH2',
	storybookComponentNames: [
		'DBHeadingH2',
		'DBHeadingH2',
		'DBHeadingH2',
		'DBCustomHeading',
		'DBCustomHeading',
		'DBCustomHeading'
	],
	storybookNames: [
		'Native: Functional',
		'Native: (Default) Regular',
		'Native: Expressive',
		'Custom: Functional',
		'Custom: (Default) Regular',
		'Custom: Expressive'
	],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingDensity() {
	return (
		<Fragment>
			<DBHeadingH2 data-density="functional">Functional</DBHeadingH2>
			<DBHeadingH2 data-density="regular">(Default) Regular</DBHeadingH2>
			<DBHeadingH2 data-density="expressive">Expressive</DBHeadingH2>
			<DBCustomHeading semanticLevel={2} data-density="functional">
				<span>Custom: Functional</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={2} data-density="regular">
				<span>Custom: (Default) Regular</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={2} data-density="expressive">
				<span>Custom: Expressive</span>
			</DBCustomHeading>
		</Fragment>
	);
}
