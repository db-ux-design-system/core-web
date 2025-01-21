// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { Component } from '@angular/core';
import { DefaultComponent } from '../default.component';
import defaultComponentVariants from '../../../../../shared/stack.json';
import { DBStack } from '../../../../../../output/angular/src/components/stack';
import { DBInfotext } from '../../../../../../output/angular/src/components/infotext';
import { DBDivider } from '../../../../../../output/angular/src/components/divider';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-stack',
	templateUrl: './stack.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBStack, DBInfotext, DBDivider],
	standalone: true
})
export class StackComponent {
	variants = defaultComponentVariants;
}
