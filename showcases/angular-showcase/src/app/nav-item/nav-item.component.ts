import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component, Input } from '@angular/core';
import { NavItem } from '../utils/navigation-item';
import { NavigationContentDirective } from '../../../../../output/angular/src/components/navigation-item/NavigationContent.directive';
import { DBNavigationItem } from '../../../../../output/angular/src/components/navigation-item/navigation-item';

@Component({
	selector: 'app-nav-item',
	templateUrl: './nav-item.component.html',
	imports: [
		RouterLink,
		RouterLinkActive,
		DBNavigationItem,
		NavigationContentDirective
	],
	standalone: true
})
export class NavItemComponent {
	@Input({ required: true }) navItem!: NavItem;

	getBackButtonText = () => {
		return `Back to ${this.navItem.label}`;
	};
}
