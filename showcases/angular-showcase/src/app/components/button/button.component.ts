import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/button.json';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html'
})
export class ButtonComponent {
	variants = defaultComponentVariants;

	showAlert = (exampleName: string) => {
		// eslint-disable-next-line no-alert
		alert(exampleName);
	};
}
