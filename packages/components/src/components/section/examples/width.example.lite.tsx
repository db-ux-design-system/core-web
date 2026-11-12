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
				<DBSection
					color="blue"
					material="filled-2"
					style={{
						display: 'grid',
						gap: 'var(--db-spacing-fixed-sm)',
						gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
					}}>
					<DBCard
						color="grey"
						material="filled-1"
						style={{ inlineSize: '100%' }}>
						(Default) Full
					</DBCard>
					<DBCard
						color="grey"
						material="filled-1"
						style={{ inlineSize: '100%' }}>
						(Default) Full
					</DBCard>
					<DBCard
						color="grey"
						material="filled-1"
						style={{ inlineSize: '100%' }}>
						(Default) Full
					</DBCard>
					<DBCard
						color="grey"
						material="filled-1"
						style={{ inlineSize: '100%' }}>
						(Default) Full
					</DBCard>
				</DBSection>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBSection
					color="blue"
					material="filled-2"
					style={{
						display: 'grid',
						gap: 'var(--db-spacing-fixed-sm)',
						gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
					}}
					width="small">
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
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBSection
					color="blue"
					material="filled-2"
					style={{
						display: 'grid',
						gap: 'var(--db-spacing-fixed-sm)',
						gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
					}}
					width="medium">
					<DBCard
						color="grey"
						material="filled-1"
						style={{ inlineSize: '100%' }}>
						Medium
					</DBCard>
					<DBCard
						color="grey"
						material="filled-1"
						style={{ inlineSize: '100%' }}>
						Medium
					</DBCard>{' '}
					<DBCard
						color="grey"
						material="filled-1"
						style={{ inlineSize: '100%' }}>
						Medium
					</DBCard>
					<DBCard
						color="grey"
						material="filled-1"
						style={{ inlineSize: '100%' }}>
						Medium
					</DBCard>
				</DBSection>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBSection
					color="blue"
					material="filled-2"
					style={{
						display: 'grid',
						gap: 'var(--db-spacing-fixed-sm)',
						gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
					}}
					width="large">
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
			</div>
		</Fragment>
	);
}
