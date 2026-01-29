import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCard from '../../card/card.lite';
import DBSection from '../section.lite';
import { StorybookSectionArgTypes } from './_section.arg.types';

useMetadata({
	storybookTitle: 'Width',
	storybookNames: ['(Default) Full', 'Small', 'Medium', 'Large'],
	storybookArgTypes: StorybookSectionArgTypes
});

export default function SectionWidth() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBSection class="db-color-informational db-bg-color-basic-level-2 section-card-container">
					<DBCard>(Default) Full</DBCard>
					<DBCard>(Default) Full</DBCard>
					<DBCard>(Default) Full</DBCard>
					<DBCard>(Default) Full</DBCard>
				</DBSection>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBSection
					class="db-color-informational db-bg-color-basic-level-2 section-card-container"
					width="small">
					<DBCard>Small</DBCard>
					<DBCard>Small</DBCard> <DBCard>Small</DBCard>
					<DBCard>Small</DBCard>
				</DBSection>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBSection
					class="db-color-informational db-bg-color-basic-level-2 section-card-container"
					width="medium">
					<DBCard>Medium</DBCard>
					<DBCard>Medium</DBCard> <DBCard>Medium</DBCard>
					<DBCard>Medium</DBCard>
				</DBSection>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBSection
					class="db-color-informational db-bg-color-basic-level-2 section-card-container"
					width="large">
					<DBCard>Large</DBCard>
					<DBCard>Large</DBCard> <DBCard>Large</DBCard>
					<DBCard>Large</DBCard>
				</DBSection>
			</div>
		</Fragment>
	);
}
