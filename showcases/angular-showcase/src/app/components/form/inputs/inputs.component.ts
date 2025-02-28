// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { DBInput, DBSelect } from '../../../../../../../output/angular/src';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'app-inputs',
	standalone: true,
	imports: environment.webComponents
		? [WrapperComponent, FormsModule, ReactiveFormsModule]
		: [WrapperComponent, DBInput, FormsModule, ReactiveFormsModule],
	templateUrl: './inputs.component.html',
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputsComponent {
	plain = 'test1';
	ngModel = 'test2';
	formControl: FormControl = new FormControl('test3');
}
