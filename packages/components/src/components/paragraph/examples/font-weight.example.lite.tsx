import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBParagraph from '../paragraph.lite';
import { StorybookParagraphArgTypes } from './_paragraph.arg.types';

useMetadata({
	storybookTitle: 'Font weight',
	storybookComponentName: 'DBParagraph',
	storybookComponentNames: ['DBParagraph', 'DBParagraph'],
	storybookNames: ['Black', 'Regular'],
	storybookArgTypes: StorybookParagraphArgTypes
});

export default function ParagraphFontWeight() {
	return (
		<Fragment>
			{/* In builds without the DB theme fonts the body family has no 900
			 * face, so black falls back to the bold one. */}
			<DBParagraph fontWeight="black">Black</DBParagraph>
			<DBParagraph fontWeight="regular">Regular</DBParagraph>
		</Fragment>
	);
}
