import { Component, NO_ERRORS_SCHEMA, OnInit, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
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
} from '@components';
import { NavItemComponent } from './nav-item/nav-item.component';
import {
	getSortedNavigationItems,
	NAVIGATION_ITEMS,
	NavItem
} from './utils/navigation-item';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
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
		MetaNavigationDirective,
		FormField
	],
	// NO_ERRORS_SCHEMA required for Angular 21 [formField] directive template type-checking.
	// Remove when Angular 22 is the minimum supported version.
	schemas: [NO_ERRORS_SCHEMA],
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	drawerOpen = false;
	navigationItems: NavItem[] = getSortedNavigationItems(NAVIGATION_ITEMS);

	densities = DENSITIES;
	colors = COLORS;

	settingsModel = signal({
		density: DENSITY.REGULAR,
		color: COLOR.NEUTRAL_BG_LEVEL_1
	});

	settingsForm = form(this.settingsModel);

	page?: string;
	fullscreen = false;

	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((parameters) => {
			if (parameters[DENSITY_CONST]) {
				this.settingsModel.update((m) => ({
					...m,
					density: parameters[DENSITY_CONST]
				}));
			}

			if (parameters[COLOR_CONST]) {
				this.settingsModel.update((m) => ({
					...m,
					color: parameters[COLOR_CONST]
				}));
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
		const density = this.settingsForm.density().value();
		const color = this.settingsForm.color().value();
		return `db-density-${density} db-${color}`;
	};

	onChange = async (_value: unknown) => {
		const density = this.settingsForm.density().value();
		const color = this.settingsForm.color().value();
		await this.router.navigate([], {
			relativeTo: this.route,
			queryParams: { density, color },
			queryParamsHandling: 'merge'
		});
	};

	toggleDrawer = (open: boolean | void) => {
		this.drawerOpen = Boolean(open);
	};
}
