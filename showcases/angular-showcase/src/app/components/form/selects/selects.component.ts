import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DBSelect } from '@components';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
	selector: 'app-selects',
	standalone: true,
	imports: [WrapperComponent, DBSelect, FormsModule, ReactiveFormsModule],
	templateUrl: './selects.component.html'
})
export class SelectsComponent {
	plain = 'combobox-2';
	ngModel = 'combobox-2';
	formControl: FormControl = new FormControl('combobox-2');
	public handlePlainChange(event: Event | void) {
		if (!event) {
			return;
		}

		this.plain = (event.target as HTMLSelectElement).value;
	}
}
