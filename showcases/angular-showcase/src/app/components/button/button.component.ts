import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBButton } from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/button.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

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
