import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBParagraph from '../../paragraph/paragraph.lite';
import DBTextGroup from '../text-group.lite';
import { StorybookTextGroupArgTypes } from './_text-group.arg.types';

useMetadata({
	storybookTitle: 'Mixed content',
	storybookComponentName: 'DBTextGroup',
	storybookComponentNames: ['DBTextGroup', 'DBTextGroup'],
	storybookNames: ['Native block text', 'A child outside the text elements'],
	storybookArgTypes: StorybookTextGroupArgTypes
});

export default function TextGroupMixedContent() {
	return (
		<Fragment>
			{/* The foundations space every `h1`-`h6` and `p` below the attribute, so
			 * native elements need nothing of their own. */}
			<DBTextGroup textSpacing>
				<h3>A native heading</h3>
				<p>
					A native paragraph. The opt-in reaches it just like it
					reaches our components, so plain markup and components can
					be mixed freely.
				</p>
				<DBParagraph>
					A component paragraph, spaced by exactly the same rule.
				</DBParagraph>
			</DBTextGroup>
			{/* A list is not block text, so it keeps its own margin. The custom
			 * property is the documented way to join the rhythm. */}
			<DBTextGroup textSpacing>
				<DBParagraph>
					A list is not one of the block-text elements, so it keeps
					whatever margin it brings.
				</DBParagraph>
				<ul
					style={{
						marginBlock: 'calc(1lh * var(--db-text-spacing, 0))'
					}}>
					<li>Opted into the same rhythm</li>
					<li>The list items are unaffected</li>
				</ul>
				<DBParagraph>
					Set a zero block margin instead to take such a child out of
					the rhythm entirely.
				</DBParagraph>
			</DBTextGroup>
		</Fragment>
	);
}
