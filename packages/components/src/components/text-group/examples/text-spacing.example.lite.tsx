import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBParagraph from '../../paragraph/paragraph.lite';
import DBTextGroup from '../text-group.lite';
import { StorybookTextGroupArgTypes } from './_text-group.arg.types';

useMetadata({
	storybookTitle: 'Text spacing',
	storybookComponentName: 'DBTextGroup',
	storybookComponentNames: ['DBTextGroup', 'DBTextGroup', 'DBTextGroup'],
	storybookNames: [
		'False: without spacing',
		'True: with spacing',
		'(Default) Unset: inherited'
	],
	storybookArgTypes: StorybookTextGroupArgTypes
});

export default function TextGroupTextSpacing() {
	return (
		<Fragment>
			{/* `false` opts out, which is what makes this variant reliable even on a
			 * page that opted in further up, like the Patternhub body does. */}
			<DBTextGroup textSpacing={false}>
				<DBParagraph>
					False: the paragraphs sit directly on top of each other.
				</DBParagraph>
				<DBParagraph>
					Nothing has to be set on the paragraphs themselves.
				</DBParagraph>
			</DBTextGroup>
			{/* Half a line height per child, so a full one between two of them. */}
			<DBTextGroup textSpacing>
				<DBParagraph>
					True: every child gets half a line height above and below.
				</DBParagraph>
				<DBParagraph>
					Two adjacent children are a full line height apart, and the
					group keeps half of one at its outer edges.
				</DBParagraph>
			</DBTextGroup>
			{/* Omitting the property is not the same as false: the group inherits
			 * from whatever opted in above it, here the wrapping div. */}
			<div data-text-spacing="true">
				<DBTextGroup>
					<DBParagraph>
						Unset: this group sets nothing, so it follows the
						surrounding element that opted in.
					</DBParagraph>
					<DBParagraph>
						Use false to switch the spacing off for certain.
					</DBParagraph>
				</DBTextGroup>
			</div>
		</Fragment>
	);
}
