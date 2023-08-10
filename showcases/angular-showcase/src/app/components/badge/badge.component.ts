import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/badge.json';

@Component({
	selector: 'app-badge',
	templateUrl: './badge.component.html'
})
export class BadgeComponent {
	variants = defaultComponentVariants;
}
