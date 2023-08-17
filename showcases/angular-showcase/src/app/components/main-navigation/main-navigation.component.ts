import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/main-navigation.json';

@Component({
	selector: 'app-main-navigation',
	templateUrl: './main-navigation.component.html'
})
export class MainNavigationComponent {
	variants = defaultComponentVariants;
}
