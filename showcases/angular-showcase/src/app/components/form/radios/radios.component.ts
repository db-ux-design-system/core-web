import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DBRadio } from '@components';
import { environment } from '../../../../environments/environment';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
	selector: 'app-radios',
	standalone: true,
	imports: [
		environment.webComponents
			? [WrapperComponent, FormsModule, ReactiveFormsModule]
			: [WrapperComponent, DBRadio, FormsModule, ReactiveFormsModule]
	],
	templateUrl: './radios.component.html',
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class RadiosComponent {
	plain = '';
	ngModel = '';
	formControl: FormControl = new FormControl('');
	public handlePlainChange(event: any) {
		this.plain = event.target.value;
	}
}
