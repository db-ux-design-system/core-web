import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/accordion-item.json';

@Component({
	selector: 'app-accordion-item',
	templateUrl: './accordion-item.component.html'
})
export class AccordionItemComponent {
	variants = defaultComponentVariants;
}
