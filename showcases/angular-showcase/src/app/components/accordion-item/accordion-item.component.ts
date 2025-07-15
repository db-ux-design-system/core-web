import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBAccordionItem } from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/accordion-item.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

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
