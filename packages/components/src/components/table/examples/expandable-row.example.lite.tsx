import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
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
	storybookNames: ['Flat', 'Zebra', 'Spaced', 'Mobile Variant List'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableExpandableRow() {
	const state = useStore({
		columnSizes: { 0: 'min-content' }
	});

	return (
		<Fragment>
			<div
				style={{
					minInlineSize: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)',
					padding: 'var(--db-spacing-fixed-md)'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Flat
				</DBInfotext>
				<DBTable
					columnSizes={state.columnSizes}
					variant="flat"
					captionPlain="Flat">
					<DBTableHead>
						<DBTableRow>
							<DBTableHeaderCell scope="col" noText>
								Details
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Number
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Status
							</DBTableHeaderCell>
						</DBTableRow>
					</DBTableHead>
					<DBTableBody>
						<DBTableRow interactive>
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
											flexWrap: 'wrap',
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
							<DBTableDataCell>34621 234</DBTableDataCell>
							<DBTableDataCell>
								<DBTag>Status Tag</DBTag>
							</DBTableDataCell>
						</DBTableRow>
						<DBTableRow interactive>
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
											flexWrap: 'wrap',
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
							<DBTableDataCell>34621 235</DBTableDataCell>
							<DBTableDataCell>
								<DBTag>Status Tag</DBTag>
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
					gap: 'var(--db-spacing-fixed-md)',
					padding: 'var(--db-spacing-fixed-md)'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Zebra
				</DBInfotext>
				<DBTable
					columnSizes={state.columnSizes}
					variant="zebra"
					captionPlain="Zebra">
					<DBTableHead>
						<DBTableRow>
							<DBTableHeaderCell scope="col" noText>
								Details
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Number
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Status
							</DBTableHeaderCell>
						</DBTableRow>
					</DBTableHead>
					<DBTableBody>
						<DBTableRow interactive>
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
											flexWrap: 'wrap',
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
							<DBTableDataCell>34621 234</DBTableDataCell>
							<DBTableDataCell>
								<DBTag>Status Tag</DBTag>
							</DBTableDataCell>
						</DBTableRow>
						<DBTableRow interactive>
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
											flexWrap: 'wrap',
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
							<DBTableDataCell>34621 235</DBTableDataCell>
							<DBTableDataCell>
								<DBTag>Status Tag</DBTag>
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
					gap: 'var(--db-spacing-fixed-md)',
					padding: 'var(--db-spacing-fixed-md)'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Spaced
				</DBInfotext>
				<DBTable
					columnSizes={state.columnSizes}
					variant="spaced"
					captionPlain="Spaced">
					<DBTableHead>
						<DBTableRow>
							<DBTableHeaderCell scope="col" noText>
								Details
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Number
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Status
							</DBTableHeaderCell>
						</DBTableRow>
					</DBTableHead>
					<DBTableBody>
						<DBTableRow interactive>
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
											flexWrap: 'wrap',
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
							<DBTableDataCell>34621 234</DBTableDataCell>
							<DBTableDataCell>
								<DBTag>Status Tag</DBTag>
							</DBTableDataCell>
						</DBTableRow>
						<DBTableRow interactive>
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
											flexWrap: 'wrap',
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
							<DBTableDataCell>34621 235</DBTableDataCell>
							<DBTableDataCell>
								<DBTag>Status Tag</DBTag>
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
					gap: 'var(--db-spacing-fixed-md)',
					padding: 'var(--db-spacing-fixed-md)'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Mobile Variant List
				</DBInfotext>
				<DBTable
					columnSizes={state.columnSizes}
					mobileVariant="list"
					captionPlain="Mobile Variant List">
					<DBTableHead>
						<DBTableRow>
							<DBTableHeaderCell scope="col" noText>
								Details
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Number
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Status
							</DBTableHeaderCell>
						</DBTableRow>
					</DBTableHead>
					<DBTableBody>
						<DBTableRow interactive>
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
											flexWrap: 'wrap',
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
							<DBTableDataCell>34621 234</DBTableDataCell>
							<DBTableDataCell>
								<DBTag>Status Tag</DBTag>
							</DBTableDataCell>
						</DBTableRow>
						<DBTableRow interactive>
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
											flexWrap: 'wrap',
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
							<DBTableDataCell>34621 235</DBTableDataCell>
							<DBTableDataCell>
								<DBTag>Status Tag</DBTag>
							</DBTableDataCell>
						</DBTableRow>
					</DBTableBody>
				</DBTable>
			</div>
		</Fragment>
	);
}
