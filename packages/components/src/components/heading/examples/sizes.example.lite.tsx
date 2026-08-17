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
		'DBCustomHeading',
		'DBCustomHeading',
		'DBCustomHeading',
		'DBCustomHeading',
		'DBCustomHeading',
		'DBCustomHeading',
		'DBCustomHeading',
		'DBCustomHeading'
	],
	storybookNames: [
		'Native 3xl',
		'Native 2xl',
		'Native xl',
		'Native lg',
		'Native md',
		'Native sm',
		'Native xs',
		'Native 2xs',
		'Native 3xs',
		'Custom 3xl',
		'Custom 2xl',
		'Custom xl',
		'Custom lg',
		'Custom md',
		'Custom sm',
		'Custom xs',
		'Custom 2xs',
		'Custom 3xs'
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
			<DBCustomHeading semanticLevel={2} size="3xl">
				<span>Custom 3xl</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={2} size="2xl">
				<span>Custom 2xl</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={2} size="xl">
				<span>Custom xl</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={2} size="lg">
				<span>Custom lg</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={2} size="md">
				<span>Custom md</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={2} size="sm">
				<span>Custom sm</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={2} size="xs">
				<span>Custom xs</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={2} size="2xs">
				<span>Custom 2xs</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={2} size="3xs">
				<span>Custom 3xs</span>
			</DBCustomHeading>
		</Fragment>
	);
}
