import { Component } from '@angular/core';

import defaultComponentVariants from '../../../../../shared/tab-bar.json';

@Component({
	selector: 'app-tab-bar',
	templateUrl: './tab-bar.component.html'
})
export class TabBarComponent {
	variants = defaultComponentVariants;
}


