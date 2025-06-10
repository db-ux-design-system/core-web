import {
	AfterViewInit,
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	ElementRef,
	input,
	viewChild
} from '@angular/core';
import {
	DBControlPanelMetaNavigation,
	DBSelect,
	delay,
	DENSITIES,
	DENSITY,
	SEMANTIC,
	SEMANTICS
} from '@components';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import {
	defaultSettings,
	DefaultSettings,
	defaultSettingsMapping
} from '../../../../../shared/default-component-data';

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
			delay(() => {
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
					Array.from(selects).forEach(
						(select: any, index: number) => {
							select.value = data[index];
						}
					);
				}
			}, 1000);
		}
	}

	changeSettings = (event: any, key: string) => {
		const changedSettings: any = {
			...this.settings(),
			[key]: event.target.value
		};
		this.onChange('settings', changedSettings);
	};

	onChange = async (key: string, value: any) => {
		const queryParams = {};

		if (key === 'density') {
			queryParams[key] = value.target.value;
		} else if (key === 'color') {
			queryParams[key] = value.target.value;
		} else if (key === 'settings') {
			queryParams['settings'] = JSON.stringify(value);
		}

		await this.router.navigate([], {
			relativeTo: this.route,
			queryParams,
			queryParamsHandling: 'merge'
		});
	};
}
