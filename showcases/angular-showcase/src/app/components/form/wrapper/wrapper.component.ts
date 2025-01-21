// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-form-wrapper',
	standalone: true,
	imports: [],
	templateUrl: './wrapper.component.html'
})
export class WrapperComponent {
	@Input('plain') plain!: string | boolean;
	@Input('model') model!: string | boolean;
	@Input('control') control!: string | boolean;
}
