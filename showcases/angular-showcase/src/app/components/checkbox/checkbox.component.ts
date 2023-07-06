import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/checkbox.json';

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html'
})
export class CheckboxComponent {
	variants = defaultComponentVariants;
}
