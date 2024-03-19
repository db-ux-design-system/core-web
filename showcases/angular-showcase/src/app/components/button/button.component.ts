import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/button.json';
import { DefaultComponent } from '../default.component';
import { DBButton } from '../../../../../../output/angular/src/components/button';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	imports: [DefaultComponent, DBButton],
	standalone: true
})
export class ButtonComponent {
	variants = defaultComponentVariants;

	showAlert = (exampleName: string) => {
		// eslint-disable-next-line no-alert
		alert(exampleName);
	};
}
