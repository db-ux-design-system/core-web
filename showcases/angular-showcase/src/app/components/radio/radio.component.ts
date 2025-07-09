import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
	DBCheckbox,
	DBInfotext,
	DBRadio
} from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/radio.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-radio',
	standalone: true,
	templateUrl: './radio.component.html',
	imports: [
		environment.webComponents
			? [DefaultComponent]
			: [DefaultComponent, DBRadio, DBInfotext],
		DBCheckbox
	],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class RadioComponent {
	variants = defaultComponentVariants;
}
