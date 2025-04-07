import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBCheckbox, DBInfotext } from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/checkbox.json';
import { DefaultComponent } from '../default.component';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	standalone: true,
	imports: [
		environment.webComponents
			? [DefaultComponent]
			: [DefaultComponent, DBCheckbox, DBInfotext]
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckboxComponent {
	variants = defaultComponentVariants;
}
