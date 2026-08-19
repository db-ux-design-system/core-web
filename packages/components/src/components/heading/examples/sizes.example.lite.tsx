import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomHeading from '../custom-heading.lite';
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
		'DBHeadingH2',
		'DBCustomHeading',
		'DBCustomHeading'
	],
	// Prefixed on purpose: a name starting with a digit is not a valid JavaScript
	// identifier and could not be used as a Storybook story export.
	storybookNames: [
		'Size 3xl',
		'Size 2xl',
		'Size xl',
		'Size lg',
		'Size md',
		'Size sm',
		'Size xs',
		'Size 2xs',
		'Size 3xs',
		'Wrapper: 3xl',
		'Wrapper: 3xs'
	],
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
			<DBCustomHeading size="3xl">
				<h2>Wrapper: 3xl</h2>
			</DBCustomHeading>
			<DBCustomHeading size="3xs">
				<h2>Wrapper: 3xs</h2>
			</DBCustomHeading>
		</Fragment>
	);
}
