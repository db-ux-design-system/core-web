import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/navigation.json';
import { DefaultComponent } from '../default.component';
import {
	DBNavigation,
	DBInfotext,
	DBNavigationItem,
	NavigationContentDirective
} from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	imports: environment.webComponents
		? [
				DefaultComponent,
				DBNavigation,
				DBNavigationItem,
				NavigationContentDirective
			] // TODO: Remove DBNavigation,DBNavigationItem,NavigationContentDirective after stencil component works
		: [
				DefaultComponent,
				DBNavigation,
				DBNavigationItem,
				NavigationContentDirective,
				DBInfotext
			],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	standalone: true
})
export class NavigationComponent {
	variants = defaultComponentVariants;

	getId = (name: string): string =>
		`${name.replaceAll(/\W/g, '_').toLowerCase()}`;
}
