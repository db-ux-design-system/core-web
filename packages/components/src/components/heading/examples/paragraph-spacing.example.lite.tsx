import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeading from '../heading.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Paragraph spacing',
	storybookNames: ['Omitted', 'True: 1lh block-end', 'False'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingParagraphSpacing() {
	return (
		<Fragment>
			<DBHeading as="h2">Omitted: no margin</DBHeading>
			<DBHeading as="h2" paragraphSpacing={true}>
				True: 1lh block-end
			</DBHeading>
			<DBHeading as="h2" paragraphSpacing={false}>
				False: no margin
			</DBHeading>
		</Fragment>
	);
}
