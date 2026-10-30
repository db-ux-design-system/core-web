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
				color="blue"
				material="filled-2"
				style={{
					display: 'grid',
					gap: 'var(--db-spacing-fixed-sm)',
					gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
				}}
				data-density="functional"
				id="test-id-123">
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					Functional
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					Functional
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					Functional
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					Functional
				</DBCard>
			</DBSection>
			<DBSection
				color="blue"
				material="filled-2"
				style={{
					display: 'grid',
					gap: 'var(--db-spacing-fixed-sm)',
					gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
				}}
				data-density="regular">
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					(Default) Regular
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					(Default) Regular
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					(Default) Regular
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					(Default) Regular
				</DBCard>
			</DBSection>
			<DBSection
				color="blue"
				material="filled-2"
				style={{
					display: 'grid',
					gap: 'var(--db-spacing-fixed-sm)',
					gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
				}}
				data-density="expressive">
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					Expressive
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					Expressive
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					Expressive
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					Expressive
				</DBCard>
			</DBSection>
		</Fragment>
	);
}
