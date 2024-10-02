import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/navigation-item.json';
import { DefaultComponent } from '../default.component';
import {
	DBNavigationItem,
	NavigationContentDirective
} from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-navigation-item',
	templateUrl: './navigation-item.component.html',
	imports: environment.webComponents
		? [DefaultComponent, DBNavigationItem, NavigationContentDirective] // TODO: Remove DBNavigationItem,NavigationContentDirective after stencil component works
		: [DefaultComponent, DBNavigationItem, NavigationContentDirective],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	standalone: true
})
export class NavigationItemComponent {
	variants = defaultComponentVariants;

	showAlert = (exampleName: string) => {
		// eslint-disable-next-line no-alert
		alert(exampleName);
	};
}
