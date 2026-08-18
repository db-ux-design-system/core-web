import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeadingH2 from '../heading-h2.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Font weight',
	storybookComponentName: 'DBHeadingH2',
	storybookComponentNames: ['DBHeadingH2', 'DBHeadingH2'],
	storybookNames: ['(Default) Black', 'Light'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingFontWeight() {
	return (
		<Fragment>
			<DBHeadingH2 fontWeight="black">(Default) Black</DBHeadingH2>
			<DBHeadingH2 fontWeight="light">Light</DBHeadingH2>
		</Fragment>
	);
}
