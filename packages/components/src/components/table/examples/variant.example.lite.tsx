import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import { subHeaderEmphasisWeakTable } from './data';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: ['(Default) Flat', 'Spaced'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableVariant() {
	return (
		<Fragment>
			<div
				style={{
					minInlineSize: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					(Default) Flat
				</DBInfotext>
				<DBTable
					data={subHeaderEmphasisWeakTable}
					variant="flat"
					divider="both"
					captionPlain="(Default) Flat"
				/>
			</div>
			<div
				style={{
					minInlineSize: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Zebra
				</DBInfotext>
				<DBTable
					data={subHeaderEmphasisWeakTable}
					variant="zebra"
					divider="both"
					captionPlain="Zebra"
				/>
			</div>

			<div
				style={{
					minInlineSize: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Spaced
				</DBInfotext>
				<DBTable
					data={subHeaderEmphasisWeakTable}
					variant="spaced"
					divider="both"
					captionPlain="Spaced"
				/>
			</div>
		</Fragment>
	);
}
