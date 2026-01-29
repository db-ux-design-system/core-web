import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LinkShowcase } from '@components/components/link/showcase/link.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-link',
	template: '<link-showcase></link-showcase>',
	imports: environment.webComponents ? [] : [LinkShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class LinkComponent {}
