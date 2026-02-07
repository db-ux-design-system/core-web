import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBInfotext, DBRadio } from '@db-ux/ngx-core-components/src';
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
			: [DefaultComponent, DBRadio, DBInfotext]
	],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class RadioComponent {
	variants = defaultComponentVariants;
}
