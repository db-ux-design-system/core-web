import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
	DBAccordion,
	DBAccordionItem,
	DBInfotext
} from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/accordion.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-accordion',
	templateUrl: './accordion.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBInfotext, DBAccordion, DBAccordionItem],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class AccordionComponent {
	variants = defaultComponentVariants;
}
