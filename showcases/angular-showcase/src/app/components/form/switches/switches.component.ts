import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DBSwitch } from '@components';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
	selector: 'app-switches',
	standalone: true,
	imports: [WrapperComponent, DBSwitch, FormsModule, ReactiveFormsModule],
	templateUrl: './switches.component.html',
	schemas: []
})
export class SwitchesComponent {
	plain = true;
	ngModel = true;
	formControl: FormControl = new FormControl(true);

	public handlePlainChange(event: Event | void) {
		if (!event) {
			return;
		}
		this.plain = (event.target as HTMLInputElement).checked;
	}
}
