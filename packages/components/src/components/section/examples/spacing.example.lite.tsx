import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCard from '../../card/card.lite';
import DBSection from '../section.lite';
import { StorybookSectionArgTypes } from './_section.arg.types';

useMetadata({
	storybookTitle: 'Spacing',
	storybookNames: ['(Default) Medium', 'Large', 'Small', 'None'],
	storybookArgTypes: StorybookSectionArgTypes
});

export default function SectionSpacing() {
	return (
		<Fragment>
			<DBSection
				class="db-color-informational db-bg-color-basic-level-2 section-card-container"
				spacing="medium">
				<DBCard>(Default) Medium</DBCard>
				<DBCard>(Default) Medium</DBCard>{' '}
				<DBCard>(Default) Medium</DBCard>
				<DBCard>(Default) Medium</DBCard>
			</DBSection>
			<DBSection
				class="db-color-informational db-bg-color-basic-level-2 section-card-container"
				spacing="large">
				<DBCard>Large</DBCard>
				<DBCard>Large</DBCard> <DBCard>Large</DBCard>
				<DBCard>Large</DBCard>
			</DBSection>
			<DBSection
				class="db-color-informational db-bg-color-basic-level-2 section-card-container"
				spacing="small">
				<DBCard>Small</DBCard>
				<DBCard>Small</DBCard> <DBCard>Small</DBCard>
				<DBCard>Small</DBCard>
			</DBSection>
			<DBSection
				class="db-color-informational db-bg-color-basic-level-2 section-card-container"
				spacing="none">
				<DBCard>None</DBCard>
				<DBCard>None</DBCard>
				<DBCard>None</DBCard>
				<DBCard>None</DBCard>
			</DBSection>
		</Fragment>
	);
}
