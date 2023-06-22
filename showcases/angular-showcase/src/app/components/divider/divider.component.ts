import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/divider.json';

@Component({
	selector: 'app-divider',
	templateUrl: './divider.component.html'
})
export class DividerComponent {
	variants = defaultComponentVariants;
}
