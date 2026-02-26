import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBTableBody from '../../table-body/table-body.lite';
import DBTableDataCell from '../../table-data-cell/table-data-cell.lite';
import DBTableHead from '../../table-head/table-head.lite';
import DBTableHeaderCell from '../../table-header-cell/table-header-cell.lite';
import DBTableRow from '../../table-row/table-row.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';

useMetadata({
	storybookTitle: 'Vertical Alignment',
	storybookNames: ['Start', '(Default) Center', 'End'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableVerticalAlignment() {
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
					Start
				</DBInfotext>
				<DBTable captionPlain="Start" divider="both">
					<DBTableHead>
						<DBTableRow>
							<DBTableHeaderCell
								scope="col"
								verticalAlignment="start">
								Header A
							</DBTableHeaderCell>
							<DBTableHeaderCell
								scope="col"
								verticalAlignment="start">
								Header B
							</DBTableHeaderCell>
						</DBTableRow>
					</DBTableHead>
					<DBTableBody>
						<DBTableRow>
							<DBTableHeaderCell
								scope="row"
								verticalAlignment="start">
								Comp 1
							</DBTableHeaderCell>
							<DBTableDataCell verticalAlignment="start">
								<DBButton>Click</DBButton>
							</DBTableDataCell>
						</DBTableRow>
					</DBTableBody>
				</DBTable>
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
					(Default) Center
				</DBInfotext>
				<DBTable captionPlain="(Default) Center" divider="both">
					<DBTableHead>
						<DBTableRow>
							<DBTableHeaderCell
								scope="col"
								verticalAlignment="center">
								Header A
							</DBTableHeaderCell>
							<DBTableHeaderCell
								scope="col"
								verticalAlignment="center">
								Header B
							</DBTableHeaderCell>
						</DBTableRow>
					</DBTableHead>
					<DBTableBody>
						<DBTableRow>
							<DBTableHeaderCell
								scope="row"
								verticalAlignment="center">
								Comp 1
							</DBTableHeaderCell>
							<DBTableDataCell verticalAlignment="center">
								<DBButton>Click</DBButton>
							</DBTableDataCell>
						</DBTableRow>
					</DBTableBody>
				</DBTable>
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
					End
				</DBInfotext>
				<DBTable captionPlain="End" divider="both">
					<DBTableHead>
						<DBTableRow>
							<DBTableHeaderCell
								scope="col"
								verticalAlignment="end">
								Header A
							</DBTableHeaderCell>
							<DBTableHeaderCell
								scope="col"
								verticalAlignment="end">
								Header B
							</DBTableHeaderCell>
						</DBTableRow>
					</DBTableHead>
					<DBTableBody>
						<DBTableRow>
							<DBTableHeaderCell
								scope="row"
								verticalAlignment="end">
								Comp 1
							</DBTableHeaderCell>
							<DBTableDataCell verticalAlignment="end">
								<DBButton>Click</DBButton>
							</DBTableDataCell>
						</DBTableRow>
					</DBTableBody>
				</DBTable>
			</div>
		</Fragment>
	);
}
