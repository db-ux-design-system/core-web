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
			{/* One attribute on the group spaces every block-text child, so a heading
			 * and paragraphs share one rhythm without setting anything themselves. */}
			<DBTextGroup textSpacing>
				<DBHeadingH3>A heading starts the block</DBHeadingH3>
				<DBParagraph>
					Neither component carries spacing of its own. The group sets
					`data-text-spacing`, and the foundations apply the margin to
					each element.
				</DBParagraph>
				<DBParagraph size="sm">
					Because the margin resolves against the element's own line
					height, a smaller paragraph gets proportionally less
					spacing.
				</DBParagraph>
			</DBTextGroup>
		</Fragment>
	);
}
