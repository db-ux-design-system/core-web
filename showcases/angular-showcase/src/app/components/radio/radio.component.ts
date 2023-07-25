import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/radio.json';

@Component({
	selector: 'app-radio',
	templateUrl: './radio.component.html'
})
export class RadioComponent {
	variants = defaultComponentVariants;
}
