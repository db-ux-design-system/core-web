import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomSelectShowcase } from '@components/components/custom-select/showcase/custom-select.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-custom-select',
	template: '<custom-select-showcase></custom-select-showcase>',
	imports: environment.webComponents ? [] : [CustomSelectShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class CustomSelectComponent {}
