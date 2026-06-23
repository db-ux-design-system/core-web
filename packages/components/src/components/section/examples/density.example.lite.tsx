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
				class="db-color-informational db-bg-color-basic-level-2"
				style={{
					display: 'grid',
					gap: 'var(--db-spacing-fixed-sm)',
					gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
				}}
				data-density="functional"
				id="test-id-123">
				<DBCard style={{ inlineSize: '100%' }}>Functional</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>Functional</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>Functional</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>Functional</DBCard>
			</DBSection>
			<DBSection
				class="db-color-informational db-bg-color-basic-level-2"
				style={{
					display: 'grid',
					gap: 'var(--db-spacing-fixed-sm)',
					gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
				}}
				data-density="regular">
				<DBCard style={{ inlineSize: '100%' }}>
					(Default) Regular
				</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>
					(Default) Regular
				</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>
					(Default) Regular
				</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>
					(Default) Regular
				</DBCard>
			</DBSection>
			<DBSection
				class="db-color-informational db-bg-color-basic-level-2"
				style={{
					display: 'grid',
					gap: 'var(--db-spacing-fixed-sm)',
					gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
				}}
				data-density="expressive">
				<DBCard style={{ inlineSize: '100%' }}>Expressive</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>Expressive</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>Expressive</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>Expressive</DBCard>
			</DBSection>
		</Fragment>
	);
}
