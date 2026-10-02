import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBParagraphGroup from '../paragraph-group.lite';
import DBParagraph from '../paragraph.lite';
import { StorybookParagraphGroupArgTypes } from './_text.arg.types';

useMetadata({
	storybookTitle: 'Paragraph group',
	storybookComponentName: 'DBParagraphGroup',
	storybookComponentNames: ['DBParagraphGroup', 'DBParagraphGroup'],
	storybookNames: ['(Default) Small gap', 'Large gap and shared size'],
	storybookArgTypes: StorybookParagraphGroupArgTypes
});

export default function TextGroup() {
	return (
		<Fragment>
			<DBParagraphGroup>
				<DBParagraph>
					The group spaces its children with gap, so the spacing sits
					between the paragraphs only and leaves no trailing margin.
				</DBParagraph>
				<DBParagraph>
					Because a gap belongs to the container, nothing has to be
					set on the paragraphs themselves.
				</DBParagraph>
			</DBParagraphGroup>
			{/* size on the group is inherited by the paragraphs, since none of them
			 * sets its own. */}
			<DBParagraphGroup gap="large" size="sm">
				<DBParagraph>
					A size on the group cascades down through normal CSS
					inheritance.
				</DBParagraph>
				<DBParagraph>
					A paragraph that sets its own size overrides it for itself.
				</DBParagraph>
			</DBParagraphGroup>
		</Fragment>
	);
}
