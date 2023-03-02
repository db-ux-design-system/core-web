import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/input';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html'
})
export class InputComponent {
	variants = defaultComponentVariants;

	variantColors: any[] = ['information', 'warning', 'critical', 'success'];
}
