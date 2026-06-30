import { Component, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';
import { DBInput } from '@components';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
	selector: 'app-inputs',
	standalone: true,
	imports: [
		WrapperComponent,
		DBInput,
		FormsModule,
		ReactiveFormsModule,
		FormField
	],
	// NO_ERRORS_SCHEMA required for Angular 21 [formField] directive template type-checking.
	// Remove when Angular 22 is the minimum supported version.
	schemas: [NO_ERRORS_SCHEMA],
	templateUrl: './inputs.component.html'
})
export class InputsComponent {
	plain = 'test1';
	ngModel = 'test2';
	formControl: FormControl = new FormControl('test3');
	signalModel = signal({ value: 'test4' });
	signalForm = form(this.signalModel);
	public handlePlainChange(event: Event | void) {
		if (!event) return;
		this.plain = (event.target as HTMLInputElement).value;
	}
}
