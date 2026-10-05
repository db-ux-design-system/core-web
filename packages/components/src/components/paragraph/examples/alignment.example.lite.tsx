import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBParagraph from '../paragraph.lite';
import DBTextGroup from '../text-group.lite';
import { StorybookTextGroupArgTypes } from './_paragraph.arg.types';

useMetadata({
	storybookTitle: 'Logical alignment',
	storybookComponentName: 'DBTextGroup',
	storybookComponentNames: ['DBTextGroup', 'DBTextGroup', 'DBTextGroup'],
	storybookNames: ['(Default) Start', 'Center', 'End'],
	storybookArgTypes: StorybookTextGroupArgTypes
});

export default function TextGroupAlignment() {
	return (
		<Fragment>
			{/* Alignment sits on the group and is inherited by the paragraphs, so
			 * it does not have to be repeated on each one. */}
			<DBTextGroup alignment="start" textSpacing>
				<DBParagraph>(Default) Start</DBParagraph>
				<DBParagraph>Inherited by every paragraph</DBParagraph>
			</DBTextGroup>
			<DBTextGroup alignment="center" textSpacing>
				<DBParagraph>Center</DBParagraph>
				<DBParagraph>Inherited by every paragraph</DBParagraph>
			</DBTextGroup>
			<DBTextGroup alignment="end" textSpacing>
				<DBParagraph>End</DBParagraph>
				<DBParagraph>Inherited by every paragraph</DBParagraph>
			</DBTextGroup>
		</Fragment>
	);
}
