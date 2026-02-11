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
					class="db-color-informational db-bg-color-basic-level-2"
					style={{
						display: 'grid',
						gap: 'var(--db-spacing-fixed-sm)',
						gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
					}}>
					<DBCard style={{ inlineSize: '100%' }}>
						(Default) Full
					</DBCard>
					<DBCard style={{ inlineSize: '100%' }}>
						(Default) Full
					</DBCard>
					<DBCard style={{ inlineSize: '100%' }}>
						(Default) Full
					</DBCard>
					<DBCard style={{ inlineSize: '100%' }}>
						(Default) Full
					</DBCard>
				</DBSection>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBSection
					class="db-color-informational db-bg-color-basic-level-2"
					style={{
						display: 'grid',
						gap: 'var(--db-spacing-fixed-sm)',
						gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
					}}
					width="small">
					<DBCard style={{ inlineSize: '100%' }}>Small</DBCard>
					<DBCard style={{ inlineSize: '100%' }}>Small</DBCard>{' '}
					<DBCard style={{ inlineSize: '100%' }}>Small</DBCard>
					<DBCard style={{ inlineSize: '100%' }}>Small</DBCard>
				</DBSection>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBSection
					class="db-color-informational db-bg-color-basic-level-2"
					style={{
						display: 'grid',
						gap: 'var(--db-spacing-fixed-sm)',
						gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
					}}
					width="medium">
					<DBCard style={{ inlineSize: '100%' }}>Medium</DBCard>
					<DBCard style={{ inlineSize: '100%' }}>Medium</DBCard>{' '}
					<DBCard style={{ inlineSize: '100%' }}>Medium</DBCard>
					<DBCard style={{ inlineSize: '100%' }}>Medium</DBCard>
				</DBSection>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBSection
					class="db-color-informational db-bg-color-basic-level-2"
					style={{
						display: 'grid',
						gap: 'var(--db-spacing-fixed-sm)',
						gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
					}}
					width="large">
					<DBCard style={{ inlineSize: '100%' }}>Large</DBCard>
					<DBCard style={{ inlineSize: '100%' }}>Large</DBCard>{' '}
					<DBCard style={{ inlineSize: '100%' }}>Large</DBCard>
					<DBCard style={{ inlineSize: '100%' }}>Large</DBCard>
				</DBSection>
			</div>
		</Fragment>
	);
}
