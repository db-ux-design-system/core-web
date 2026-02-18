import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBTableBody from '../../table-body/table-body.lite';
import DBTableDataCell from '../../table-data-cell/table-data-cell.lite';
import DBTableHead from '../../table-head/table-head.lite';
import DBTableHeaderCell from '../../table-header-cell/table-header-cell.lite';
import DBTableRow from '../../table-row/table-row.lite';
import DBTooltip from '../../tooltip/tooltip.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';

useMetadata({
	storybookTitle: 'Interactive Row',
	storybookNames: ['Joined', 'Floating'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableInteractiveRow() {
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
					Joined
				</DBInfotext>
				<DBTable captionPlain="Joined">
					<DBTableHead>
						<DBTableRow>
							<DBTableHeaderCell scope="col">
								Comp A
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Comp B
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col" noText>
								Action
							</DBTableHeaderCell>
						</DBTableRow>
					</DBTableHead>
					<DBTableBody>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row">
								Comp 1
							</DBTableHeaderCell>
							<DBTableDataCell>
								<DBButton>Click</DBButton>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<a
									className="db-button"
									href="#"
									data-variant="ghost"
									data-table-row-action="true"
									data-no-text="true"
									data-icon="arrow_up_right">
									Open Link
									<DBTooltip>Open Link</DBTooltip>
								</a>
							</DBTableDataCell>
						</DBTableRow>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row">
								Comp 4
							</DBTableHeaderCell>
							<DBTableDataCell>
								<DBButton>Click</DBButton>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<a
									className="db-button"
									href="#"
									data-variant="ghost"
									data-table-row-action="true"
									data-no-text="true"
									data-icon="arrow_up_right">
									Open Link
									<DBTooltip>Open Link</DBTooltip>
								</a>
							</DBTableDataCell>
						</DBTableRow>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row">
								Comp 7
							</DBTableHeaderCell>
							<DBTableDataCell>
								<DBButton>Click</DBButton>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<a
									className="db-button"
									href="#"
									data-variant="ghost"
									data-table-row-action="true"
									data-no-text="true"
									data-icon="arrow_up_right">
									Open Link
									<DBTooltip>Open Link</DBTooltip>
								</a>
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
					Floating
				</DBInfotext>
				<DBTable variant="floating" captionPlain="Floating">
					<DBTableHead>
						<DBTableRow>
							<DBTableHeaderCell scope="col">
								Comp A
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Comp B
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col" noText>
								Action
							</DBTableHeaderCell>
						</DBTableRow>
					</DBTableHead>
					<DBTableBody>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row">
								Comp 1
							</DBTableHeaderCell>
							<DBTableDataCell>
								<DBButton>Click</DBButton>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<a
									className="db-button"
									href="#"
									data-variant="ghost"
									data-table-row-action="true"
									data-no-text="true"
									data-icon="arrow_up_right">
									Open Link
									<DBTooltip>Open Link</DBTooltip>
								</a>
							</DBTableDataCell>
						</DBTableRow>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row">
								Comp 4
							</DBTableHeaderCell>
							<DBTableDataCell>
								<DBButton>Click</DBButton>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<a
									className="db-button"
									href="#"
									data-variant="ghost"
									data-table-row-action="true"
									data-no-text="true"
									data-icon="arrow_up_right">
									Open Link
									<DBTooltip>Open Link</DBTooltip>
								</a>
							</DBTableDataCell>
						</DBTableRow>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row">
								Comp 7
							</DBTableHeaderCell>
							<DBTableDataCell>
								<DBButton>Click</DBButton>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<a
									className="db-button"
									href="#"
									data-variant="ghost"
									data-table-row-action="true"
									data-no-text="true"
									data-icon="arrow_up_right">
									Open Link
									<DBTooltip>Open Link</DBTooltip>
								</a>
							</DBTableDataCell>
						</DBTableRow>
					</DBTableBody>
				</DBTable>
			</div>
		</Fragment>
	);
}
