import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBDivider, DBInfotext } from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/divider.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-divider',
	templateUrl: './divider.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBDivider, DBInfotext],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class DividerComponent {
	variants = defaultComponentVariants;
}
