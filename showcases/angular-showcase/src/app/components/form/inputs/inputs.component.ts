import { Component, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';
import { DBInput } from '@components';
import { WrapperComponent } from '../wrapper/wrapper.component';

/**
 * Isolated component for [formField] binding on DBInput.
 * NO_ERRORS_SCHEMA is scoped here so it does not suppress
 * template type-checking in the parent InputsComponent.
 * Remove when Angular 22 resolves the [formField] type conflict.
 */
@Component({
	selector: 'app-signal-forms-input',
	standalone: true,
	imports: [DBInput, FormField],
	schemas: [NO_ERRORS_SCHEMA],
	template: `<db-input
		label="signalForms"
		placeholder="Placeholder"
		message="Description"
		icon="x_placeholder"
		[formField]="signalForm.value" />`
})
export class SignalFormsInputComponent {
	signalModel = signal({ value: 'test4' });
	signalForm = form(this.signalModel);
}

@Component({
	selector: 'app-inputs',
	standalone: true,
	imports: [
		WrapperComponent,
		DBInput,
		FormsModule,
		ReactiveFormsModule,
		SignalFormsInputComponent
	],
	templateUrl: './inputs.component.html'
})
export class InputsComponent {
	plain = 'test1';
	ngModel = 'test2';
	formControl: FormControl = new FormControl('test3');
	signalModel = signal({ value: 'test4' });
	signalForm = form(this.signalModel);
	public handlePlainChange(event: Event | void) {
		if (!event) {
			return;
		}
		this.plain = (event.target as HTMLInputElement).value;
	}
}
