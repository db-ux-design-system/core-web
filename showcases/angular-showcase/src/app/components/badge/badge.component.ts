import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
	DBBadge,
	DBButton,
	DBIcon,
	DBInfotext
} from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/badge.json';
import { DefaultComponent } from '../default.component';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-badge',
	templateUrl: './badge.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBBadge, DBInfotext, DBButton, DBIcon],
	standalone: true,
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BadgeComponent {
	variants = defaultComponentVariants;
}
