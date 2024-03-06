import { Router, RouterLink } from '@angular/router';
import { Component, Input } from '@angular/core';
import { NavItem } from '../utils/navigation-item';
import { NavigationContentDirective } from '../../../../../output/angular/src/components/navigation-item/NavigationContent.directive';
import { DBNavigationItem } from '../../../../../output/angular/src/components/navigation-item/navigation-item';

@Component({
	selector: 'app-nav-item',
	templateUrl: './nav-item.component.html',
	imports: [RouterLink, DBNavigationItem, NavigationContentDirective],
	standalone: true
})
export class NavItemComponent {
	@Input({ required: true }) navItem!: NavItem;
	constructor(private readonly router: Router) {}

	isActive = () =>
		this.navItem.path === ''
			? this.router.url === '/'
			: this.router.url.includes(this.navItem.path);

	getBackButtonText = () => {
		return `Back to ${this.navItem.label}`;
	};
}
