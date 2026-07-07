import {
	Component,
	EventEmitter,
	input,
	NO_ERRORS_SCHEMA,
	Output
} from '@angular/core';
import { type FieldTree, FormField } from '@angular/forms/signals';
import { DBSelect } from '@components';

/**
 * Isolated wrapper for DBSelect with [formField] binding.
 * NO_ERRORS_SCHEMA is scoped here so it does not suppress
 * template type-checking in AppComponent.
 * Remove when Angular 22 resolves the [formField] type conflict.
 */
@Component({
	selector: 'app-settings-select',
	standalone: true,
	imports: [DBSelect, FormField],
	schemas: [NO_ERRORS_SCHEMA],
	template: `
		<db-select
			(change)="changed.emit($event)"
			[formField]="formField()"
			[label]="label()"
			variant="floating">
			@for (option of options(); track option) {
				<option>{{ option }}</option>
			}
		</db-select>
	`
})
export class SettingsSelectComponent {
	formField = input.required<FieldTree<string>>();
	label = input.required<string>();
	options = input.required<readonly string[]>();
	@Output() changed = new EventEmitter<Event>();
}
