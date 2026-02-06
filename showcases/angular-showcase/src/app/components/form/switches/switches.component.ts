import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DBSwitch } from '../../../../../../../packages/ngx-core-components/src';
import { environment } from '../../../../environments/environment';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
	selector: 'app-switches',
	standalone: true,
	imports: environment.webComponents
		? [WrapperComponent, FormsModule, ReactiveFormsModule]
		: [WrapperComponent, DBSwitch, FormsModule, ReactiveFormsModule],
	templateUrl: './switches.component.html',
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class SwitchesComponent {
	plain = true;
	ngModel = true;
	formControl: FormControl = new FormControl(true);

	public handlePlainChange(event: any) {
		this.plain = event.target.checked;
	}
}
