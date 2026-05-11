import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrandShowcase } from '@components/components/brand/showcase/brand.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-brand',
	template: '<brand-showcase></brand-showcase>',
	imports: environment.webComponents ? [] : [BrandShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class BrandComponent {}
