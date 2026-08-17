import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomHeading from '../custom-heading.lite';
import DBHeadingH2 from '../heading-h2.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Logical alignment',
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
		'(Default) Start',
		'Center',
		'End',
		'Custom: Start',
		'Custom: Center',
		'Custom: End'
	],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingAlignment() {
	return (
		<Fragment>
			<DBHeadingH2 alignment="start">(Default) Start</DBHeadingH2>
			<DBHeadingH2 alignment="center">Center</DBHeadingH2>
			<DBHeadingH2 alignment="end">End</DBHeadingH2>
			<DBCustomHeading semanticLevel={2} alignment="start">
				<span>Custom: Start</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={2} alignment="center">
				<span>Custom: Center</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={2} alignment="end">
				<span>Custom: End</span>
			</DBCustomHeading>
		</Fragment>
	);
}
