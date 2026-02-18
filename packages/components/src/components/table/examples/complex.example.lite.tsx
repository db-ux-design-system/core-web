import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBCheckbox from '../../checkbox/checkbox.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBInput from '../../input/input.lite';
import DBLink from '../../link/link.lite';
import DBTableBody from '../../table-body/table-body.lite';
import DBTableDataCell from '../../table-data-cell/table-data-cell.lite';
import DBTableHead from '../../table-head/table-head.lite';
import DBTableHeaderCell from '../../table-header-cell/table-header-cell.lite';
import DBTableRow from '../../table-row/table-row.lite';
import DBTag from '../../tag/tag.lite';
import DBTooltip from '../../tooltip/tooltip.lite';
import DBTable from '../table.lite';
import { StorybookTableArgTypes } from './_table.arg.types';

useMetadata({
	storybookTitle: 'Complex',
	storybookNames: ['Joined', 'Floating', 'Mobile variant: List'],
	storybookArgTypes: StorybookTableArgTypes
});

export default function TableComplex() {
	return (
		<Fragment>
			<div
				style={{
					inlineSize: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Joined
				</DBInfotext>
				<DBTable captionPlain="Joined, sortable columns are Link.">
					<DBTableHead>
						<DBTableRow>
							<DBTableHeaderCell scope="col">
								<DBCheckbox showLabel={false} name="joined">
									Check All
									<DBTooltip placement="top">
										Check All
									</DBTooltip>
								</DBCheckbox>
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								<div
									style={{
										display: 'flex',
										gap: 'var(--db-spacing-fixed-xs)'
									}}>
									Link
									<DBButton
										size="small"
										variant="ghost"
										icon="arrows_vertical"
										noText>
										Sort Link
										<DBTooltip placement="top">
											Sort Link
										</DBTooltip>
									</DBButton>
								</div>
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Tag
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Infotext
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Text
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Input
							</DBTableHeaderCell>
							<DBTableHeaderCell
								scope="col"
								horizontalAlignment="end"
								noText>
								Button
							</DBTableHeaderCell>
						</DBTableRow>
					</DBTableHead>
					<DBTableBody>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row">
								<DBCheckbox
									showLabel={false}
									data-table-row-action="true"
									name="joined">
									Check Red
								</DBCheckbox>
							</DBTableHeaderCell>
							<DBTableDataCell>
								<DBLink
									href="#"
									content="external"
									referrerPolicy="no-referrer"
									target="_blank">
									Red
								</DBLink>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBTag icon="check" semantic="informational">
									Progress
								</DBTag>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBInfotext semantic="critical">15</DBInfotext>
							</DBTableDataCell>
							<DBTableDataCell>Red</DBTableDataCell>
							<DBTableDataCell>
								<DBInput
									label="Red"
									showLabel={false}
									placeholder="Red"
									required
								/>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<DBButton
									variant="ghost"
									noText
									icon="more_vertical">
									More
									<DBTooltip placement="left">More</DBTooltip>
								</DBButton>
							</DBTableDataCell>
						</DBTableRow>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row">
								<DBCheckbox
									showLabel={false}
									data-table-row-action="true"
									name="joined">
									Check Yellow
								</DBCheckbox>
							</DBTableHeaderCell>
							<DBTableDataCell>
								<DBLink
									href="#"
									content="external"
									referrerPolicy="no-referrer"
									target="_blank">
									Yellow
								</DBLink>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBTag icon="check" semantic="warning">
									Open
								</DBTag>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBInfotext semantic="warning">1</DBInfotext>
							</DBTableDataCell>
							<DBTableDataCell>Yellow</DBTableDataCell>
							<DBTableDataCell>
								<DBInput
									label="Yellow"
									showLabel={false}
									placeholder="Yellow"
								/>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<DBButton
									variant="ghost"
									noText
									icon="more_vertical">
									More
									<DBTooltip placement="left">More</DBTooltip>
								</DBButton>
							</DBTableDataCell>
						</DBTableRow>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row">
								<DBCheckbox
									showLabel={false}
									data-table-row-action="true"
									name="joined">
									Check Green
								</DBCheckbox>
							</DBTableHeaderCell>
							<DBTableDataCell>
								<DBLink
									href="#"
									content="external"
									referrerPolicy="no-referrer"
									target="_blank">
									Green
								</DBLink>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBTag icon="check" semantic="successful">
									Done
								</DBTag>
							</DBTableDataCell>
							<DBTableDataCell></DBTableDataCell>
							<DBTableDataCell>Green</DBTableDataCell>
							<DBTableDataCell>
								<DBInput
									label="Green"
									showLabel={false}
									placeholder="Green"
								/>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<DBButton
									variant="ghost"
									noText
									icon="more_vertical">
									More
									<DBTooltip placement="left">More</DBTooltip>
								</DBButton>
							</DBTableDataCell>
						</DBTableRow>
					</DBTableBody>
				</DBTable>
			</div>
			<div
				style={{
					inlineSize: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Zebra
				</DBInfotext>
				<DBTable
					variant="zebra"
					captionPlain="Zebra, sortable columns are Link.">
					<DBTableHead>
						<DBTableRow>
							<DBTableHeaderCell scope="col">
								<DBCheckbox showLabel={false} name="zebra">
									Check All
									<DBTooltip placement="top">
										Check All
									</DBTooltip>
								</DBCheckbox>
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								<div
									style={{
										display: 'flex',
										gap: 'var(--db-spacing-fixed-xs)'
									}}>
									Link
									<DBButton
										size="small"
										variant="ghost"
										icon="arrows_vertical"
										noText>
										Sort Link
										<DBTooltip placement="top">
											Sort Link
										</DBTooltip>
									</DBButton>
								</div>
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Tag
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Infotext
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Text
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Input
							</DBTableHeaderCell>
							<DBTableHeaderCell
								scope="col"
								horizontalAlignment="end"
								noText>
								Button
							</DBTableHeaderCell>
						</DBTableRow>
					</DBTableHead>
					<DBTableBody>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row">
								<DBCheckbox
									showLabel={false}
									data-table-row-action="true"
									name="zebra">
									Check Red
								</DBCheckbox>
							</DBTableHeaderCell>
							<DBTableDataCell>
								<DBLink
									href="#"
									content="external"
									referrerPolicy="no-referrer"
									target="_blank">
									Red
								</DBLink>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBTag icon="check" semantic="informational">
									Progress
								</DBTag>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBInfotext semantic="critical">15</DBInfotext>
							</DBTableDataCell>
							<DBTableDataCell>Red</DBTableDataCell>
							<DBTableDataCell>
								<DBInput
									label="Red"
									showLabel={false}
									placeholder="Red"
									required
								/>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<DBButton
									variant="ghost"
									noText
									icon="more_vertical">
									More
									<DBTooltip placement="left">More</DBTooltip>
								</DBButton>
							</DBTableDataCell>
						</DBTableRow>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row">
								<DBCheckbox
									showLabel={false}
									data-table-row-action="true"
									name="zebra">
									Check Yellow
								</DBCheckbox>
							</DBTableHeaderCell>
							<DBTableDataCell>
								<DBLink
									href="#"
									content="external"
									referrerPolicy="no-referrer"
									target="_blank">
									Yellow
								</DBLink>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBTag icon="check" semantic="warning">
									Open
								</DBTag>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBInfotext semantic="warning">1</DBInfotext>
							</DBTableDataCell>
							<DBTableDataCell>Yellow</DBTableDataCell>
							<DBTableDataCell>
								<DBInput
									label="Yellow"
									showLabel={false}
									placeholder="Yellow"
								/>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<DBButton
									variant="ghost"
									noText
									icon="more_vertical">
									More
									<DBTooltip placement="left">More</DBTooltip>
								</DBButton>
							</DBTableDataCell>
						</DBTableRow>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row">
								<DBCheckbox
									showLabel={false}
									data-table-row-action="true"
									name="zebra">
									Check Green
								</DBCheckbox>
							</DBTableHeaderCell>
							<DBTableDataCell>
								<DBLink
									href="#"
									content="external"
									referrerPolicy="no-referrer"
									target="_blank">
									Green
								</DBLink>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBTag icon="check" semantic="successful">
									Done
								</DBTag>
							</DBTableDataCell>
							<DBTableDataCell></DBTableDataCell>
							<DBTableDataCell>Green</DBTableDataCell>
							<DBTableDataCell>
								<DBInput
									label="Green"
									showLabel={false}
									placeholder="Green"
								/>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<DBButton
									variant="ghost"
									noText
									icon="more_vertical">
									More
									<DBTooltip placement="left">More</DBTooltip>
								</DBButton>
							</DBTableDataCell>
						</DBTableRow>
					</DBTableBody>
				</DBTable>
			</div>
			<div
				style={{
					inlineSize: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Floating
				</DBInfotext>
				<DBTable
					variant="floating"
					captionPlain="Floating, sortable columns are Link.">
					<DBTableHead>
						<DBTableRow>
							<DBTableHeaderCell scope="col">
								<DBCheckbox showLabel={false} name="floating">
									Check All
									<DBTooltip placement="top">
										Check All
									</DBTooltip>
								</DBCheckbox>
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								<div
									style={{
										display: 'flex',
										gap: 'var(--db-spacing-fixed-xs)'
									}}>
									Link
									<DBButton
										size="small"
										variant="ghost"
										icon="arrows_vertical"
										noText>
										Sort Link
										<DBTooltip placement="top">
											Sort Link
										</DBTooltip>
									</DBButton>
								</div>
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Tag
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Infotext
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Text
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Input
							</DBTableHeaderCell>
							<DBTableHeaderCell
								scope="col"
								horizontalAlignment="end"
								noText>
								Button
							</DBTableHeaderCell>
						</DBTableRow>
					</DBTableHead>
					<DBTableBody>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row">
								<DBCheckbox
									showLabel={false}
									data-table-row-action="true"
									name="floating">
									Check Red
								</DBCheckbox>
							</DBTableHeaderCell>
							<DBTableDataCell>
								<DBLink
									href="#"
									content="external"
									referrerPolicy="no-referrer"
									target="_blank">
									Red
								</DBLink>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBTag icon="check" semantic="informational">
									Progress
								</DBTag>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBInfotext semantic="critical">15</DBInfotext>
							</DBTableDataCell>
							<DBTableDataCell>Red</DBTableDataCell>
							<DBTableDataCell>
								<DBInput
									label="Red"
									showLabel={false}
									placeholder="Red"
									required
								/>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<DBButton
									variant="ghost"
									noText
									icon="more_vertical">
									More
									<DBTooltip placement="left">More</DBTooltip>
								</DBButton>
							</DBTableDataCell>
						</DBTableRow>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row">
								<DBCheckbox
									showLabel={false}
									data-table-row-action="true"
									name="floating">
									Check Yellow
								</DBCheckbox>
							</DBTableHeaderCell>
							<DBTableDataCell>
								<DBLink
									href="#"
									content="external"
									referrerPolicy="no-referrer"
									target="_blank">
									Yellow
								</DBLink>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBTag icon="check" semantic="warning">
									Open
								</DBTag>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBInfotext semantic="warning">1</DBInfotext>
							</DBTableDataCell>
							<DBTableDataCell>Yellow</DBTableDataCell>
							<DBTableDataCell>
								<DBInput
									label="Yellow"
									showLabel={false}
									placeholder="Yellow"
								/>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<DBButton
									variant="ghost"
									noText
									icon="more_vertical">
									More
									<DBTooltip placement="left">More</DBTooltip>
								</DBButton>
							</DBTableDataCell>
						</DBTableRow>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row">
								<DBCheckbox
									showLabel={false}
									data-table-row-action="true"
									name="floating">
									Check Green
								</DBCheckbox>
							</DBTableHeaderCell>
							<DBTableDataCell>
								<DBLink
									href="#"
									content="external"
									referrerPolicy="no-referrer"
									target="_blank">
									Green
								</DBLink>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBTag icon="check" semantic="successful">
									Done
								</DBTag>
							</DBTableDataCell>
							<DBTableDataCell></DBTableDataCell>
							<DBTableDataCell>Green</DBTableDataCell>
							<DBTableDataCell>
								<DBInput
									label="Green"
									showLabel={false}
									placeholder="Green"
								/>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<DBButton
									variant="ghost"
									noText
									icon="more_vertical">
									More
									<DBTooltip placement="left">More</DBTooltip>
								</DBButton>
							</DBTableDataCell>
						</DBTableRow>
					</DBTableBody>
				</DBTable>
			</div>
			<div
				style={{
					inlineSize: '300px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 'var(--db-spacing-fixed-md)'
				}}>
				<DBInfotext semantic="informational" size="small" icon="none">
					Mobile variant: List
				</DBInfotext>
				<DBTable
					variant="floating"
					mobileVariant="list"
					captionPlain="Mobile variant: List, sortable columns are Link.">
					<DBTableHead>
						<DBTableRow>
							<DBTableHeaderCell scope="col">
								<DBCheckbox showLabel={false} name="list">
									Check All
									<DBTooltip placement="top">
										Check All
									</DBTooltip>
								</DBCheckbox>
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								<div
									style={{
										display: 'flex',
										gap: 'var(--db-spacing-fixed-xs)'
									}}>
									Link
									<DBButton
										size="small"
										variant="ghost"
										icon="arrows_vertical"
										noText>
										Sort Link
										<DBTooltip placement="top">
											Sort Link
										</DBTooltip>
									</DBButton>
								</div>
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Tag
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Infotext
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Text
							</DBTableHeaderCell>
							<DBTableHeaderCell scope="col">
								Input
							</DBTableHeaderCell>
							<DBTableHeaderCell
								scope="col"
								horizontalAlignment="end"
								noText>
								Button
							</DBTableHeaderCell>
						</DBTableRow>
					</DBTableHead>
					<DBTableBody>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row" data-header="Check">
								<DBCheckbox
									showLabel={false}
									data-table-row-action="true"
									name="list">
									Check Red
								</DBCheckbox>
							</DBTableHeaderCell>
							<DBTableDataCell data-header="Link">
								<DBLink
									href="#"
									content="external"
									referrerPolicy="no-referrer"
									target="_blank">
									Red
								</DBLink>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBTag icon="check" semantic="informational">
									Progress
								</DBTag>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBInfotext semantic="critical">15</DBInfotext>
							</DBTableDataCell>
							<DBTableDataCell>Red</DBTableDataCell>
							<DBTableDataCell>
								<DBInput
									label="Red"
									showLabel={false}
									placeholder="Red"
									required
								/>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<DBButton
									variant="ghost"
									noText
									icon="more_vertical">
									More
									<DBTooltip placement="left">More</DBTooltip>
								</DBButton>
							</DBTableDataCell>
						</DBTableRow>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row" data-header="Check">
								<DBCheckbox
									showLabel={false}
									data-table-row-action="true"
									name="list">
									Check Yellow
								</DBCheckbox>
							</DBTableHeaderCell>
							<DBTableDataCell data-header="Link">
								<DBLink
									href="#"
									content="external"
									referrerPolicy="no-referrer"
									target="_blank">
									Yellow
								</DBLink>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBTag icon="check" semantic="warning">
									Open
								</DBTag>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBInfotext semantic="warning">1</DBInfotext>
							</DBTableDataCell>
							<DBTableDataCell>Yellow</DBTableDataCell>
							<DBTableDataCell>
								<DBInput
									label="Yellow"
									showLabel={false}
									placeholder="Yellow"
								/>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<DBButton
									variant="ghost"
									noText
									icon="more_vertical">
									More
									<DBTooltip placement="left">More</DBTooltip>
								</DBButton>
							</DBTableDataCell>
						</DBTableRow>
						<DBTableRow interactive>
							<DBTableHeaderCell scope="row" data-header="Check">
								<DBCheckbox
									showLabel={false}
									data-table-row-action="true"
									name="list">
									Check Green
								</DBCheckbox>
							</DBTableHeaderCell>
							<DBTableDataCell data-header="Link">
								<DBLink
									href="#"
									content="external"
									referrerPolicy="no-referrer"
									target="_blank">
									Green
								</DBLink>
							</DBTableDataCell>
							<DBTableDataCell>
								<DBTag icon="check" semantic="successful">
									Done
								</DBTag>
							</DBTableDataCell>
							<DBTableDataCell></DBTableDataCell>
							<DBTableDataCell>Green</DBTableDataCell>
							<DBTableDataCell>
								<DBInput
									label="Green"
									showLabel={false}
									placeholder="Green"
								/>
							</DBTableDataCell>
							<DBTableDataCell horizontalAlignment="end">
								<DBButton
									variant="ghost"
									noText
									icon="more_vertical">
									More
									<DBTooltip placement="left">More</DBTooltip>
								</DBButton>
							</DBTableDataCell>
						</DBTableRow>
					</DBTableBody>
				</DBTable>
			</div>
		</Fragment>
	);
}
