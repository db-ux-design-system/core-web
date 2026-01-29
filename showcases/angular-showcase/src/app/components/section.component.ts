import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SectionShowcase } from '@components/components/section/showcase/section.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-section',
	template: '<section-showcase></section-showcase>',
	imports: environment.webComponents ? [] : [SectionShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class SectionComponent {}
