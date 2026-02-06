import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
	DBIcon,
	DBInfotext
} from '../../../../../../packages/ngx-core-components/src';
import defaultComponentVariants from '../../../../../shared/icon.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBIcon, DBInfotext],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class IconComponent {
	variants = defaultComponentVariants;
}
