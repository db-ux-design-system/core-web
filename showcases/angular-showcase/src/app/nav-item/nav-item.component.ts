import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
	DBControlPanelNavigationItem,
	DBControlPanelNavigationItemGroup
} from '@components';
import { NavItem } from '../utils/navigation-item';

@Component({
	selector: 'app-nav-item',
	templateUrl: './nav-item.component.html',
	imports: [
		RouterLink,
		RouterLinkActive,
		DBControlPanelNavigationItem,
		DBControlPanelNavigationItemGroup
	],
	schemas: [],
	standalone: true
})
export class NavItemComponent {
	@Input({ required: true }) navItem!: NavItem;
}
