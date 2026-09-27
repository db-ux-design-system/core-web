import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeadingH2 from '../heading-h2.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Logical alignment',
	storybookComponentName: 'DBHeadingH2',
	storybookComponentNames: ['DBHeadingH2', 'DBHeadingH2', 'DBHeadingH2'],
	storybookNames: ['(Default) Start', 'Center', 'End'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingAlignment() {
	return (
		<Fragment>
			<DBHeadingH2 alignment="start">(Default) Start</DBHeadingH2>
			<DBHeadingH2 alignment="center">Center</DBHeadingH2>
			<DBHeadingH2 alignment="end">End</DBHeadingH2>
		</Fragment>
	);
}
