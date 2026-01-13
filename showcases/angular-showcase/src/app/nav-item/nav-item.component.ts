import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DBNavigationItem, DBNavigationItemGroup } from '@components';
import { environment } from '../../environments/environment';
import { NavItem } from '../utils/navigation-item';

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
