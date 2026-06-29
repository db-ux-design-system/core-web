import { Component, Input } from '@angular/core';
import { DBButton, DBPopover, DBStack, DBTooltip } from '@components';
import type { Column, RowData, Table } from '@tanstack/angular-table';
import { DebouncedInputComponent } from './debounced-input.component';

@Component({
	selector: 'app-filter',
	standalone: true,
	imports: [DBButton, DBPopover, DBStack, DBTooltip, DebouncedInputComponent],
	template: `
		<db-popover [placement]="'top'">
			<db-button
				trigger
				[size]="'small'"
				[variant]="'ghost'"
				[noText]="true"
				[icon]="'funnel'">
				Filter
				<db-tooltip [placement]="'right'">Filter</db-tooltip>
			</db-button>
			@if (isNumber) {
				<db-stack>
					<app-debounced-input
						[label]="'Minimum'"
						[placeholder]="minPlaceholder"
						[value]="minValue"
						(valueChange)="updateMinFilter($event)" />
					<app-debounced-input
						[label]="'Maximum'"
						[placeholder]="maxPlaceholder"
						[value]="maxValue"
						(valueChange)="updateMaxFilter($event)" />
				</db-stack>
			} @else {
				<datalist [id]="column.id + 'list'">
					@for (
						value of sortedUniqueValues.slice(0, 5000);
						track value
					) {
						<option [value]="value"></option>
					}
				</datalist>
				<app-debounced-input
					[label]="'Search'"
					[placeholder]="searchPlaceholder"
					[value]="stringValue"
					(valueChange)="column.setFilterValue($event)" />
			}
		</db-popover>
	`
})
export class FilterComponent<T extends RowData> {
	@Input() column!: Column<T, unknown>;
	@Input() table!: Table<T>;

	get firstValue() {
		return this.table
			.getPreFilteredRowModel()
			.flatRows[0]?.getValue(this.column.id);
	}

	get isNumber() {
		return typeof this.firstValue === 'number';
	}

	get columnFilterValue() {
		return this.column.getFilterValue();
	}

	get uniqueValues() {
		return this.column.getFacetedUniqueValues();
	}

	get sortedUniqueValues() {
		return this.isNumber ? [] : Array.from(this.uniqueValues.keys()).sort();
	}

	get minMax() {
		return this.column.getFacetedMinMaxValues();
	}

	get min() {
		return Number(this.minMax?.[0] ?? '');
	}

	get max() {
		return Number(this.minMax?.[1]);
	}

	get minValue() {
		return (this.columnFilterValue as [number, number])?.[0] ?? '';
	}

	get maxValue() {
		return (this.columnFilterValue as [number, number])?.[1] ?? '';
	}

	get stringValue() {
		return (this.columnFilterValue as string) ?? '';
	}

	get minPlaceholder() {
		return 'Min ' + (this.minMax?.[0] ? '(' + this.min + ')' : '');
	}

	get maxPlaceholder() {
		return 'Max ' + (this.minMax?.[1] ? '(' + this.max + ')' : '');
	}

	get searchPlaceholder() {
		return 'Search... (' + this.uniqueValues.size + ')';
	}

	updateMinFilter(value: string | number) {
		this.column.setFilterValue((old: [number, number]) => [
			value,
			old?.[1]
		]);
	}

	updateMaxFilter(value: string | number) {
		this.column.setFilterValue((old: [number, number]) => [
			old?.[0],
			value
		]);
	}
}
