import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DividerShowcase } from '@components/components/divider/showcase/divider.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-divider',
	template: '<divider-showcase></divider-showcase>',
	imports: environment.webComponents ? [] : [DividerShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class DividerComponent {}
