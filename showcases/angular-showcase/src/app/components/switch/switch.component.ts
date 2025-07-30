import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBInfotext, DBSwitch } from '@components';
import defaultComponentVariants from '../../../../../shared/switch.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-switch',
	templateUrl: './switch.component.html',
	imports: [
		environment.webComponents
			? [DefaultComponent]
			: [DefaultComponent, DBSwitch, DBInfotext]
	],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	standalone: true
})
export class SwitchComponent {
	variants = defaultComponentVariants;
}
