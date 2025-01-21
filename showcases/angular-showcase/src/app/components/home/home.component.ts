// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs
} from '../../../../../../output/angular/src';
import { InputsComponent } from '../form/inputs/inputs.component';
import { FormComponent } from '../form/form.component';
import { TextareasComponent } from '../form/textareas/textareas.component';
import { SelectsComponent } from '../form/selects/selects.component';
import { CheckboxesComponent } from '../form/checkboxes/checkboxes.component';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	imports: environment.webComponents
		? [
				DefaultComponent,
				InputsComponent,
				FormComponent,
				TextareasComponent,
				SelectsComponent,
				CheckboxesComponent
			]
		: [
				DBTabs,
				DBTabItem,
				DBTabList,
				DBTabPanel,
				InputsComponent,
				FormComponent,
				TextareasComponent,
				SelectsComponent,
				CheckboxesComponent
			],
	standalone: true,
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {}
