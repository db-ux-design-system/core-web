import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
	COLOR,
	COLORS,
	TONALITIES,
	TONALITY
} from '../../../../packages/components/src/shared/constants';
import { NAVIGATION_ITEMS } from './utils/navigation-item';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	navigationItems = NAVIGATION_ITEMS.sort((a, b) => {
		if (a.pathMatch) return -1;
		return 0;
	});

	tonalities = TONALITIES;
	colors = COLORS;

	tonality = TONALITY.REGULAR;
	color = COLOR.NEUTRAL_0;

	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((parameters) => {
			if (parameters['tonality']) {
				this.tonality = parameters['tonality'];
			}

			if (parameters['color']) {
				this.color = parameters['color'];
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
}
