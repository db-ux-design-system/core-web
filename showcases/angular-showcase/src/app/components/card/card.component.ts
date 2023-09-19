import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/card.json';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html'
})
export class CardComponent {
	variants = defaultComponentVariants;
}
