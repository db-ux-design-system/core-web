import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { NavItem } from '../utils/navigation-item';
import { DBNavigationItem, DBNavigationItemGroup } from '@components';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-nav-item',
	templateUrl: './nav-item.component.html',
	imports: environment.webComponents
		? [RouterLink, RouterLinkActive]
		: [
				RouterLink,
				RouterLinkActive,
				DBNavigationItem,
				DBNavigationItemGroup
			],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	standalone: true
})
export class NavItemComponent {
	@Input({ required: true }) navItem!: NavItem;
}
