import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonShowcase } from '@components/components/button/showcase/button.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-button',
	template: '<button-showcase></button-showcase>',
	imports: environment.webComponents ? [] : [ButtonShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class ButtonComponent {}
