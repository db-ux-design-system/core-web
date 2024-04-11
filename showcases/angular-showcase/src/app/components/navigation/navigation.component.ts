import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/navigation.json';
import { DefaultComponent } from '../default.component';
import { DBNavigation } from '../../../../../../output/angular/src/components/navigation/navigation';
import { DBNavigationItem } from '../../../../../../output/angular/src/components/navigation-item/navigation-item';
import { NavigationContentDirective } from '../../../../../../output/angular/src/components/navigation-item/NavigationContent.directive';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	imports: [
		DefaultComponent,
		DBNavigation,
		DBNavigationItem,
		NavigationContentDirective
	],
	standalone: true
})
export class NavigationComponent {
	variants = defaultComponentVariants;
}
