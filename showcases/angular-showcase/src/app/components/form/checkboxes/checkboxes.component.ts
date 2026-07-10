import { Component, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';
import { DBCheckbox } from '@components';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
	selector: 'app-checkboxes',
	standalone: true,
	imports: [
		WrapperComponent,
		DBCheckbox,
		FormsModule,
		ReactiveFormsModule,
		FormField
	],
	// NO_ERRORS_SCHEMA required for Angular 21 [formField] directive template type-checking.
	// Remove when Angular 22 is the minimum supported version.
	schemas: [NO_ERRORS_SCHEMA],
	templateUrl: './checkboxes.component.html',
	schemas: []
})
export class CheckboxesComponent {
	plain = true;
	ngModel = true;
	formControl: FormControl = new FormControl(true);
	signalModel = signal({ checked: true });
	signalForm = form(this.signalModel);

	public handlePlainChange(event: Event | void) {
		if (!event) {
			return;
		}
		this.plain = (event.target as HTMLInputElement).checked;
	}
}
