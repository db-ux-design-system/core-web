import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBCheckbox, DBInfotext } from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/checkbox.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	standalone: true,
	imports: [
		environment.webComponents
			? [DefaultComponent]
			: [DefaultComponent, DBCheckbox, DBInfotext]
	],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class CheckboxComponent {
	variants = defaultComponentVariants;
}
