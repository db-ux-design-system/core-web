import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCard from '../../card/card.lite';
import DBSection from '../section.lite';
import { StorybookSectionArgTypes } from './_section.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookSectionArgTypes
});

export default function SectionDensity() {
	return (
		<Fragment>
			<DBSection
				className="db-color-informational db-bg-color-basic-level-2 section-card-container"
				data-density="functional"
				id="test-id-123">
				<DBCard>Functional</DBCard>
				<DBCard>Functional</DBCard>
				<DBCard>Functional</DBCard>
				<DBCard>Functional</DBCard>
			</DBSection>
			<DBSection
				className="db-color-informational db-bg-color-basic-level-2 section-card-container"
				data-density="regular">
				<DBCard>(Default) Regular</DBCard>
				<DBCard>(Default) Regular</DBCard>
				<DBCard>(Default) Regular</DBCard>
				<DBCard>(Default) Regular</DBCard>
			</DBSection>
			<DBSection
				className="db-color-informational db-bg-color-basic-level-2 section-card-container"
				data-density="expressive">
				<DBCard>Expressive</DBCard>
				<DBCard>Expressive</DBCard>
				<DBCard>Expressive</DBCard>
				<DBCard>Expressive</DBCard>
			</DBSection>
		</Fragment>
	);
}
