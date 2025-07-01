import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/accordion-item.json';
import { DBAccordionItem } from '../../../../../../output/angular/src';
import { DefaultComponent } from '../default.component';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-accordion-item',
	templateUrl: './accordion-item.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBAccordionItem],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class AccordionItemComponent {
	variants = defaultComponentVariants;
}
