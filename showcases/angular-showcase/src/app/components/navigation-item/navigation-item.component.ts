import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/navigation-item.json';
import { DefaultComponent } from '../default.component';
import { DBNavigationItem } from '../../../../../../output/angular/src/components/navigation-item/navigation-item';
import { NavigationContentDirective } from '../../../../../../output/angular/src/components/navigation-item/NavigationContent.directive';

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
