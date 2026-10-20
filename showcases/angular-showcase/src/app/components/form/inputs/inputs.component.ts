import { Component, input, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';
import { DBButton, DBInput } from '@components';
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
		[formField]="formField()" />`
})
export class SignalFormsInputComponent {
	formField = input.required<any>();
}

@Component({
	selector: 'app-inputs',
	standalone: true,
	imports: [
		WrapperComponent,
		DBInput,
		DBButton,
		FormsModule,
		ReactiveFormsModule,
		SignalFormsInputComponent
	],
	templateUrl: './inputs.component.html',
	schemas: []
})
export class InputsComponent {
	plain = 'test1';
	/**
	 * Regression fixture for
	 * https://github.com/db-ux-design-system/core-web/issues/6147 -- typed as
	 * `any` because the generated `value` model does not accept `undefined`.
	 */
	undefinedValue: any = 'reset-me';
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

	public unsetValue() {
		this.undefinedValue = undefined;
	}
}
