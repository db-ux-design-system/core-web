import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import { defaultTable } from './data';

useMetadata({
	storybookTitle: 'Divider',
	storybookNames: ['None', 'Both', '(Default) Horizontal', 'Vertical'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableDivider() {
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
					None
				</DBInfotext>
				<DBTable
					data={defaultTable}
					divider="none"
					captionPlain="None"
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
					Both
				</DBInfotext>
				<DBTable
					data={defaultTable}
					divider="both"
					captionPlain="Both"
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
					(Default) Horizontal
				</DBInfotext>
				<DBTable
					data={defaultTable}
					divider="horizontal"
					captionPlain="(Default) Horizontal"
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
					Vertical
				</DBInfotext>
				<DBTable
					data={defaultTable}
					divider="vertical"
					captionPlain="Vertical"
				/>
			</div>
		</Fragment>
	);
}
