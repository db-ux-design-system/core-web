import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBParagraph from '../paragraph.lite';
import { StorybookParagraphArgTypes } from './_text.arg.types';

useMetadata({
	storybookTitle: 'Logical alignment',
	storybookComponentName: 'DBParagraph',
	storybookComponentNames: ['DBParagraph', 'DBParagraph', 'DBParagraph'],
	storybookNames: ['(Default) Start', 'Center', 'End'],
	storybookArgTypes: StorybookParagraphArgTypes
});

export default function TextAlignment() {
	return (
		<Fragment>
			<DBParagraph alignment="start">(Default) Start</DBParagraph>
			<DBParagraph alignment="center">Center</DBParagraph>
			<DBParagraph alignment="end">End</DBParagraph>
		</Fragment>
	);
}
