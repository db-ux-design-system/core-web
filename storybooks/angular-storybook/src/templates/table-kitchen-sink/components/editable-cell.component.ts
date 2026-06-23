import { Component, Input, OnInit } from '@angular/core';
import { DBInput } from '@components';
import type { Cell } from '@tanstack/angular-table';
import type { Person } from '../makeData';
import type { TableMeta } from '../tableModels';

@Component({
	selector: 'app-editable-cell',
	standalone: true,
	imports: [DBInput],
	template: `
		<db-input
			[variant]="'floating'"
			[label]="label"
			[value]="value"
			(valueChange)="onValueChange($event)"
			(blur)="onBlur()" />
	`
})
export class EditableCellComponent implements OnInit {
	@Input() cell!: Cell<Person, unknown>;

	value: any;
	label = '';

	ngOnInit() {
		this.value = this.cell.getValue();
		this.label =
			this.cell.column.columnDef.header?.toString() ||
			this.cell.column.id ||
			'';
	}

	onValueChange(newValue: any) {
		this.value = newValue;
	}

	onBlur() {
		const meta = this.cell.getContext().table.options.meta as TableMeta;
		meta.updateData(this.cell.row.index, this.cell.column.id, this.value);
	}
}
