import { Component } from '@angular/core';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html'
})
export class FormComponent {
	input = '';

	radioNames = ['X', 'Y', 'Z'];
	radio = '';

	showValues(): void {
		alert(
			JSON.stringify({
				input: this.input,
				radio: this.radio
			})
		);
	}
}
