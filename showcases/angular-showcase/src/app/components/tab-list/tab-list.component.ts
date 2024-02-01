import { Component } from '@angular/core';

import defaultComponentVariants from '../../../../../shared/tab-list.json';

@Component({
	selector: 'app-tab-list',
	templateUrl: './tab-list.component.html'
})
export class TabListComponent {
	variants = defaultComponentVariants;
}


