import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import {
	COLOR_CONST,
	COLORS,
	DBBrand,
	DBButton,
	DBHeader,
	DBNavigation,
	DBPage,
	DBSelect,
	DBSwitch,
	DENSITIES,
	DENSITY,
	DENSITY_CONST,
	MetaNavigationDirective,
	NavigationDirective,
	SecondaryActionDirective,
	SEMANTIC
} from '@components';
import {
	getSortedNavigationItems,
	NAVIGATION_ITEMS,
	NavItem
} from '../utils/navigation-item';
import { PageNavItemComponent } from './page-nav-item.component';

@Component({
	selector: 'app-page',
	standalone: true,
	imports: [
		FormsModule,
		RouterOutlet,
		DBPage,
		DBHeader,
		DBBrand,
		DBNavigation,
		DBSelect,
		DBButton,
		DBSwitch,
		MetaNavigationDirective,
		NavigationDirective,
		SecondaryActionDirective,
		PageNavItemComponent
	],
	templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
	drawerOpen = false;
	navigationItems: NavItem[] = getSortedNavigationItems(NAVIGATION_ITEMS);

	densities = DENSITIES;
	colors = COLORS;

	density = DENSITY.REGULAR;
	color = SEMANTIC.NEUTRAL;
	shell = true;

	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((parameters) => {
			if (parameters[DENSITY_CONST]) {
				this.density = parameters[DENSITY_CONST];
			}

			if (parameters[COLOR_CONST]) {
				this.color = parameters[COLOR_CONST];
			}

			if (parameters['shell'] !== undefined) {
				this.shell = parameters['shell'] === 'true';
			}
		});
	}

	onToggle(open: boolean | void): void {
		this.drawerOpen = Boolean(open);
	}

	onChange(_event?: any): void {
		void this.updateQuery();
	}

	onShellToggle(): void {
		this.shell = !this.shell;
		void this.updateQuery();
	}

	private async updateQuery(): Promise<void> {
		await this.router.navigate([], {
			relativeTo: this.route,
			queryParams: {
				[DENSITY_CONST]: this.density,
				[COLOR_CONST]: this.color,
				shell: String(this.shell)
			},
			queryParamsHandling: 'merge'
		});
	}
}
