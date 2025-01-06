import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { NavItem } from '../utils/navigation-item';
import {
	DBNavigationItem,
	NavigationContentDirective
} from '../../../../../output/angular/src';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-nav-item',
	templateUrl: './nav-item.component.html',
	imports: [
		RouterLink,
		RouterLinkActive,
		DBNavigationItem,
		NavigationContentDirective
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	standalone: true
})
export class NavItemComponent {
	@Input({ required: true }) navItem!: NavItem;

	getBackButtonText = () => {
		return `Back to ${this.navItem.label}`;
	};
}
