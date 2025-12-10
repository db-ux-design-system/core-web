import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DBInput } from '@components';
import { environment } from '../../../../environments/environment';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
	selector: 'app-inputs',
	standalone: true,
	imports: environment.webComponents
		? [WrapperComponent, FormsModule, ReactiveFormsModule]
		: [WrapperComponent, DBInput, FormsModule, ReactiveFormsModule],
	templateUrl: './inputs.component.html',
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class InputsComponent {
	plain = 'test1';
	ngModel = 'test2';
	formControl: FormControl = new FormControl('test3');
	public handlePlainChange(event: any) {
		this.plain = event.target.value;
	}
}
