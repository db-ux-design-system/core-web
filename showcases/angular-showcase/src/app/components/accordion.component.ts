import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AccordionShowcase } from '@components/components/accordion/showcase/accordion.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-accordion',
	template: '<accordion-showcase></accordion-showcase>',
	imports: environment.webComponents ? [] : [AccordionShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class AccordionComponent {}
