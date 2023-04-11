import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/button.json';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html'
})
export class ButtonComponent {
	variants = defaultComponentVariants;
}
