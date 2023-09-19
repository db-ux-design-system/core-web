import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/navigation-item.json';

@Component({
	selector: 'app-navigation-item',
	templateUrl: './navigation-item.component.html'
})
export class NavigationItemComponent {
	variants = defaultComponentVariants;

	showAlert = (exampleName: string) => {
		// eslint-disable-next-line no-alert
		alert(exampleName);
	};
}
