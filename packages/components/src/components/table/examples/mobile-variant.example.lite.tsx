import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import { defaultTable } from './data';

useMetadata({
	storybookTitle: 'Mobile Variant',
	storybookNames: ['(Default) Table', 'List'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableMobileVariant() {
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
					(Default) Table
				</DBInfotext>
				<DBTable
					data={defaultTable}
					mobileVariant="table"
					captionPlain="(Default) Table"
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
					List
				</DBInfotext>
				<DBTable
					data={defaultTable}
					mobileVariant="list"
					captionPlain="List"
				/>
			</div>
		</Fragment>
	);
}
