import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/navigation.json';
import { DefaultComponent } from '../default.component';
import {
	DBNavigation,
	DBInfotext,
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
		NavigationContentDirective,
		DBInfotext
	],
	standalone: true
})
export class NavigationComponent {
	variants = defaultComponentVariants;

	getId = (name: string): string =>
		`${name.replaceAll(/\W/g, '_').toLowerCase()}`;
}
