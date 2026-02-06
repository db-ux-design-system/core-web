import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
	DBNavigationItem,
	NavigationContentDirective
} from '../../../../../../packages/ngx-core-components/src';
import defaultComponentVariants from '../../../../../shared/navigation-item.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-navigation-item',
	templateUrl: './navigation-item.component.html',
	imports: environment.webComponents
		? [DefaultComponent, DBNavigationItem, NavigationContentDirective] // TODO: Remove DBNavigationItem,NavigationContentDirective after stencil component works
		: [DefaultComponent, DBNavigationItem, NavigationContentDirective],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	standalone: true
})
export class NavigationItemComponent {
	variants = defaultComponentVariants;

	showAlert = (exampleName: string) => {
		// eslint-disable-next-line no-alert
		alert(exampleName);
	};
}
