// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/brand.json';
import { DefaultComponent } from '../default.component';
import { DBBrand } from '../../../../../../output/angular/src/components/brand';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-button',
	templateUrl: './brand.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBBrand],
	standalone: true,
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BrandComponent {
	variants = defaultComponentVariants;
}
