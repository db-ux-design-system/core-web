import { Component } from '@angular/core';
import {
	DBAccordion,
	DBAccordionItem,
	DBInfotext
} from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/accordion.json';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-accordion',
	templateUrl: './accordion.component.html',
	imports: [DefaultComponent, DBInfotext, DBAccordion, DBAccordionItem],
	standalone: true
})
export class AccordionComponent {
	variants = defaultComponentVariants;
}
