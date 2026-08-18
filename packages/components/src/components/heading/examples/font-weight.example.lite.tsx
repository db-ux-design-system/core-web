import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomHeading from '../custom-heading.lite';
import DBHeadingH2 from '../heading-h2.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Font weight',
	storybookComponentName: 'DBHeadingH2',
	storybookComponentNames: [
		'DBHeadingH2',
		'DBHeadingH2',
		'DBCustomHeading',
		'DBCustomHeading'
	],
	storybookNames: [
		'(Default) Black',
		'Light',
		'Wrapper: (Default) Black',
		'Wrapper: Light'
	],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingFontWeight() {
	return (
		<Fragment>
			<DBHeadingH2 fontWeight="black">(Default) Black</DBHeadingH2>
			<DBHeadingH2 fontWeight="light">Light</DBHeadingH2>
			<DBCustomHeading fontWeight="black">
				<h2>Wrapper: (Default) Black</h2>
			</DBCustomHeading>
			<DBCustomHeading fontWeight="light">
				<h2>Wrapper: Light</h2>
			</DBCustomHeading>
		</Fragment>
	);
}
