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
		columnSizes: { 0: 'min-content' },
		columnSizesLast: { 2: 'min-content' }
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
									<dl
										style={{
											display: 'flex',
											flexWrap: 'wrap',
											gap: 'var(--db-spacing-fixed-md)',
											margin: 0
										}}>
										<div>
											<dt>
												<small>Region</small>
											</dt>
											<dd style={{ margin: 0 }}>North</dd>
										</div>
										<div>
											<dt>
												<small>Last change</small>
											</dt>
											<dd style={{ margin: 0 }}>
												14.03.26
											</dd>
										</div>
										<div>
											<dt>
												<small>Quantity</small>
											</dt>
											<dd style={{ margin: 0 }}>432</dd>
										</div>
										<div>
											<dt>
												<small>Editor</small>
											</dt>
											<dd style={{ margin: 0 }}>
												Max Mustermann
											</dd>
										</div>
									</dl>
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
									<dl
										style={{
											display: 'flex',
											flexWrap: 'wrap',
											gap: 'var(--db-spacing-fixed-md)',
											margin: 0
										}}>
										<div>
											<dt>
												<small>Region</small>
											</dt>
											<dd style={{ margin: 0 }}>South</dd>
										</div>
										<div>
											<dt>
												<small>Last change</small>
											</dt>
											<dd style={{ margin: 0 }}>
												15.03.26
											</dd>
										</div>
										<div>
											<dt>
												<small>Quantity</small>
											</dt>
											<dd style={{ margin: 0 }}>12</dd>
										</div>
										<div>
											<dt>
												<small>Editor</small>
											</dt>
											<dd style={{ margin: 0 }}>
												Erika Musterfrau
											</dd>
										</div>
									</dl>
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
									<dl
										style={{
											display: 'flex',
											flexWrap: 'wrap',
											gap: 'var(--db-spacing-fixed-md)',
											margin: 0
										}}>
										<div>
											<dt>
												<small>Region</small>
											</dt>
											<dd style={{ margin: 0 }}>North</dd>
										</div>
										<div>
											<dt>
												<small>Last change</small>
											</dt>
											<dd style={{ margin: 0 }}>
												14.03.26
											</dd>
										</div>
										<div>
											<dt>
												<small>Quantity</small>
											</dt>
											<dd style={{ margin: 0 }}>432</dd>
										</div>
										<div>
											<dt>
												<small>Editor</small>
											</dt>
											<dd style={{ margin: 0 }}>
												Max Mustermann
											</dd>
										</div>
									</dl>
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
									<dl
										style={{
											display: 'flex',
											flexWrap: 'wrap',
											gap: 'var(--db-spacing-fixed-md)',
											margin: 0
										}}>
										<div>
											<dt>
												<small>Region</small>
											</dt>
											<dd style={{ margin: 0 }}>South</dd>
										</div>
										<div>
											<dt>
												<small>Last change</small>
											</dt>
											<dd style={{ margin: 0 }}>
												15.03.26
											</dd>
										</div>
										<div>
											<dt>
												<small>Quantity</small>
											</dt>
											<dd style={{ margin: 0 }}>12</dd>
										</div>
										<div>
											<dt>
												<small>Editor</small>
											</dt>
											<dd style={{ margin: 0 }}>
												Erika Musterfrau
											</dd>
										</div>
									</dl>
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
									<dl
										style={{
											display: 'flex',
											flexWrap: 'wrap',
											gap: 'var(--db-spacing-fixed-md)',
											margin: 0
										}}>
										<div>
											<dt>
												<small>Region</small>
											</dt>
											<dd style={{ margin: 0 }}>North</dd>
										</div>
										<div>
											<dt>
												<small>Last change</small>
											</dt>
											<dd style={{ margin: 0 }}>
												14.03.26
											</dd>
										</div>
										<div>
											<dt>
												<small>Quantity</small>
											</dt>
											<dd style={{ margin: 0 }}>432</dd>
										</div>
										<div>
											<dt>
												<small>Editor</small>
											</dt>
											<dd style={{ margin: 0 }}>
												Max Mustermann
											</dd>
										</div>
									</dl>
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
									<dl
										style={{
											display: 'flex',
											flexWrap: 'wrap',
											gap: 'var(--db-spacing-fixed-md)',
											margin: 0
										}}>
										<div>
											<dt>
												<small>Region</small>
											</dt>
											<dd style={{ margin: 0 }}>South</dd>
										</div>
										<div>
											<dt>
												<small>Last change</small>
											</dt>
											<dd style={{ margin: 0 }}>
												15.03.26
											</dd>
										</div>
										<div>
											<dt>
												<small>Quantity</small>
											</dt>
											<dd style={{ margin: 0 }}>12</dd>
										</div>
										<div>
											<dt>
												<small>Editor</small>
											</dt>
											<dd style={{ margin: 0 }}>
												Erika Musterfrau
											</dd>
										</div>
									</dl>
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
									<dl
										style={{
											display: 'flex',
											flexWrap: 'wrap',
											gap: 'var(--db-spacing-fixed-md)',
											margin: 0
										}}>
										<div>
											<dt>
												<small>Region</small>
											</dt>
											<dd style={{ margin: 0 }}>North</dd>
										</div>
										<div>
											<dt>
												<small>Last change</small>
											</dt>
											<dd style={{ margin: 0 }}>
												14.03.26
											</dd>
										</div>
										<div>
											<dt>
												<small>Quantity</small>
											</dt>
											<dd style={{ margin: 0 }}>432</dd>
										</div>
										<div>
											<dt>
												<small>Editor</small>
											</dt>
											<dd style={{ margin: 0 }}>
												Max Mustermann
											</dd>
										</div>
									</dl>
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
									<dl
										style={{
											display: 'flex',
											flexWrap: 'wrap',
											gap: 'var(--db-spacing-fixed-md)',
											margin: 0
										}}>
										<div>
											<dt>
												<small>Region</small>
											</dt>
											<dd style={{ margin: 0 }}>South</dd>
										</div>
										<div>
											<dt>
												<small>Last change</small>
											</dt>
											<dd style={{ margin: 0 }}>
												15.03.26
											</dd>
										</div>
										<div>
											<dt>
												<small>Quantity</small>
											</dt>
											<dd style={{ margin: 0 }}>12</dd>
										</div>
										<div>
											<dt>
												<small>Editor</small>
											</dt>
											<dd style={{ margin: 0 }}>
												Erika Musterfrau
											</dd>
										</div>
									</dl>
								</details>
							</DBTableDataCell>
						</DBTableRow>
					</DBTableBody>
				</DBTable>
			</div>
		</Fragment>
	);
}
