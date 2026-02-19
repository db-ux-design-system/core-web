import { Component, Input } from '@angular/core';
import { DBBadge, DBCheckbox, DBTooltip } from '@components';
import type { Table } from '@tanstack/angular-table';
import type { Person } from '../makeData';

@Component({
	selector: 'app-select-header',
	standalone: true,
	imports: [DBCheckbox, DBTooltip],
	template: `
		<db-checkbox
			data-table-row-action="true"
			[label]="'Select All'"
			[showLabel]="false"
			[checked]="table.getIsAllRowsSelected()"
			[indeterminate]="table.getIsSomeRowsSelected()"
			(checkedChange)="table.toggleAllRowsSelected(!!$event)">
			<db-tooltip [placement]="'top'">Select All</db-tooltip>
		</db-checkbox>
	`
})
export class SelectHeaderComponent {
	@Input() table!: Table<Person>;
}

@Component({
	selector: 'app-select-cell',
	standalone: true,
	imports: [DBCheckbox, DBTooltip],
	template: `
		<db-checkbox
			data-table-row-action="true"
			[label]="'Select Row'"
			[showLabel]="false"
			[checked]="row.getIsSelected()"
			[indeterminate]="row.getIsSomeSelected()"
			(checkedChange)="row.toggleSelected(!!$event)">
			<db-tooltip [placement]="'top'">Select Row</db-tooltip>
		</db-checkbox>
	`
})
export class SelectCellComponent {
	@Input() row!: any;
}

@Component({
	selector: 'app-select-footer',
	standalone: true,
	imports: [DBBadge],
	template: `
		<db-badge
			[label]="length + ' Selected'"
			[semantic]="length > 0 ? 'informational' : 'neutral'">
			{{ amount }}
		</db-badge>
	`
})
export class SelectFooterComponent {
	@Input() table!: Table<Person>;

	get length() {
		return this.table.getSelectedRowModel().rows.length;
	}

	get amount() {
		return this.length >= 100 ? '9+' : this.length.toString();
	}
}
