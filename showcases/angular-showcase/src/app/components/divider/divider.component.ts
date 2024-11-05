import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/divider.json';
import { DefaultComponent } from '../default.component';
import { DBDivider, DBInfotext } from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-divider',
	templateUrl: './divider.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBDivider, DBInfotext],
	standalone: true,
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DividerComponent {
	variants = defaultComponentVariants;
}
