import { Component, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';
import { DBSelect } from '@components';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
	selector: 'app-selects',
	standalone: true,
	imports: [
		WrapperComponent,
		DBSelect,
		FormsModule,
		ReactiveFormsModule,
		FormField
	],
	schemas: [NO_ERRORS_SCHEMA],
	templateUrl: './selects.component.html'
})
export class SelectsComponent {
	plain = 'combobox-2';
	ngModel = 'combobox-2';
	formControl: FormControl = new FormControl('combobox-2');
	signalModel = signal({ value: 'combobox-2' });
	signalForm = form(this.signalModel);
	public handlePlainChange(event: Event | void) {
		if (!event) return;
		this.plain = (event.target as HTMLSelectElement).value;
	}
}
