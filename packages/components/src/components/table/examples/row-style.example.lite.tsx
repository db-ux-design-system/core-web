import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import { defaultTable } from './data';

useMetadata({
	storybookTitle: 'Row Style',
	storybookNames: ['(Default) Basic', 'Zebra'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableRowStyle() {
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
					(Default) Basic
				</DBInfotext>
				<DBTable
					data={defaultTable}
					rowStyle="basic"
					captionPlain="(Default) Basic"
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
					data={defaultTable}
					rowStyle="zebra"
					captionPlain="Zebra"
				/>
			</div>
		</Fragment>
	);
}
