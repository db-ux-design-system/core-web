import { Component } from '@angular/core';
import { DBAccordion } from '../../../../../../output/angular/src/components/accordion/accordion';
import defaultComponentVariants from '../../../../../shared/accordion.json';
import { DefaultComponent } from '../default.component';
import { DBInfotext } from '../../../../../../output/angular/src/components/infotext';
import { DBAccordionItem } from '../../../../../../output/angular/src/components/accordion-item';

@Component({
	selector: 'app-accordion',
	templateUrl: './accordion.component.html',
	imports: [DefaultComponent, DBInfotext, DBAccordion, DBAccordionItem],
	standalone: true
})
export class AccordionComponent {
	variants = defaultComponentVariants;
}
