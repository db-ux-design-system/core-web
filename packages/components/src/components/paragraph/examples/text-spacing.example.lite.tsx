import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBParagraph from '../paragraph.lite';
import DBTextGroup from '../text-group.lite';
import { StorybookTextGroupArgTypes } from './_paragraph.arg.types';

useMetadata({
	storybookTitle: 'Text spacing',
	storybookComponentName: 'DBTextGroup',
	storybookComponentNames: ['DBTextGroup', 'DBTextGroup'],
	storybookNames: ['(Default) Without spacing', 'With text spacing'],
	storybookArgTypes: StorybookTextGroupArgTypes
});

export default function TextGroupTextSpacing() {
	return (
		<Fragment>
			<DBTextGroup>
				<DBParagraph>
					Without text spacing the paragraphs sit directly on top of
					each other, because the paragraph margins are reset.
				</DBParagraph>
				<DBParagraph>
					Spacing is the group's job, so nothing has to be set on the
					paragraphs themselves.
				</DBParagraph>
			</DBTextGroup>
			{/* Every child gets half a line height on both sides, so two adjacent
			 * ones end up a full line height apart and the group keeps spacing at
			 * its own outer edges. */}
			<DBTextGroup textSpacing>
				<DBParagraph>
					With text spacing every child gets half a line height above
					and below.
				</DBParagraph>
				<DBParagraph size="sm">
					A smaller paragraph gets a proportionally smaller spacing.
				</DBParagraph>
			</DBTextGroup>
		</Fragment>
	);
}
