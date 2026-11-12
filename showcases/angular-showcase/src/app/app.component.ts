import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import {
	COLOR_CONST,
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMobile,
	DBControlPanelNavigation,
	DBControlPanelSkipNavigation,
	DBShell,
	DBShellContent,
	DBShellSubNavigation,
	DENSITY,
	DENSITY_CONST,
	SEMANTIC
} from '@components';
import {
	type ColoringMode,
	COLORING_MODES,
	defaultColoringMode,
	defaultSettings,
	DefaultSettings
} from '../../../settings';
import { Actions1Component } from './control-panel/actions-1/actions-1.component';
import { Actions2Component } from './control-panel/actions-2/actions-2.component';
import { MetaNavigationComponent } from './control-panel/meta-navigation/meta-navigation.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { PageComponent } from './page/page.component';
import {
	getSortedNavigationItems,
	NAVIGATION_ITEMS,
	NavItem
} from './utils/navigation-item';

@Component({
	selector: 'app-root',
	standalone: true,
	schemas: [],
	imports: [
		FormsModule,
		RouterOutlet,
		MetaNavigationComponent,
		Actions1Component,
		Actions2Component,
		NavItemComponent,
		PageComponent,
		DBShell,
		DBShellContent,
		DBControlPanelBrand,
		DBControlPanelDesktop,
		DBControlPanelMobile,
		DBControlPanelNavigation,
		DBControlPanelSkipNavigation,
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
	// TODO: Remove shell state and `showcases/angular-showcase/src/app/page` folder after v6.0.0
	shell = true;
	coloringMode: ColoringMode = defaultColoringMode;

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

			if (parameters['shell'] !== undefined) {
				this.shell = parameters['shell'] === 'true';
			}

			if (
				parameters['coloring'] &&
				(COLORING_MODES as readonly string[]).includes(
					parameters['coloring']
				)
			) {
				this.coloringMode = parameters['coloring'];
			}

			this.applyColoring();

			if (
				parameters['settings'] &&
				JSON.stringify(this.settings) !== parameters['settings']
			) {
				this.settings = JSON.parse(parameters['settings']);
			}
		});
	}

	/**
	 * Swap the active DB-UX stylesheet based on the `coloring` URL param. The
	 * three bundles are emitted as non-injected stylesheets (see angular.json)
	 * served next to the app, so a runtime `<link>` can point at them by name.
	 * Both "adaptive" and "legacy-adaptive" drive the root `data-adaptive-coloring`
	 * (see the template and `getRootAdaptive`); "legacy-adaptive" additionally
	 * loads both bundles so adaptive overrides legacy on that opted-in subtree.
	 */
	applyColoring(): void {
		const id = 'db-ux-stylesheet';
		let link = document.querySelector<HTMLLinkElement>(`#${id}`);
		if (!link) {
			link = document.createElement('link');
			link.id = id;
			link.rel = 'stylesheet';
			document.head.append(link);
		}

		const fileByMode: Record<ColoringMode, string> = {
			legacy: 'db-ux-legacy.css',
			adaptive: 'db-ux-adaptive.css',
			'legacy-adaptive': 'db-ux-legacy-adaptive.css'
		};
		link.href = `./${fileByMode[this.coloringMode]}`;
	}

	// Shown in both adaptive modes, hidden in legacy - this also gates the
	// adaptive-matrix examples (shown only inside `[data-adaptive-coloring="true"]`).
	getRootAdaptive = () =>
		this.coloringMode === 'adaptive' ||
		this.coloringMode === 'legacy-adaptive'
			? 'true'
			: undefined;

	getChangeableClasses = () =>
		`db-density-${this.density} db-color-${this.color}`;

	getFullscreenClasses = () =>
		`fullscreen-container ${this.getChangeableClasses()}`;
}
