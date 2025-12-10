import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBNavigationItem, DBNavigationItemGroup } from '@components';
import defaultComponentVariants from '../../../../../shared/navigation-item.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-navigation-item',
	templateUrl: './navigation-item.component.html',
	imports: [
		environment.webComponents
			? [DefaultComponent]
			: [DefaultComponent, DBNavigationItem, DBNavigationItemGroup]
	],
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
