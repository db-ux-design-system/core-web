import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomButtonShowcase } from '@components/components/custom-button/showcase/custom-button.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-custom-button',
	template: '<custom-button-showcase></custom-button-showcase>',
	imports: environment.webComponents ? [] : [CustomButtonShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class CustomButtonComponent {}
