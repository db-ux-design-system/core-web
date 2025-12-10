import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DBCheckbox } from '@components';
import { environment } from '../../../../environments/environment';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
	selector: 'app-checkboxes',
	standalone: true,
	imports: environment.webComponents
		? [WrapperComponent, FormsModule, ReactiveFormsModule]
		: [WrapperComponent, DBCheckbox, FormsModule, ReactiveFormsModule],
	templateUrl: './checkboxes.component.html',
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class CheckboxesComponent {
	plain = true;
	ngModel = true;
	formControl: FormControl = new FormControl(true);

	public handlePlainChange(event: any) {
		this.plain = event.target.checked;
	}
}
