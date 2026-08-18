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
		'Row: (Default) Start',
		'Row: Center',
		'Row: End'
	],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingAlignment() {
	return (
		<Fragment>
			<DBHeadingH2 alignment="start">(Default) Start</DBHeadingH2>
			<DBHeadingH2 alignment="center">Center</DBHeadingH2>
			<DBHeadingH2 alignment="end">End</DBHeadingH2>
			<DBCustomHeading alignment="start">
				<DBHeadingH2>Row: (Default) Start</DBHeadingH2>
				<span>sibling</span>
			</DBCustomHeading>
			<DBCustomHeading alignment="center">
				<DBHeadingH2>Row: Center</DBHeadingH2>
				<span>sibling</span>
			</DBCustomHeading>
			<DBCustomHeading alignment="end">
				<DBHeadingH2>Row: End</DBHeadingH2>
				<span>sibling</span>
			</DBCustomHeading>
		</Fragment>
	);
}
