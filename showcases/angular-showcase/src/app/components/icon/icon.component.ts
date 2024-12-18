import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/icon.json';
import { DefaultComponent } from '../default.component';
import { DBIcon, DBInfotext } from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBIcon, DBInfotext],
	standalone: true,
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IconComponent {
	variants = defaultComponentVariants;
}
