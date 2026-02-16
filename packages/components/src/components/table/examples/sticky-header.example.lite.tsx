import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import { overflowTable } from './data';

useMetadata({
	storybookTitle: 'Sticky Header',
	storybookNames: ['Joined', 'Floating', 'Joined Sticky', 'Floating Sticky'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableStickyHeader() {
	return (
		<Fragment>
			<div
				style={{
					minInlineSize: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)',
					blockSize: '300px'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Joined
				</DBInfotext>
				<DBTable
					data={overflowTable}
					variant="joined"
					captionPlain="Joined"
				/>
			</div>
			<div
				style={{
					minInlineSize: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)',
					blockSize: '300px'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Floating
				</DBInfotext>
				<DBTable
					data={overflowTable}
					variant="floating"
					captionPlain="Floating"
				/>
			</div>
			<div
				style={{
					minInlineSize: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)',
					blockSize: '300px'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Joined Sticky
				</DBInfotext>
				<DBTable
					data={overflowTable}
					variant="joined"
					stickyHeader={true}
					captionPlain="Joined Sticky"
				/>
			</div>
			<div
				style={{
					minInlineSize: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)',
					blockSize: '300px'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Floating Sticky
				</DBInfotext>
				<DBTable
					data={overflowTable}
					variant="floating"
					stickyHeader={true}
					captionPlain="Floating Sticky"
				/>
			</div>
		</Fragment>
	);
}
