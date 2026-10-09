import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBParagraph from '../paragraph.lite';
import DBTextGroup from '../text-group.lite';
import { StorybookTextGroupArgTypes } from './_paragraph.arg.types';

useMetadata({
	storybookTitle: 'Nested groups',
	storybookComponentName: 'DBTextGroup',
	storybookComponentNames: ['DBTextGroup'],
	storybookNames: ['Outer group spacing nested groups'],
	storybookArgTypes: StorybookTextGroupArgTypes
});

export default function TextGroupNestedGroups() {
	return (
		<Fragment>
			{/* Only the outer group carries textSpacing. The nested ones set
			 * alignment, which each of them passes to its own paragraphs by
			 * inheritance. Enabling textSpacing on a nested group as well would
			 * add its outer padding to the gap of the outer one. */}
			<DBTextGroup textSpacing>
				<DBTextGroup alignment="start">
					<DBParagraph fontWeight="black">
						Start-aligned block
					</DBParagraph>
					<DBParagraph>
						Alignment is set once per group and inherited by every
						paragraph in it.
					</DBParagraph>
				</DBTextGroup>
				<DBTextGroup alignment="center">
					<DBParagraph fontWeight="black">Centred block</DBParagraph>
					<DBParagraph size="sm">
						A nested group can differ from its parent, and the
						spacing of the outer group stays the same.
					</DBParagraph>
				</DBTextGroup>
			</DBTextGroup>
		</Fragment>
	);
}
