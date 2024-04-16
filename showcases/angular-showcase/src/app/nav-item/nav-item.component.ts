import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component, Input } from '@angular/core';
import { NavItem } from '../utils/navigation-item';
import {
	DBNavigationItem,
	NavigationContentDirective
} from '../../../../../output/angular/src';

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
