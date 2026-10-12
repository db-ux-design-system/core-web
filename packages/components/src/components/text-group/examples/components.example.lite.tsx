import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeadingH3 from '../../heading/heading-h3.lite';
import DBParagraph from '../../paragraph/paragraph.lite';
import DBTextGroup from '../text-group.lite';
import { StorybookTextGroupArgTypes } from './_text-group.arg.types';

useMetadata({
	storybookTitle: 'With components',
	storybookComponentName: 'DBTextGroup',
	storybookComponentNames: ['DBTextGroup'],
	storybookNames: ['Heading and paragraphs in one group'],
	storybookArgTypes: StorybookTextGroupArgTypes
});

export default function TextGroupComponents() {
	return (
		<Fragment>
			{/* The group knows nothing about its child types, so a heading and a
			 * paragraph share one rhythm without either of them setting a margin. */}
			<DBTextGroup textSpacing>
				<DBHeadingH3>A heading starts the block</DBHeadingH3>
				<DBParagraph>
					Both components reset their own block margin, so the group
					is the single source of spacing for all of its children.
				</DBParagraph>
				<DBParagraph size="sm">
					Mixing components is the intended use. The gap resolves
					against the group's typography, so it does not change with a
					child's size.
				</DBParagraph>
			</DBTextGroup>
		</Fragment>
	);
}
