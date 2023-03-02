import { Component } from '@angular/core';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html'
})
export class InputComponent {
	onSubmit = () => {
		// eslint-disable-next-line no-console
		console.log('onSubmit');
	};
}
