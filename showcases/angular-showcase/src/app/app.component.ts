import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
	COLOR,
	COLORS,
	TONALITIES,
	TONALITY,
	COLOR_CONST,
	TONALITY_CONST
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
			if (parameters[TONALITY_CONST]) {
				this.tonality = parameters[TONALITY_CONST];
			}

			if (parameters[COLOR_CONST]) {
				this.color = parameters[COLOR_CONST];
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
