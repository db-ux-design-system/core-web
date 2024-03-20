import { Component } from '@angular/core';
import { DBAlert } from '../../../../../../output/angular/src/components/alert/alert';
import defaultComponentVariants from '../../../../../shared/alert.json';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	imports: [DefaultComponent, DBAlert],
	standalone: true
})
export class AlertComponent {
	variants = defaultComponentVariants;

	showAlert = (exampleName: string) => {
		// eslint-disable-next-line no-alert
		alert(exampleName);
	};
}
