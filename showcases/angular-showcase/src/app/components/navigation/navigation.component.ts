import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/navigation.json';
import { DefaultComponent } from '../default.component';
import {
	DBNavigation,
	DBInfotext,
	DBNavigationItem,
	DBNavigationItemGroup
} from '@components';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	imports: [
		environment.webComponents
			? [DefaultComponent]
			: [
					DefaultComponent,
					DBNavigation,
					DBNavigationItem,
					DBNavigationItemGroup,
					DBInfotext
				]
	],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	standalone: true
})
export class NavigationComponent {
	variants = defaultComponentVariants;

	getId = (name: string): string =>
		`${name.replaceAll(/\W/g, '_').toLowerCase()}`;
}
