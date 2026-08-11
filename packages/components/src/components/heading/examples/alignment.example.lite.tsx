import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeading from '../heading.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Logical alignment',
	storybookNames: ['(Default) Start', 'Center', 'End'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingAlignment() {
	return (
		<Fragment>
			<DBHeading as="h2" alignment="start">
				(Default) Start
			</DBHeading>
			<DBHeading as="h2" alignment="center">
				Center
			</DBHeading>
			<DBHeading as="h2" alignment="end">
				End
			</DBHeading>
		</Fragment>
	);
}
