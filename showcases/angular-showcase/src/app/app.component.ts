import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { DBSelect } from '../../../../output/angular/src/components/select/select';
import { DBMainNavigation } from '../../../../output/angular/src/components/main-navigation/main-navigation';
import { DBBrand } from '../../../../output/angular/src/components/brand/brand';
import { DBHeader } from '../../../../output/angular/src/components/header/header';
import { DBPage } from '../../../../output/angular/src/components/page/page';
import {
	COLOR,
	COLOR_CONST,
	COLORS,
	TONALITIES,
	TONALITY,
	TONALITY_CONST
} from '../../../../packages/components/src/shared/constants';
import { DBButton } from '../../../../output/angular/src/components/button';
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
		DBMainNavigation,
		DBSelect,
		DBButton
	],
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	drawerOpen = false;
	navigationItems: NavItem[] = getSortedNavigationItems(NAVIGATION_ITEMS);

	tonalities = TONALITIES;
	colors = COLORS;

	tonality = TONALITY.REGULAR;
	color = COLOR.BASE;

	page?: string;
	fullscreen = false;

	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((parameters) => {
			if (parameters[TONALITY_CONST]) {
				this.tonality = parameters[TONALITY_CONST];
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
		return `db-ui-${this.tonality} db-bg-${this.color}`;
	};

	onChange = async (value: any) => {
		await this.router.navigate([], {
			relativeTo: this.route,
			queryParams: { tonality: this.tonality, color: this.color },
			queryParamsHandling: 'merge'
		});
	};

	toggleDrawer = (open: boolean) => {
		this.drawerOpen = open;
	};
}
