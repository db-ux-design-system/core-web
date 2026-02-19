import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DBButton, DBSelect, DBStack, DBTooltip } from '@components';

@Component({
	selector: 'app-action-buttons',
	standalone: true,
	imports: [DBButton, DBSelect, DBStack, DBTooltip],
	template: `
		<db-stack
			[direction]="'row'"
			[alignment]="'center'"
			[justifyContent]="'center'">
			<db-button
				[disabled]="!hasPreviousPage"
				[variant]="'ghost'"
				[noText]="true"
				[icon]="'double_chevron_left'"
				(click)="setPageIndex.emit(0)">
				First Page
				<db-tooltip [placement]="'top'">First Page</db-tooltip>
			</db-button>
			<db-button
				[disabled]="!hasPreviousPage"
				[variant]="'ghost'"
				[noText]="true"
				[icon]="'chevron_left'"
				(click)="previousPage.emit()">
				Previous Page
				<db-tooltip [placement]="'top'">Previous Page</db-tooltip>
			</db-button>
			<db-button
				[disabled]="!hasNextPage"
				[variant]="'ghost'"
				[noText]="true"
				[icon]="'chevron_right'"
				(click)="nextPage.emit()">
				Next Page
				<db-tooltip [placement]="'top'">Next Page</db-tooltip>
			</db-button>
			<db-button
				[disabled]="!hasNextPage"
				[variant]="'ghost'"
				[noText]="true"
				[icon]="'double_chevron_right'"
				(click)="setPageIndex.emit(pageCount - 1)">
				Last Page
				<db-tooltip [placement]="'top'">Last Page</db-tooltip>
			</db-button>
			<db-stack style="width: fit-content" [gap]="'3x-small'">
				<div>Page</div>
				<strong>{{ pageIndex + 1 }} of {{ pageCount }}</strong>
			</db-stack>
			<db-select
				[variant]="'floating'"
				[label]="'Amount of Entries'"
				[value]="pageSize"
				(valueChange)="setPageSize.emit(+$event)">
				@for (size of [5, 10, 20, 30, 40, 50]; track size) {
					<option [value]="size">Show {{ size }}</option>
				}
			</db-select>
		</db-stack>
	`
})
export class ActionButtonsComponent {
	@Input() hasNextPage = false;
	@Input() hasPreviousPage = false;
	@Input() pageCount = 0;
	@Input() pageIndex = 0;
	@Input() pageSize = 5;
	@Output() nextPage = new EventEmitter<void>();
	@Output() previousPage = new EventEmitter<void>();
	@Output() setPageIndex = new EventEmitter<number>();
	@Output() setPageSize = new EventEmitter<number>();
}
