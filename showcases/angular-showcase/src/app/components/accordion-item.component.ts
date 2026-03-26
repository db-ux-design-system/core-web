import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AccordionItemShowcase } from '@components/components/accordion-item/showcase/accordion-item.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-accordion-item',
	template: '<accordion-item-showcase></accordion-item-showcase>',
	imports: environment.webComponents ? [] : [AccordionItemShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class AccordionItemComponent {}
