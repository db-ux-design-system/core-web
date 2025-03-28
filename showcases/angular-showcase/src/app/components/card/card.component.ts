// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/card.json';
import { DefaultComponent } from '../default.component';
import { DBCard } from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBCard],
	standalone: true,
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardComponent {
	variants = defaultComponentVariants;
}
