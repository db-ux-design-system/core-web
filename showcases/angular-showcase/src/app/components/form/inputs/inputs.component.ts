import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DBInput} from '@components';
import {WrapperComponent} from '../wrapper/wrapper.component';

@Component({
	selector: 'app-inputs',
	standalone: true,
	imports: [WrapperComponent, DBInput, FormsModule, ReactiveFormsModule],
	templateUrl: './inputs.component.html',
})
export class InputsComponent {
	plain = 'test1';
	ngModel = 'test2';
	formControl: FormControl = new FormControl('test3');
	public handlePlainChange(event: Event | void) {
		if (!event) {
			return;
		}

		this.plain = (event.target as HTMLInputElement).value;
	}
}
