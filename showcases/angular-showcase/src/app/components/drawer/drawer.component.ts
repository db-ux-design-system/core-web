// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/drawer.json';
import { DefaultComponent } from '../default.component';
import { DBButton, DBDrawer } from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-drawer',
	templateUrl: './drawer.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBDrawer, DBButton],
	standalone: true,
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DrawerComponent {
	variants = defaultComponentVariants;
	openDrawer: string | undefined = undefined;
	toggleDrawer = (example?: string) => {
		this.openDrawer = example;
	};
}
