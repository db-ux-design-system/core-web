import { Component, effect, signal } from '@angular/core';
import { DBLink, DBStack } from '@components';
import {
	injectTable,
	stockFeatures,
	type ColumnFiltersState,
	type GroupingState
} from '@tanstack/angular-table';
import { ActionButtonsComponent } from './components/action-buttons.component';
import { CustomTableComponent } from './components/custom-table.component';
import { TableControlsComponent } from './components/table-controls.component';
import { makeData } from './makeData';
import { columns, fuzzyFilter, type TableMeta } from './tableModels';

@Component({
	selector: 'app-table-kitchen-sink',
	standalone: true,
	imports: [
		DBStack,
		DBLink,
		TableControlsComponent,
		CustomTableComponent,
		ActionButtonsComponent
	],
	template: `
		<db-stack>
			<p>
				This example demonstrates a complex table with lots of different
				features and functionality by using
				<db-link
					[content]="'external'"
					[target]="'_blank'"
					[referrerPolicy]="'no-referrer'"
					[href]="'https://tanstack.com/table/latest/docs/installation#angular'">
					TanStack Table
				</db-link>
			</p>
			<p>
				See full example
				<db-link
					[content]="'external'"
					[target]="'_blank'"
					[referrerPolicy]="'no-referrer'"
					[href]="'https://github.com/db-ux-design-system/core-web/tree/main/storybooks/angular-storybook/src/templates/table-kitchen-sink'">
					here
				</db-link>
			</p>
			<app-table-controls
				[table]="table"
				[globalFilter]="globalFilter()"
				(globalFilterChange)="globalFilter.set($event)" />
			<app-custom-table [table]="table" />
			<app-action-buttons
				[hasNextPage]="table.getCanNextPage()"
				[hasPreviousPage]="table.getCanPreviousPage()"
				[pageCount]="table.getPageCount()"
				[pageIndex]="table.store.state.pagination.pageIndex"
				[pageSize]="table.store.state.pagination.pageSize"
				(nextPage)="table.nextPage()"
				(previousPage)="table.previousPage()"
				(setPageIndex)="table.setPageIndex($event)"
				(setPageSize)="table.setPageSize($event)" />
		</db-stack>
	`
})
export class TableKitchenSinkComponent {
	data = signal(makeData(1000));
	columnVisibility = signal({});
	grouping = signal<GroupingState>([]);
	rowSelection = signal({});
	columnPinning = signal({ start: [] as string[], end: [] as string[] });
	columnFilters = signal<ColumnFiltersState>([]);
	globalFilter = signal('');
	autoResetPageIndex = signal(true);

	skipAutoResetPageIndex = () => {
		this.autoResetPageIndex.set(false);
		setTimeout(() => this.autoResetPageIndex.set(true), 0);
	};

	table = injectTable(() => ({
		features: stockFeatures,
		data: this.data(),
		columns,
		onColumnFiltersChange: (updater) => {
			this.columnFilters.update((old) =>
				typeof updater === 'function' ? updater(old) : updater
			);
		},
		onGlobalFilterChange: (updater) => {
			this.globalFilter.update((old) =>
				typeof updater === 'function' ? updater(old) : updater
			);
		},
		globalFilterFn: fuzzyFilter,
		autoResetPageIndex: this.autoResetPageIndex(),
		enableColumnResizing: true,
		columnResizeMode: 'onChange',
		onColumnVisibilityChange: (updater) => {
			this.columnVisibility.update((old) =>
				typeof updater === 'function' ? updater(old) : updater
			);
		},
		onGroupingChange: (updater) => {
			this.grouping.update((old) =>
				typeof updater === 'function' ? updater(old) : updater
			);
		},
		onColumnPinningChange: (updater) => {
			this.columnPinning.update((old) =>
				typeof updater === 'function' ? updater(old) : updater
			);
		},
		onRowSelectionChange: (updater) => {
			this.rowSelection.update((old) =>
				typeof updater === 'function' ? updater(old) : updater
			);
		},
		meta: {
			updateData: (rowIndex, columnId, value) => {
				this.skipAutoResetPageIndex();
				this.data.update((old) =>
					old.map((row, index) => {
						if (index !== rowIndex) return row;
						return {
							...old[rowIndex]!,
							[columnId]: value
						};
					})
				);
			}
		} as TableMeta,
		state: {
			grouping: this.grouping(),
			columnFilters: this.columnFilters(),
			globalFilter: this.globalFilter(),
			columnVisibility: this.columnVisibility(),
			columnPinning: this.columnPinning(),
			rowSelection: this.rowSelection()
		},
		initialState: {
			pagination: {
				pageIndex: 0,
				pageSize: 5
			}
		},
		debugTable: true,
		debugHeaders: true,
		debugColumns: true
	}));

	constructor() {
		effect(() => {
			if (this.table.store.state.columnFilters[0]?.id === 'fullName') {
				if (this.table.store.state.sorting[0]?.id !== 'fullName') {
					this.table.setSorting([{ id: 'fullName', desc: false }]);
				}
			}
		});
	}
}
