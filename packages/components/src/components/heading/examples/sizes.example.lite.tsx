import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeadingH2 from '../heading-h2.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Visual sizes',
	storybookComponentName: 'DBHeadingH2',
	storybookComponentNames: [
		'DBHeadingH2',
		'DBHeadingH2',
		'DBHeadingH2',
		'DBHeadingH2',
		'DBHeadingH2',
		'DBHeadingH2',
		'DBHeadingH2',
		'DBHeadingH2',
		'DBHeadingH2'
	],
	storybookNames: ['3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs', '2xs', '3xs'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingSizes() {
	return (
		<Fragment>
			<DBHeadingH2 size="3xl">3xl</DBHeadingH2>
			<DBHeadingH2 size="2xl">2xl</DBHeadingH2>
			<DBHeadingH2 size="xl">xl</DBHeadingH2>
			<DBHeadingH2 size="lg">lg</DBHeadingH2>
			<DBHeadingH2 size="md">md</DBHeadingH2>
			<DBHeadingH2 size="sm">sm</DBHeadingH2>
			<DBHeadingH2 size="xs">xs</DBHeadingH2>
			<DBHeadingH2 size="2xs">2xs</DBHeadingH2>
			<DBHeadingH2 size="3xs">3xs</DBHeadingH2>
		</Fragment>
	);
}
