import { Component } from '@angular/core';
import { isAreaCurrent, NAVIGATION_ITEMS } from './utils/navigation-item';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'angular-current-showcase';
	navigationItems = NAVIGATION_ITEMS;
	isAria = isAreaCurrent;

	tonality = 'regular';

	getTonality = () => {
		return `db-ui-${this.tonality}`;
	};
}
