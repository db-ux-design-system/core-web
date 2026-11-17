import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTableBody from '../../table-body/table-body.lite';
import DBTableDataCell from '../../table-data-cell/table-data-cell.lite';
import DBTableHead from '../../table-head/table-head.lite';
import DBTableHeaderCell from '../../table-header-cell/table-header-cell.lite';
import DBTableRow from '../../table-row/table-row.lite';
import DBTag from '../../tag/tag.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';

useMetadata({
	storybookTitle: 'Expandable Row',
	storybookNames: ['Details and Summary'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableExpandableRow() {
	return (
		<Fragment>
			<DBTable
				columnSizes={{ 2: 'min-content' }}
				mobileVariant="list"
				captionPlain="Details and Summary">
				<DBTableHead>
					<DBTableRow>
						<DBTableHeaderCell scope="col">
							Number
						</DBTableHeaderCell>
						<DBTableHeaderCell scope="col">
							Status
						</DBTableHeaderCell>
						<DBTableHeaderCell scope="col" noText>
							Details
						</DBTableHeaderCell>
					</DBTableRow>
				</DBTableHead>
				<DBTableBody>
					<DBTableRow interactive>
						<DBTableDataCell>34621 234</DBTableDataCell>
						<DBTableDataCell>
							<DBTag>Status Tag</DBTag>
						</DBTableDataCell>
						<DBTableDataCell>
							<details>
								<summary
									className="db-icon"
									data-icon="chevron_down"
									data-table-row-trigger="true">
									Show details
								</summary>
								<div
									style={{
										display: 'flex',
										gap: 'var(--db-spacing-fixed-md)'
									}}>
									<div>
										<small>Region</small>
										<p>North</p>
									</div>
									<div>
										<small>Last change</small>
										<p>14.03.26</p>
									</div>
									<div>
										<small>Quantity</small>
										<p>432</p>
									</div>
									<div>
										<small>Editor</small>
										<p>Max Mustermann</p>
									</div>
								</div>
							</details>
						</DBTableDataCell>
					</DBTableRow>
					<DBTableRow interactive>
						<DBTableDataCell>34621 235</DBTableDataCell>
						<DBTableDataCell>
							<DBTag>Status Tag</DBTag>
						</DBTableDataCell>
						<DBTableDataCell>
							<details>
								<summary
									className="db-icon"
									data-icon="chevron_down"
									data-table-row-trigger="true">
									Show details
								</summary>
								<div
									style={{
										display: 'flex',
										gap: 'var(--db-spacing-fixed-md)'
									}}>
									<div>
										<small>Region</small>
										<p>South</p>
									</div>
									<div>
										<small>Last change</small>
										<p>15.03.26</p>
									</div>
									<div>
										<small>Quantity</small>
										<p>12</p>
									</div>
									<div>
										<small>Editor</small>
										<p>Erika Musterfrau</p>
									</div>
								</div>
							</details>
						</DBTableDataCell>
					</DBTableRow>
				</DBTableBody>
			</DBTable>
		</Fragment>
	);
}
