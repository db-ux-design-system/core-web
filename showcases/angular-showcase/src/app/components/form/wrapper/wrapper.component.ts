import { Component, input } from '@angular/core';
import { DBButton } from '@components';

@Component({
	selector: 'app-form-wrapper',
	imports: [DBButton],
	templateUrl: './wrapper.component.html',
	standalone: true
})
export class WrapperComponent {
	plain = input<string | boolean | string[]>('');
	model = input<string | boolean | string[]>('');
	control = input<string | boolean | string[]>('');
	signalForms = input<string | boolean | string[]>('');
}
