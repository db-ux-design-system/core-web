import {
	AfterViewInit,
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	ElementRef,
	input,
	viewChild
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
	DBControlPanelMetaNavigation,
	DBSelect,
	delay,
	DENSITIES,
	DENSITY,
	SEMANTIC,
	SEMANTICS
} from '@components';
import {
	defaultSettings,
	DefaultSettings,
	defaultSettingsMapping
} from '../../../../../shared/default-component-data';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-meta-navigation',
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	imports: environment.webComponents
		? []
		: [DBControlPanelMetaNavigation, DBSelect, FormsModule],
	templateUrl: './meta-navigation.component.html'
})
export class MetaNavigationComponent implements AfterViewInit {
	isWebComponent = environment.webComponents;
	defaultSettingsMapping = Object.entries(defaultSettingsMapping);

	metaRef = viewChild<ElementRef>('metaRef');

	densities = DENSITIES;
	colors = SEMANTICS;

	density = input<string>(DENSITY.REGULAR);
	color = input<string>(SEMANTIC.NEUTRAL);
	settings = input<DefaultSettings>(defaultSettings);

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
					controlPanelMobilePosition,
					subNavigationDesktopPosition,
					subNavigationMobilePosition,
					subNavigation,
					subNavigationVariant,
					navigationDesktopVariant,
					navigationMobileVariant
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
