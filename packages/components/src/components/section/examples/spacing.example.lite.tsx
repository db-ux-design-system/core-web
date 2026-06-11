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
				class="db-color-informational db-bg-color-basic-level-2"
				style={{
					display: 'grid',
					gap: 'var(--db-spacing-fixed-sm)',
					gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
				}}
				spacing="medium">
				<DBCard style={{ inlineSize: '100%' }}>(Default) Medium</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>
					(Default) Medium
				</DBCard>{' '}
				<DBCard style={{ inlineSize: '100%' }}>(Default) Medium</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>(Default) Medium</DBCard>
			</DBSection>
			<DBSection
				class="db-color-informational db-bg-color-basic-level-2"
				style={{
					display: 'grid',
					gap: 'var(--db-spacing-fixed-sm)',
					gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
				}}
				spacing="large">
				<DBCard style={{ inlineSize: '100%' }}>Large</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>Large</DBCard>{' '}
				<DBCard style={{ inlineSize: '100%' }}>Large</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>Large</DBCard>
			</DBSection>
			<DBSection
				class="db-color-informational db-bg-color-basic-level-2"
				style={{
					display: 'grid',
					gap: 'var(--db-spacing-fixed-sm)',
					gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
				}}
				spacing="small">
				<DBCard style={{ inlineSize: '100%' }}>Small</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>Small</DBCard>{' '}
				<DBCard style={{ inlineSize: '100%' }}>Small</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>Small</DBCard>
			</DBSection>
			<DBSection
				class="db-color-informational db-bg-color-basic-level-2"
				style={{
					display: 'grid',
					gap: 'var(--db-spacing-fixed-sm)',
					gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
				}}
				spacing="none">
				<DBCard style={{ inlineSize: '100%' }}>None</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>None</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>None</DBCard>
				<DBCard style={{ inlineSize: '100%' }}>None</DBCard>
			</DBSection>
		</Fragment>
	);
}
