import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DefaultComponent } from '../default.component';
import defaultComponentVariants from '../../../../../shared/switch.json';
import { DBSwitch } from '../../../../../../output/angular/src/components/switch';
import { DBInfotext } from '../../../../../../output/angular/src/components/infotext';
import { environment } from '../../../environments/environment';

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
