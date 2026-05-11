import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BadgeShowcase } from '@components/components/badge/showcase/badge.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-badge',
	template: '<badge-showcase></badge-showcase>',
	imports: environment.webComponents ? [] : [BadgeShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class BadgeComponent {}
