import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/input.json';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html'
})
export class InputComponent {
	variants = defaultComponentVariants;

	variantColors: any[] = [
		'informational',
		'warning',
		'critical',
		'successful'
	];
}
