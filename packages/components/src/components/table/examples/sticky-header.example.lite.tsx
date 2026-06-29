import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import { overflowTable } from './data';

useMetadata({
	storybookTitle: 'Sticky Header',
	storybookNames: ['(Default) None', 'Both', 'Horizontal', 'Vertical'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableStickyHeader() {
	return (
		<Fragment>
			<div
				style={{
					inlineSize: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)',
					blockSize: '300px'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					(Default) None
				</DBInfotext>
				<DBTable data={overflowTable} captionPlain="(Default) None" />
			</div>
			<i class="line-break" data-sb-ignore="true" />
			<div
				style={{
					inlineSize: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)',
					blockSize: '300px'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Both
				</DBInfotext>
				<DBTable
					data={overflowTable}
					captionPlain="Both"
					stickyHeader="both"
				/>
			</div>
			<i class="line-break" data-sb-ignore="true" />
			<div
				style={{
					inlineSize: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)',
					blockSize: '300px'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Horizontal
				</DBInfotext>
				<DBTable
					data={overflowTable}
					stickyHeader="horizontal"
					captionPlain="Horizontal"
				/>
			</div>
			<i class="line-break" data-sb-ignore="true" />
			<div
				style={{
					inlineSize: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)',
					blockSize: '300px'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Vertical
				</DBInfotext>
				<DBTable
					data={overflowTable}
					stickyHeader="vertical"
					captionPlain="Vertical"
				/>
			</div>
		</Fragment>
	);
}
