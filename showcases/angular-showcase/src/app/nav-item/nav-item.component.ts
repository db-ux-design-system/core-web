import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { NavItem } from '../utils/navigation-item';

@Component({
	selector: 'app-nav-item',
	templateUrl: './nav-item.component.html'
})
export class NavItemComponent {
	@Input('navItem') navItem: NavItem;
	constructor(private readonly router: Router) {}

	isActive = () =>
		this.navItem.path === ''
			? this.router.url === '/'
			: this.router.url.includes(this.navItem.path);

	getBackButtonText = () => {
		return `Back to ${this.navItem.label}`;
	};
}
