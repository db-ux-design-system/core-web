import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import {
	COLOR_CONST,
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMobile,
	DBNavigation,
	DBShell,
	DBShellSubNavigation,
	DENSITY,
	DENSITY_CONST,
	SEMANTIC
} from '@components';
import {
	defaultSettings,
	DefaultSettings
} from '../../../shared/default-component-data';
import { environment } from '../environments/environment';
import { MetaNavigationComponent } from './control-panel/meta-navigation/meta-navigation.component';
import { PrimaryActionsComponent } from './control-panel/primary-actions/primary-actions.component';
import { SecondaryActionsComponent } from './control-panel/secondary-actions/secondary-actions.component';
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
				MetaNavigationComponent,
				PrimaryActionsComponent,
				SecondaryActionsComponent
			]
		: [
				FormsModule,
				RouterOutlet,
				MetaNavigationComponent,
				PrimaryActionsComponent,
				SecondaryActionsComponent,
				NavItemComponent,
				DBShell,
				DBControlPanelBrand,
				DBControlPanelDesktop,
				DBControlPanelMobile,
				DBNavigation,
				DBShellSubNavigation
			],
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	drawerOpen = false;
	navigationItems: NavItem[] = getSortedNavigationItems(NAVIGATION_ITEMS);

	density = DENSITY.REGULAR;
	color = SEMANTIC.NEUTRAL;
	settings: DefaultSettings = defaultSettings;

	page?: string;
	fullscreen = false;

	constructor(private readonly route: ActivatedRoute) {}

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

			if (
				parameters['settings'] &&
				JSON.stringify(this.settings) !== parameters['settings']
			) {
				this.settings = JSON.parse(parameters['settings']);
			}
		});
	}

	getChangeableClasses = () => {
		return `db-density-${this.density} db-color-${this.color}`;
	};
}
