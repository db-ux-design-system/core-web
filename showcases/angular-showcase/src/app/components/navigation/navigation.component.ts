import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
	DBInfotext,
	DBNavigation,
	DBNavigationItem,
	DBNavigationItemGroup
} from '@components';
import defaultComponentVariants from '../../../../../shared/navigation.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

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
