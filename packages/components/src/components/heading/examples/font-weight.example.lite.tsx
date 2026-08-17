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
		'Native: (Default) Black',
		'Native: Light',
		'Custom: (Default) Black',
		'Custom: Light'
	],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingFontWeight() {
	return (
		<Fragment>
			<DBHeadingH2 fontWeight="black">(Default) Black</DBHeadingH2>
			<DBHeadingH2 fontWeight="light">Light</DBHeadingH2>
			<DBCustomHeading semanticLevel={2} fontWeight="black">
				<span>Custom: (Default) Black</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={2} fontWeight="light">
				<span>Custom: Light</span>
			</DBCustomHeading>
		</Fragment>
	);
}
