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
		'DBCustomHeading',
		'DBCustomHeading'
	],
	storybookNames: [
		'Native: Omitted',
		'Native: True: 1lh block-end',
		'Native: False',
		'Custom: Omitted',
		'Custom: True: 1lh block-end',
		'Custom: False'
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
			<DBCustomHeading semanticLevel={2}>
				<span>Custom omitted: no margin</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={2} paragraphSpacing={true}>
				<span>Custom true: 1lh block-end</span>
			</DBCustomHeading>
			<DBCustomHeading semanticLevel={2} paragraphSpacing={false}>
				<span>Custom false: no margin</span>
			</DBCustomHeading>
		</Fragment>
	);
}
