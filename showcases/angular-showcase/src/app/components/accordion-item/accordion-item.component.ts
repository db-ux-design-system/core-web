import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/accordion-item.json';
import { DBAccordionItem } from '../../../../../../output/angular/src';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-accordion-item',
	templateUrl: './accordion-item.component.html',
	imports: [DefaultComponent, DBAccordionItem],
	standalone: true
})
export class AccordionItemComponent {
	variants = defaultComponentVariants;
}
