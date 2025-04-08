import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/button.json';
import { DefaultComponent } from '../default.component';
import { DBButton } from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBButton],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class ButtonComponent {
	variants = defaultComponentVariants;

	showAlert = (exampleName: string) => {
		// eslint-disable-next-line no-alert
		alert(exampleName);
	};
}
