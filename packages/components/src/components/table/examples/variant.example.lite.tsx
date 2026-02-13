import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import { subHeaderEmphasisWeakTable } from './data';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: ['(Default) Joined', 'Floating'],
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
					(Default) Joined
				</DBInfotext>
				<DBTable
					data={subHeaderEmphasisWeakTable}
					rowStyle="zebra"
					variant="joined"
					divider="both"
					captionPlain="(Default) Joined"
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
					Floating
				</DBInfotext>
				<DBTable
					data={subHeaderEmphasisWeakTable}
					variant="floating"
					rowStyle="zebra"
					divider="both"
					captionPlain="Floating"
				/>
			</div>
		</Fragment>
	);
}
