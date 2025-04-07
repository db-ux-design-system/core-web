import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/radio.json';
import { DefaultComponent } from '../default.component';
import {
	DBCheckbox,
	DBInfotext,
	DBRadio
} from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-radio',
	standalone: true,
	templateUrl: './radio.component.html',
	imports: [
		environment.webComponents
			? [DefaultComponent]
			: [DefaultComponent, DBRadio, DBInfotext]
	],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class RadioComponent {
	variants = defaultComponentVariants;
}
