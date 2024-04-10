import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { DBSelect } from '../../../../output/angular/src/components/select/select';
import { DBNavigation } from '../../../../output/angular/src/components/navigation/navigation';
import { DBBrand } from '../../../../output/angular/src/components/brand/brand';
import { DBHeader } from '../../../../output/angular/src/components/header/header';
import { DBPage } from '../../../../output/angular/src/components/page/page';
import {
	COLOR,
	COLORS,
	DENSITIES,
	DENSITY,
	COLOR_CONST,
	DENSITY_CONST
} from '../../../../packages/components/src/shared/constants';
import { DBButton } from '../../../../output/angular/src/components/button';
import { ActionBarDirective } from '../../../../output/angular/src/components/header/ActionBar.directive';
import { NavigationDirective } from '../../../../output/angular/src/components/header/Navigation.directive';
import { MetaNavigationDirective } from '../../../../output/angular/src/components/header/MetaNavigation.directive';
import { NavigationContentDirective } from '../../../../output/angular/src/components/navigation-item/NavigationContent.directive';
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
		FormsModule,
		RouterOutlet,
		NavItemComponent,
		DBPage,
		DBHeader,
		DBBrand,
		DBNavigation,
		DBSelect,
		DBButton,
		ActionBarDirective,
		NavigationDirective,
		MetaNavigationDirective,
		NavigationContentDirective
	],
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
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

	toggleDrawer = (open: boolean) => {
		this.drawerOpen = open;
	};
}
