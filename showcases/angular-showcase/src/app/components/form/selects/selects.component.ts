import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DBSelect } from '../../../../../../../packages/ngx-core-components/src';
import { environment } from '../../../../environments/environment';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
	selector: 'app-selects',
	standalone: true,
	imports: environment.webComponents
		? [WrapperComponent, FormsModule, ReactiveFormsModule]
		: [WrapperComponent, DBSelect, FormsModule, ReactiveFormsModule],
	templateUrl: './selects.component.html',
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class SelectsComponent {
	plain = 'combobox-2';
	ngModel = 'combobox-2';
	formControl: FormControl = new FormControl('combobox-2');
	public handlePlainChange(event: any) {
		this.plain = event.target.value;
	}
}
