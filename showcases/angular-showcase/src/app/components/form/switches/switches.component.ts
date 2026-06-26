import { Component, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';
import { DBSwitch } from '@components';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
	selector: 'app-switches',
	standalone: true,
	imports: [
		WrapperComponent,
		DBSwitch,
		FormsModule,
		ReactiveFormsModule,
		FormField
	],
	schemas: [NO_ERRORS_SCHEMA],
	templateUrl: './switches.component.html'
})
export class SwitchesComponent {
	plain = true;
	ngModel = true;
	formControl: FormControl = new FormControl(true);
	signalModel = signal({ checked: true });
	signalForm = form(this.signalModel);

	public handlePlainChange(event: Event | void) {
		if (!event) return;
		this.plain = (event.target as HTMLInputElement).checked;
	}
}
