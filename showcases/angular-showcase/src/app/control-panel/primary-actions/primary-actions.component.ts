import {
	AfterViewInit,
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	ElementRef,
	input,
	signal,
	viewChild
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
	DBButton,
	DBControlPanelPrimaryActions,
	DBDivider,
	DBDrawer,
	DBSelect,
	DBTooltip,
	delay,
	DENSITIES,
	DENSITY,
	SEMANTIC,
	SEMANTICS
} from '@components';
import {
	DefaultSettings,
	defaultSettings,
	defaultSettingsMapping
} from '../../../../../shared/default-component-data';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-primary-actions',
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	imports: [
		environment.webComponents
			? []
			: [
					DBControlPanelPrimaryActions,
					DBButton,
					DBDrawer,
					DBSelect,
					ReactiveFormsModule,
					DBTooltip,
					DBDivider
				]
	],
	templateUrl: './primary-actions.component.html'
})
export class PrimaryActionsComponent implements AfterViewInit {
	isWebComponent = environment.webComponents;
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

	ngAfterViewInit() {
		if (this.isWebComponent) {
			void delay(() => {
				const {
					controlPanelDesktopPosition,
					controlPanelMobilePosition,
					navigationMobileVariant,
					navigationDesktopVariant,
					subNavigationVariant,
					subNavigation,
					subNavigationMobilePosition,
					subNavigationDesktopPosition
				} = this.settings();
				const data = [
					this.density(),
					this.color(),
					controlPanelDesktopPosition,
					navigationDesktopVariant,
					controlPanelMobilePosition,
					navigationMobileVariant,
					subNavigation,
					subNavigationDesktopPosition,
					subNavigationMobilePosition,
					subNavigationVariant
				];
				const selects =
					this.metaRef()?.nativeElement.querySelectorAll('select');
				if (selects) {
					for (const select of selects) {
						const index: number = [...selects].indexOf(select);
						select.value = data[index];
					}
				}
			}, 1000);
		}
	}

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
