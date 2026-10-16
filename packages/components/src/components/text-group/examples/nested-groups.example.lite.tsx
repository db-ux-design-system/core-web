import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBParagraph from '../../paragraph/paragraph.lite';
import DBTextGroup from '../text-group.lite';
import { StorybookTextGroupArgTypes } from './_text-group.arg.types';

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
			{/* Only the outer group sets textSpacing. The nested ones inherit the
			 * opt-in and just set their own alignment, which each of them passes
			 * to its paragraphs. */}
			<DBTextGroup textSpacing>
				<DBTextGroup alignment="start">
					<DBParagraph>
						<strong>Start-aligned block</strong>
					</DBParagraph>
					<DBParagraph>
						Alignment is set once per group and inherited by every
						paragraph in it.
					</DBParagraph>
				</DBTextGroup>
				<DBTextGroup alignment="center">
					<DBParagraph>
						<strong>Centred block</strong>
					</DBParagraph>
					<DBParagraph size="sm">
						A nested group can differ from its parent, and the
						spacing keeps coming from the outer one.
					</DBParagraph>
				</DBTextGroup>
			</DBTextGroup>
		</Fragment>
	);
}
