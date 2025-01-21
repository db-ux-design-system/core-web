// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/tag.json';
import { DefaultComponent } from '../default.component';
import { DBTag } from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-tag',
	templateUrl: './tag.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBTag],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	standalone: true
})
export class TagComponent {
	variants = defaultComponentVariants;
	showAlert = (exampleName: string) => {
		// eslint-disable-next-line no-alert
		alert(exampleName);
	};
}
