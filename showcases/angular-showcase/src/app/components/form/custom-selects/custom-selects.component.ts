import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DBCustomSelect } from '../../../../../../../output/angular/src';
import { environment } from '../../../../environments/environment';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
	selector: 'app-custom-selects',
	standalone: true,
	imports: environment.webComponents
		? [WrapperComponent, FormsModule, ReactiveFormsModule]
		: [WrapperComponent, DBCustomSelect, FormsModule, ReactiveFormsModule],
	templateUrl: './custom-selects.component.html',
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class CustomSelectsComponent {
	plain = ['combobox-2'];
	ngModel = ['combobox-2'];
	formControl: FormControl = new FormControl(['combobox-2']);

	options = [
		{ value: 'combobox-0', id: 'combobox-0' },
		{ value: 'combobox-1', id: 'combobox-1' },
		{ value: 'combobox-2', id: 'combobox-2' }
	];

	public handlePlainChange(values: string[] | void) {
		if (values) {
			this.plain = values;
		}
	}
}
