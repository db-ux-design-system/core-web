import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeadingH2 from '../heading-h2.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Paragraph spacing',
	storybookComponentName: 'DBHeadingH2',
	storybookComponentNames: ['DBHeadingH2', 'DBHeadingH2', 'DBHeadingH2'],
	storybookNames: ['Omitted', 'True: 1lh block-end', 'False'],
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
		</Fragment>
	);
}
