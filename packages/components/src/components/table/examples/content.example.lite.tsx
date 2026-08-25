import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTableBody from '../../table-body/table-body.lite';
import DBTableDataCell from '../../table-data-cell/table-data-cell.lite';
import DBTableFooter from '../../table-footer/table-footer.lite';
import DBTableHead from '../../table-head/table-head.lite';
import DBTableHeaderCell from '../../table-header-cell/table-header-cell.lite';
import DBTableRow from '../../table-row/table-row.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';
import { defaultTable } from './data';

useMetadata({
	storybookTitle: 'Content',
	storybookNames: ['Data', 'Composition'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableContent() {
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
				<DBTable data={defaultTable} captionPlain="Data" />
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
							<DBTableHeaderCell scope="col">
								Comp A
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Comp B
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Comp C
							</DBTableHeaderCell>
						</DBTableRow>
					</DBTableHead>
					<DBTableBody>
						<DBTableRow>
							<DBTableHeaderCell scope="row">
								Comp 1
							</DBTableHeaderCell>
							<DBTableDataCell>Comp 2</DBTableDataCell>
							<DBTableDataCell>Comp 3</DBTableDataCell>
						</DBTableRow>
						<DBTableRow>
							<DBTableHeaderCell scope="row">
								Comp 4
							</DBTableHeaderCell>
							<DBTableDataCell>Comp 5</DBTableDataCell>
							<DBTableDataCell>Comp 6</DBTableDataCell>
						</DBTableRow>
						<DBTableRow>
							<DBTableHeaderCell scope="row">
								Comp 7
							</DBTableHeaderCell>
							<DBTableDataCell>Comp 8</DBTableDataCell>
							<DBTableDataCell>Comp 9</DBTableDataCell>
						</DBTableRow>
					</DBTableBody>
					<DBTableFooter>
						<DBTableRow>
							<DBTableHeaderCell scope="row">
								Comp Footer 1
							</DBTableHeaderCell>
							<DBTableDataCell colSpan="2">
								Comp Footer 2
							</DBTableDataCell>
						</DBTableRow>
					</DBTableFooter>
				</DBTable>
			</div>
		</Fragment>
	);
}
