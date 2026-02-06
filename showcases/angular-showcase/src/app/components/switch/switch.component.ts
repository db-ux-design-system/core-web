import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBInfotext } from '../../../../../../packages/ngx-core-components/src/components/infotext';
import { DBSwitch } from '../../../../../../packages/ngx-core-components/src/components/switch';
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
