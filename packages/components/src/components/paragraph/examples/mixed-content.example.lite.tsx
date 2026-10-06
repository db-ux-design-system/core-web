import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBParagraph from '../paragraph.lite';
import DBTextGroup from '../text-group.lite';
import { StorybookTextGroupArgTypes } from './_paragraph.arg.types';

useMetadata({
	storybookTitle: 'Mixed content',
	storybookComponentName: 'DBTextGroup',
	storybookComponentNames: ['DBTextGroup', 'DBTextGroup'],
	storybookNames: [
		'Children without a block margin',
		'A child that brings its own block margin'
	],
	storybookArgTypes: StorybookTextGroupArgTypes
});

export default function TextGroupMixedContent() {
	return (
		<Fragment>
			{/* The spacing is a gap on the container, so it reaches every child
			 * regardless of its type, including one that carries none of our
			 * classes. */}
			<DBTextGroup textSpacing>
				<DBParagraph>
					The gap belongs to the group, so a child does not have to be
					a paragraph to be spaced.
				</DBParagraph>
				<div>
					A plain div without any of our classes, spaced like every
					other child.
				</div>
			</DBTextGroup>
			{/* `.db-paragraph` resets its own block margin, a foreign element does
			 * not. Its margin adds to the gap, so set `margin-block: 0` on such a
			 * child to keep one rhythm. */}
			<DBTextGroup textSpacing>
				<DBParagraph>
					A list keeps the block margin the browser gives it, and that
					margin adds to the gap below.
				</DBParagraph>
				<ul>
					<li>Reset it to keep a single rhythm</li>
					<li>The list items are unaffected</li>
				</ul>
				<DBParagraph>
					Only our own components reset their block margin, so the
					group stays their single source of spacing.
				</DBParagraph>
			</DBTextGroup>
		</Fragment>
	);
}
