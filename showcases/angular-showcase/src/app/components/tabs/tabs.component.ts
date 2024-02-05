import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/tabs.json';

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html'
})
export class TabsComponent {
	variants = defaultComponentVariants;
}
