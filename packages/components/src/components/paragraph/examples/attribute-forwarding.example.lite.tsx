import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBParagraph from '../paragraph.lite';
import { StorybookParagraphArgTypes } from './_paragraph.arg.types';

useMetadata({
	storybookTitle: 'Forwarded attributes',
	storybookComponentName: 'DBParagraph',
	storybookComponentNames: ['DBParagraph', 'DBParagraph'],
	storybookNames: ['Paragraph with lang', 'Visually hidden paragraph'],
	storybookArgTypes: StorybookParagraphArgTypes
});

export default function ParagraphAttributeForwarding() {
	return (
		<Fragment>
			{/* data-* and aria-* attributes are forwarded to the rendered element
			 * automatically, so no typed property is needed for them. */}
			<DBParagraph lang="en" data-testid="forwarded-paragraph">
				Native attributes land on the paragraph element.
			</DBParagraph>
			{/* The global `data-visually-hidden` annotation needs no property of
			 * its own. It requires the `visually-hidden` stylesheet. */}
			<DBParagraph data-visually-hidden="true">
				Only announced by assistive technology.
			</DBParagraph>
		</Fragment>
	);
}
