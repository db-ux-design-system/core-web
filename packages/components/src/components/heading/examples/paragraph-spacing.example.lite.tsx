import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomHeading from '../custom-heading.lite';
import DBHeadingH2 from '../heading-h2.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Paragraph spacing',
	storybookComponentName: 'DBHeadingH2',
	storybookComponentNames: [
		'DBHeadingH2',
		'DBHeadingH2',
		'DBHeadingH2',
		'DBCustomHeading',
		'DBCustomHeading'
	],
	storybookNames: [
		'Omitted',
		'True: 1lh block-end',
		'False',
		'Wrapper: Omitted',
		'Wrapper: True: 1lh block-end'
	],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingParagraphSpacing() {
	return (
		<Fragment>
			<DBHeadingH2>Omitted: no margin</DBHeadingH2>
			<DBHeadingH2 paragraphSpacing={true}>
				True: 1lh block-end
			</DBHeadingH2>
			<DBHeadingH2 paragraphSpacing={false}>False: no margin</DBHeadingH2>
			<DBCustomHeading>
				<h2>Wrapper omitted: no margin</h2>
			</DBCustomHeading>
			<DBCustomHeading paragraphSpacing={true}>
				<h2>Wrapper true: 1lh block-end</h2>
			</DBCustomHeading>
		</Fragment>
	);
}
