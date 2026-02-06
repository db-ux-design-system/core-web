import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBSelect } from '../../../../../../packages/ngx-core-components/src';
import defaultComponentVariants from '../../../../../shared/select.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	imports: [
		environment.webComponents
			? [DefaultComponent]
			: [DefaultComponent, DBSelect]
	],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	standalone: true
})
export class SelectComponent {
	variants = defaultComponentVariants;
}
