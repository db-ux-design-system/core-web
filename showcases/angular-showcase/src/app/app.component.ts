import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import {
	COLOR,
	COLOR_CONST,
	COLORS,
	DBBrand,
	DBButton,
	DBHeader,
	DBNavigation,
	DBPage,
	DBSelect,
	DENSITIES,
	DENSITY,
	DENSITY_CONST,
	MetaNavigationDirective,
	NavigationDirective,
	SecondaryActionDirective
} from '@db-ux/ngx-core-components/src';
import { environment } from '../environments/environment';
import { NavItemComponent } from './nav-item/nav-item.component';
import {
	getSortedNavigationItems,
	NAVIGATION_ITEMS,
	NavItem
} from './utils/navigation-item';

@Component({
	selector: 'app-root',
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	imports: environment.webComponents
		? [
				FormsModule,
				RouterOutlet,
				NavItemComponent,
				DBPage,
				DBHeader,
				DBNavigation,
				SecondaryActionDirective,
				NavigationDirective,
				MetaNavigationDirective
			]
		: [
				FormsModule,
				RouterOutlet,
				NavItemComponent,
				DBPage,
				DBHeader,
				DBBrand,
				DBNavigation,
				DBSelect,
				DBButton,
				SecondaryActionDirective,
				NavigationDirective,
				MetaNavigationDirective
			],
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	isWebComponents = environment.webComponents;
	drawerOpen = false;
	navigationItems: NavItem[] = getSortedNavigationItems(NAVIGATION_ITEMS);

	densities = DENSITIES;
	colors = COLORS;

	density = DENSITY.REGULAR;
	color = COLOR.NEUTRAL_BG_LEVEL_1;

	page?: string;
	fullscreen = false;

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

			if (parameters['page']) {
				this.page = parameters['page'];
			}

			if (parameters['fullscreen']) {
				this.fullscreen = parameters['fullscreen'];
			}
		});
	}

	getChangeableClasses = () => {
		return `db-density-${this.density} db-${this.color}`;
	};

	onChange = async (value: any) => {
		await this.router.navigate([], {
			relativeTo: this.route,
			queryParams: { density: this.density, color: this.color },
			queryParamsHandling: 'merge'
		});
	};

	toggleDrawer = (open: boolean | void) => {
		this.drawerOpen = Boolean(open);
	};
}
