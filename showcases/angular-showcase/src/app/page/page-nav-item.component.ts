import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DBNavigationItem, NavigationContentDirective } from '@components';
import { NavItem } from '../utils/navigation-item';

@Component({
	selector: 'app-page-nav-item',
	templateUrl: './page-nav-item.component.html',
	imports: [
		RouterLink,
		RouterLinkActive,
		DBNavigationItem,
		NavigationContentDirective
	],
	standalone: true
})
export class PageNavItemComponent {
	@Input({ required: true }) navItem!: NavItem;

	getBackButtonText = () => `Back to ${this.navItem.label}`;
}
