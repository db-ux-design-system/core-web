import { Component } from '@angular/core';
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

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	imports: [
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
	standalone: true
})
export class HeaderComponent {
	variants = defaultComponentVariants;
}
