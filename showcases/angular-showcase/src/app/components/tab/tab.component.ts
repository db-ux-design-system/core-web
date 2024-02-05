import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/tab.json';

@Component({
	selector: 'app-tab',
	templateUrl: './tab.component.html'
})
export class TabComponent {
	variants = defaultComponentVariants;
}
