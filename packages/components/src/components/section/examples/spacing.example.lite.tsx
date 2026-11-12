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
				color="blue"
				material="filled-2"
				style={{
					display: 'grid',
					gap: 'var(--db-spacing-fixed-sm)',
					gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
				}}
				spacing="medium">
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					(Default) Medium
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					(Default) Medium
				</DBCard>{' '}
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					(Default) Medium
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					(Default) Medium
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
				spacing="large">
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					Large
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					Large
				</DBCard>{' '}
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					Large
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					Large
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
				spacing="small">
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					Small
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					Small
				</DBCard>{' '}
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					Small
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					Small
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
				spacing="none">
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					None
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					None
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					None
				</DBCard>
				<DBCard
					color="grey"
					material="filled-1"
					style={{ inlineSize: '100%' }}>
					None
				</DBCard>
			</DBSection>
		</Fragment>
	);
}
