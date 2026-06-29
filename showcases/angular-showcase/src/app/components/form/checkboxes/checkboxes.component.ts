import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DBCheckbox} from '@components';
import {WrapperComponent} from '../wrapper/wrapper.component';

@Component({
	selector: 'app-checkboxes',
	standalone: true,
	imports: [WrapperComponent, DBCheckbox, FormsModule, ReactiveFormsModule],
	templateUrl: './checkboxes.component.html',
})
export class CheckboxesComponent {
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
