import { Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
	DBButton,
	DBControlPanelActions1,
	DBDivider,
	DBDrawer,
	DBDrawerHeader,
	DBSelect,
	DBTooltip,
	DENSITIES,
	DENSITY,
	SEMANTIC,
	SEMANTICS
} from '@components';
import {
	DefaultSettings,
	defaultSettings,
	defaultSettingsMapping
} from '../../../../../settings';

@Component({
	selector: 'app-actions-1',
	schemas: [],
	imports: [
		DBControlPanelActions1,
		DBButton,
		DBDrawer,
		DBSelect,
		ReactiveFormsModule,
		DBTooltip,
		DBDivider,
		DBDrawerHeader
	],
	templateUrl: './actions-1.component.html'
})
export class Actions1Component {
	defaultSettingsMapping = Object.entries(defaultSettingsMapping);

	metaRef = viewChild<ElementRef>('metaRef');

	densities = DENSITIES;
	colors = SEMANTICS;

	density = input<string>(DENSITY.REGULAR);
	color = input<string>(SEMANTIC.NEUTRAL);
	settings = input<DefaultSettings>(defaultSettings);

	open = signal<boolean>(false);

	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) {}

	changeSettings = (event: any, key: string) => {
		const changedSettings: any = {
			...this.settings(),
			[key]: event.target.value
		};
		void this.onChange('settings', changedSettings);
	};

	onChange = async (key: string, value: any) => {
		const queryParameters: any = {};

		switch (key) {
			case 'density': {
				queryParameters[key] = value.target.value;

				break;
			}

			case 'color': {
				queryParameters[key] = value.target.value;

				break;
			}

			case 'settings': {
				queryParameters.settings = JSON.stringify(value);

				break;
			}
			// No default
		}

		await this.router.navigate([], {
			relativeTo: this.route,
			queryParams: queryParameters,
			queryParamsHandling: 'merge'
		});
	};
}
