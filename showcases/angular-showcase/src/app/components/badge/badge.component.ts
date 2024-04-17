import { Component } from '@angular/core';
import {
	DBBadge,
	DBButton,
	DBIcon,
	DBInfotext
} from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/badge.json';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-badge',
	templateUrl: './badge.component.html',
	imports: [DefaultComponent, DBBadge, DBInfotext, DBButton, DBIcon],
	standalone: true
})
export class BadgeComponent {
	variants = defaultComponentVariants;
}
