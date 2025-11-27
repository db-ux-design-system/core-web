import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBIcon, DBTooltip } from '../../../../../../output/angular/src';
// TODO: Uncomment after proper breadcrumb component integration
// import {
// 	DBBreadcrumb,
// 	DBBreadcrumbItem
// } from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/breadcrumb.json';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	imports: [DefaultComponent, DBIcon, DBTooltip],
	standalone: true,
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BreadcrumbComponent {
	variants = defaultComponentVariants;
	isExpanded: Record<string, boolean> = {};

	toggleExpanded(key: string) {
		this.isExpanded[key] = !this.isExpanded[key];
	}
}
