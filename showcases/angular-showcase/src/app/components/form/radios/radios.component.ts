import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WrapperComponent } from '../wrapper/wrapper.component';
import {
	DBCheckbox,
	DBInput,
	DBRadio
} from '../../../../../../../output/angular/src';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'app-radios',
	imports: [
		environment.webComponents
			? [WrapperComponent, FormsModule, ReactiveFormsModule]
			: [WrapperComponent, DBRadio, FormsModule, ReactiveFormsModule]
	],
	templateUrl: './radios.component.html',
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RadiosComponent {
	plain = '';
	ngModel = '';
	formControl: FormControl = new FormControl('');
}
