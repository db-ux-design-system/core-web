import {
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output
} from '@angular/core';
import { DBInput } from '@components';

@Component({
	selector: 'app-debounced-input',
	standalone: true,
	imports: [DBInput],
	template: `
		<db-input
			[variant]="'floating'"
			[label]="label"
			[placeholder]="placeholder"
			[value]="value"
			(valueChange)="onValueChange($event)" />
	`
})
export class DebouncedInputComponent implements OnInit, OnDestroy {
	@Input() label = '';
	@Input() placeholder = '';
	@Input() value: string | number = '';
	@Input() debounce = 500;
	@Output() valueChange = new EventEmitter<string | number>();

	private timeout?: ReturnType<typeof setTimeout>;

	ngOnInit() {}

	ngOnDestroy() {
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
	}

	onValueChange(newValue: string | number) {
		this.value = newValue;
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
		this.timeout = setTimeout(() => {
			this.valueChange.emit(newValue);
		}, this.debounce);
	}
}
