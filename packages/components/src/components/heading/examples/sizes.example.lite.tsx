import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeading from '../heading.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Visual sizes',
	storybookNames: ['3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs', '2xs', '3xs'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingSizes() {
	return (
		<Fragment>
			<DBHeading as="h2" size="3xl">
				3xl
			</DBHeading>
			<DBHeading as="h2" size="2xl">
				2xl
			</DBHeading>
			<DBHeading as="h2" size="xl">
				xl
			</DBHeading>
			<DBHeading as="h2" size="lg">
				lg
			</DBHeading>
			<DBHeading as="h2" size="md">
				md
			</DBHeading>
			<DBHeading as="h2" size="sm">
				sm
			</DBHeading>
			<DBHeading as="h2" size="xs">
				xs
			</DBHeading>
			<DBHeading as="h2" size="2xs">
				2xs
			</DBHeading>
			<DBHeading as="h2" size="3xs">
				3xs
			</DBHeading>
		</Fragment>
	);
}
