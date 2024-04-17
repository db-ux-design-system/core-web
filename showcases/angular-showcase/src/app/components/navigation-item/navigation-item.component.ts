import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/navigation-item.json';
import { DefaultComponent } from '../default.component';
import {
	DBNavigationItem,
	NavigationContentDirective
} from '../../../../../../output/angular/src';

@Component({
	selector: 'app-navigation-item',
	templateUrl: './navigation-item.component.html',
	imports: [DefaultComponent, DBNavigationItem, NavigationContentDirective],
	standalone: true
})
export class NavigationItemComponent {
	variants = defaultComponentVariants;

	showAlert = (exampleName: string) => {
		// eslint-disable-next-line no-alert
		alert(exampleName);
	};
}
