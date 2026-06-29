import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DBCard, DBCustomSelect, DBStack } from '@components';
import type { Table } from '@tanstack/angular-table';
import { DebouncedInputComponent } from './debounced-input.component';

@Component({
	selector: 'app-table-controls',
	standalone: true,
	imports: [DBCard, DBStack, DebouncedInputComponent, DBCustomSelect],
	template: `
		<db-card>
			<db-stack>
				<app-debounced-input
					[value]="globalFilter ?? ''"
					[placeholder]="'Search all columns...'"
					[label]="'Search'"
					(valueChange)="handleGlobalFilterChange($event)" />
				<db-custom-select
					[label]="'Show Columns'"
					[placeholder]="'Show Columns'"
					[multiple]="true"
					[values]="visibleColumns"
					[options]="columnOptions"
					[selectAllLabel]="'Toggle All'"
					(optionSelected)="handleColumnSelection($event)" />
			</db-stack>
		</db-card>
	`
})
export class TableControlsComponent {
	@Input() table!: Table<any>;
	@Input() globalFilter = '';
	@Output() globalFilterChange = new EventEmitter<string>();

	get visibleColumns() {
		return this.table
			.getAllLeafColumns()
			.filter(({ getIsVisible }) => getIsVisible())
			.map(({ id }) => id);
	}

	get columnOptions() {
		return this.table
			.getAllLeafColumns()
			.map(({ id }) => ({ id, value: id }));
	}

	handleGlobalFilterChange(value: string | number) {
		this.globalFilterChange.emit(String(value));
	}

	handleColumnSelection(values: string[] | void) {
		if (!values) return;
		this.table.getAllLeafColumns().forEach(({ id, toggleVisibility }) => {
			toggleVisibility(values.includes(id));
		});
	}
}
