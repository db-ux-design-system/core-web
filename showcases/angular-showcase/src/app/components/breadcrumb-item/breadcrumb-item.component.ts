import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBBreadcrumbItem } from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/breadcrumb-item.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-breadcrumb-item',
	templateUrl: './breadcrumb-item.component.html',
	imports: environment.webComponents
		? [DefaultComponent, DBBreadcrumbItem] // TODO: Remove DBBreadcrumbItem after stencil component works
		: [DefaultComponent, DBBreadcrumbItem],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	standalone: true
})
export class BreadcrumbItemComponent {
	variants = defaultComponentVariants;
}
