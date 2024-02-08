import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/main-navigation.json';
import { DefaultComponent } from '../default.component';
import { DBMainNavigation } from '../../../../../../output/angular/src/components/main-navigation/main-navigation';
import { DBNavigationItem } from '../../../../../../output/angular/src/components/navigation-item/navigation-item';

@Component({
	selector: 'app-main-navigation',
	templateUrl: './main-navigation.component.html',
	imports: [DefaultComponent, DBMainNavigation, DBNavigationItem],
	standalone: true
})
export class MainNavigationComponent {
	variants = defaultComponentVariants;
}
