// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/header.json';
import { DefaultComponent } from '../default.component';
import {
	DBBrand,
	DBButton,
	DBHeader,
	DBLink,
	DBNavigation,
	DBNavigationItem,
	MetaNavigationDirective,
	NavigationContentDirective,
	NavigationDirective,
	SecondaryActionDirective
} from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	imports: environment.webComponents
		? [
				DefaultComponent,
				DBHeader,
				DBNavigation,
				DBNavigationItem,
				SecondaryActionDirective,
				NavigationDirective,
				MetaNavigationDirective,
				NavigationContentDirective
			] // TODO: Remove DBHeader,DBNavigation,DBNavigationItem,SecondaryActionDirective,NavigationDirective,MetaNavigationDirective,NavigationContentDirective after stencil component works
		: [
				DefaultComponent,
				DBBrand,
				DBButton,
				DBHeader,
				DBLink,
				DBNavigation,
				DBNavigationItem,
				SecondaryActionDirective,
				NavigationDirective,
				MetaNavigationDirective,
				NavigationContentDirective
			],
	standalone: true,
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {
	variants = defaultComponentVariants;
}
