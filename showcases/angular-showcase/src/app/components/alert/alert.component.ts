import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/alert.json';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html'
})
export class AlertComponent {
	variants = defaultComponentVariants;

	showAlert = (exampleName: string) => {
		// eslint-disable-next-line no-alert
		alert(exampleName);
	};
}
