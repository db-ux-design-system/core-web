import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/select.json';

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html'
})
export class SelectComponent {
	variants = defaultComponentVariants;
}
