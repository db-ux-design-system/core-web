import { Component } from '@angular/core';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html'
})
export class FormComponent {
	input = '';
	radioNames = ['X', 'Y', 'Z'];
	radio = '';

	dataList = [{ key: 'test', value: 'Test' }, { key: 'test2' }];
	getRadioName = (radioName: string): string => `Radio ${radioName}`;
	showValues(): void {
		// eslint-disable-next-line no-alert
		alert(
			JSON.stringify({
				input: this.input,
				radio: this.radio
			})
		);
	}
}
