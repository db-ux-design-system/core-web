import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
} from '@db-ux/ngx-core-components/src';
import defaultComponentVariants from '../../../../../shared/header.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

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
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class HeaderComponent {
	variants = defaultComponentVariants;
}
