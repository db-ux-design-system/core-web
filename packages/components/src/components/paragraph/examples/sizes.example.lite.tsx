import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBParagraph from '../paragraph.lite';
import { StorybookParagraphArgTypes } from './_paragraph.arg.types';

useMetadata({
	storybookTitle: 'Sizes',
	storybookComponentName: 'DBParagraph',
	storybookComponentNames: [
		'DBParagraph',
		'DBParagraph',
		'DBParagraph',
		'DBParagraph'
	],
	storybookNames: ['(Default) Inherited', 'Size lg', 'Size md', 'Size sm'],
	storybookArgTypes: StorybookParagraphArgTypes
});

export default function ParagraphSizes() {
	return (
		<Fragment>
			{/* Omitting size inherits from the surrounding typography, so there is
			 * no default step to override. */}
			<DBParagraph>(Default) Inherited</DBParagraph>
			<DBParagraph size="lg">Size lg</DBParagraph>
			<DBParagraph size="md">Size md</DBParagraph>
			<DBParagraph size="sm">Size sm</DBParagraph>
		</Fragment>
	);
}
