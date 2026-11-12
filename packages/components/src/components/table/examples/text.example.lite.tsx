import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTableBody from '../../table-body/table-body.lite';
import DBTableDataCell from '../../table-data-cell/table-data-cell.lite';
import DBTableHead from '../../table-head/table-head.lite';
import DBTableHeaderCell from '../../table-header-cell/table-header-cell.lite';
import DBTableRow from '../../table-row/table-row.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import { textTable } from './data';

useMetadata({
	storybookTitle: 'Text',
	storybookNames: ['Data', 'Composition'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableText() {
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
					Data
				</DBInfotext>
				<DBTable data={textTable} captionPlain="Data" />
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
					Composition
				</DBInfotext>
				<DBTable captionPlain="Composition">
					<DBTableHead>
						<DBTableRow>
							<DBTableHeaderCell scope="col" text="Comp A" />
							<DBTableHeaderCell scope="col">
								Comp B
							</DBTableHeaderCell>
						</DBTableRow>
					</DBTableHead>
					<DBTableBody>
						<DBTableRow>
							<DBTableHeaderCell scope="row" text="Comp 1" />
							<DBTableDataCell text="Comp 2" />
						</DBTableRow>
						<DBTableRow>
							<DBTableHeaderCell scope="row">
								Comp 3
							</DBTableHeaderCell>
							<DBTableDataCell>Comp 4</DBTableDataCell>
						</DBTableRow>
					</DBTableBody>
				</DBTable>
			</div>
		</Fragment>
	);
}
