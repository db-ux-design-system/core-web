import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBParagraph from '../paragraph.lite';
import DBText from '../text.lite';
import { StorybookParagraphArgTypes } from './_text.arg.types';

useMetadata({
	storybookTitle: 'Forwarded attributes',
	storybookComponentName: 'DBParagraph',
	storybookComponentNames: ['DBParagraph', 'DBText'],
	storybookNames: ['Paragraph with lang', 'Text with a translation'],
	storybookArgTypes: StorybookParagraphArgTypes
});

export default function TextAttributeForwarding() {
	return (
		<Fragment>
			{/* data-* and aria-* attributes are forwarded to the rendered element
			 * automatically, so no typed property is needed for them. */}
			<DBParagraph lang="en" data-testid="forwarded-paragraph">
				Native attributes land on the paragraph element.
			</DBParagraph>
			<DBParagraph>
				The German term is{' '}
				<DBText lang="de">Schienenersatzverkehr</DBText>, announced in
				the correct language.
			</DBParagraph>
		</Fragment>
	);
}
