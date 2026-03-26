import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BreadcrumbShowcase } from '@components/components/breadcrumb/showcase/breadcrumb.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-breadcrumb',
	template: '<breadcrumb-showcase></breadcrumb-showcase>',
	imports: environment.webComponents ? [] : [BreadcrumbShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class BreadcrumbComponent {}
