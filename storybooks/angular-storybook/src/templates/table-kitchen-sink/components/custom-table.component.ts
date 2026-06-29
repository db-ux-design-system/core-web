import { Component, Input } from '@angular/core';
import {
	DBButton,
	DBTable,
	DBTableBody,
	DBTableDataCell,
	DBTableFooter,
	DBTableHead,
	DBTableHeaderCell,
	DBTableRow,
	DBTooltip
} from '@components';
import { FlexRenderDirective, type Table } from '@tanstack/angular-table';
import type { Person } from '../makeData';
import { EditableCellComponent } from './editable-cell.component';
import { FilterComponent } from './filter.component';
import {
	SelectCellComponent,
	SelectFooterComponent,
	SelectHeaderComponent
} from './select-column.component';

@Component({
	selector: 'app-custom-table',
	standalone: true,
	imports: [
		DBTable,
		DBTableHead,
		DBTableBody,
		DBTableFooter,
		DBTableRow,
		DBTableHeaderCell,
		DBTableDataCell,
		DBButton,
		DBTooltip,
		FlexRenderDirective,
		FilterComponent,
		SelectHeaderComponent,
		SelectCellComponent,
		SelectFooterComponent,
		EditableCellComponent
	],
	template: `
		<db-table [columnSizes]="columnSizes">
			<db-table-head>
				@for (
					headerGroup of table.getHeaderGroups();
					track headerGroup.id
				) {
					<db-table-row [interactive]="true">
						@for (header of headerGroup.headers; track header.id) {
							<db-table-header-cell
								[colSpan]="header.colSpan"
								class="relative">
								@if (!header.isPlaceholder) {
									<div
										style="display: inline-flex; gap: var(--db-spacing-fixed-3xs); overflow: hidden; inline-size: fit-content; block-size: fit-content">
										<span style="white-space: nowrap">
											@if (
												header.column.id === 'select'
											) {
												<app-select-header
													[table]="table" />
											} @else {
												<ng-container
													*flexRender="
														header.column.columnDef
															.header;
														props: header.getContext();
														let cell
													">
													{{ cell }}
												</ng-container>
											}
										</span>
										@if (header.column.getCanSort()) {
											<db-button
												[variant]="'ghost'"
												[size]="'small'"
												[noText]="true"
												[icon]="
													getSortIcon(
														header.column.getIsSorted()
													)
												"
												(click)="
													header.column.getToggleSortingHandler()?.(
														$event
													)
												">
												<db-tooltip [placement]="'top'">
													{{
														getSortTooltip(
															header.column.getIsSorted()
														)
													}}
												</db-tooltip>
											</db-button>
										}
										@if (header.column.getCanFilter()) {
											<app-filter
												[column]="header.column"
												[table]="table" />
										}
									</div>
								}
							</db-table-header-cell>
						}
					</db-table-row>
				}
			</db-table-head>
			<db-table-body>
				@for (row of table.getRowModel().rows; track row.id) {
					<db-table-row [interactive]="true">
						@for (cell of row.getVisibleCells(); track cell.id) {
							<db-table-data-cell>
								@if (cell.column.id === 'select') {
									<app-select-cell [row]="cell.row" />
								} @else if (
									cell.column.id === 'age' ||
									cell.column.id === 'visits' ||
									cell.column.id === 'status' ||
									cell.column.id === 'progress'
								) {
									<app-editable-cell [cell]="cell" />
								} @else {
									<ng-container
										*flexRender="
											cell.column.columnDef.cell;
											props: cell.getContext();
											let cellContent
										">
										{{ cellContent }}
									</ng-container>
								}
							</db-table-data-cell>
						}
					</db-table-row>
				}
			</db-table-body>
			<db-table-footer>
				@for (
					footerGroup of table.getFooterGroups();
					track footerGroup.id
				) {
					<db-table-row>
						@for (header of footerGroup.headers; track header.id) {
							<db-table-header-cell [colSpan]="header.colSpan">
								@if (
									header.column.id === 'select' &&
									footerGroup.id === '1'
								) {
									<app-select-footer [table]="table" />
								} @else if (!header.isPlaceholder) {
									<ng-container
										*flexRender="
											header.column.columnDef.footer;
											props: header.getContext();
											let footer
										">
										{{ footer }}
									</ng-container>
								}
							</db-table-header-cell>
						}
					</db-table-row>
				}
			</db-table-footer>
		</db-table>
	`
})
export class CustomTableComponent {
	@Input() table!: Table<Person>;

	columnSizes = { 0: 'min-content', 4: 'min-content', 5: 'min-content' };

	getSortIcon(isSorted: false | 'asc' | 'desc') {
		if (!isSorted) return 'arrows_vertical';
		return isSorted === 'asc' ? 'sort_down' : 'sort_up';
	}

	getSortTooltip(isSorted: false | 'asc' | 'desc') {
		if (!isSorted) return 'Sort ascending';
		return isSorted === 'asc' ? 'Sort descending' : 'Sort ascending';
	}
}
