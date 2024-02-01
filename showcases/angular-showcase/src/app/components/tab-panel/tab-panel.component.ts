import { Component } from '@angular/core';

import defaultComponentVariants from '../../../../../shared/tab-panel.json';

@Component({
	selector: 'app-tab-panel',
	templateUrl: './tab-panel.component.html'
})
export class TabPanelComponent {
	variants = defaultComponentVariants;
}


