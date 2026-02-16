import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import { subHeaderEmphasisWeakTable } from './data';

useMetadata({
	storybookTitle: 'Table Layout',
	storybookNames: ['Joined Auto', 'Joined Fixed', 'Floating Auto', 'Floating Fixed'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableLayout() {
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
					Joined Auto
				</DBInfotext>
				<DBTable
					data={subHeaderEmphasisWeakTable}
					variant="joined"
					tableLayout="auto"
					captionPlain="Joined Auto"
					divider="both"
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
					Joined Fixed
				</DBInfotext>
				<DBTable
					data={subHeaderEmphasisWeakTable}
					variant="joined"
					tableLayout="fixed"
					captionPlain="Joined Fixed"
					divider="both"
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
					Floating Auto
				</DBInfotext>
				<DBTable
					data={subHeaderEmphasisWeakTable}
					variant="floating"
					tableLayout="auto"
					captionPlain="Floating Auto"
					divider="both"
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
					Floating Fixed
				</DBInfotext>
				<DBTable
					data={subHeaderEmphasisWeakTable}
					variant="floating"
					tableLayout="fixed"
					captionPlain="Floating Fixed"
					divider="both"
				/>
			</div>
		</Fragment>
	);
}
