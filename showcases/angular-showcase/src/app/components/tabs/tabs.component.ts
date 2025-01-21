// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/tabs.json';
import { DefaultComponent } from '../default.component';
import {
	DBInfotext,
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs
} from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [
				DefaultComponent,
				DBTabs,
				DBTabItem,
				DBTabList,
				DBTabPanel,
				DBInfotext
			],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	standalone: true
})
export class TabsComponent {
	variants = defaultComponentVariants;
}
