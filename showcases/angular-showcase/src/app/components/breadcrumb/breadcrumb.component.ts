import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBBreadcrumb } from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../patternhub/data/breadcrumb.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBBreadcrumb],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class BreadcrumbComponent {
	variants = defaultComponentVariants;
}
