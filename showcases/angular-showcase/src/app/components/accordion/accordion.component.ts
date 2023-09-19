import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/accordion.json';

@Component({
	selector: 'app-accordion',
	templateUrl: './accordion.component.html'
})
export class AccordionComponent {
	variants = defaultComponentVariants;
}
