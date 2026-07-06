import { Component, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DBRadio } from '@components';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
	selector: 'app-radios',
	standalone: true,
	imports: [WrapperComponent, DBRadio, FormsModule, ReactiveFormsModule],
	templateUrl: './radios.component.html'
})
export class RadiosComponent {
	plain = '';
	ngModel = '';
	formControl: FormControl = new FormControl('');
	signalFormsValue = signal('');
	public handlePlainChange(event: Event | void) {
		if (!event) {
			return;
		}
		this.plain = (event.target as HTMLInputElement).value;
	}

	public handleSignalFormsChange(event: Event | void) {
		if (!event) return;
		this.signalFormsValue.set((event.target as HTMLInputElement).value);
	}
}
