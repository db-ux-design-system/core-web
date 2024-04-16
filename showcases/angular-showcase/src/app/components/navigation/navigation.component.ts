import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/navigation.json';
import { DefaultComponent } from '../default.component';
import {
	DBNavigation,
	DBNavigationItem,
	NavigationContentDirective
} from '../../../../../../output/angular/src';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	imports: [
		DefaultComponent,
		DBNavigation,
		DBNavigationItem,
		NavigationContentDirective
	],
	standalone: true
})
export class NavigationComponent {
	variants = defaultComponentVariants;
}
