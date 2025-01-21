// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
	DBAccordion,
	DBAccordionItem,
	DBInfotext
} from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/accordion.json';
import { DefaultComponent } from '../default.component';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-accordion',
	templateUrl: './accordion.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBInfotext, DBAccordion, DBAccordionItem],
	standalone: true,
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccordionComponent {
	variants = defaultComponentVariants;
}
