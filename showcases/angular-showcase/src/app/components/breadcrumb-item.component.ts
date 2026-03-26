import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BreadcrumbItemShowcase } from '@components/components/breadcrumb-item/showcase/breadcrumb-item.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-breadcrumb-item',
	template: '<breadcrumb-item-showcase></breadcrumb-item-showcase>',
	imports: environment.webComponents ? [] : [BreadcrumbItemShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class BreadcrumbItemComponent {}
