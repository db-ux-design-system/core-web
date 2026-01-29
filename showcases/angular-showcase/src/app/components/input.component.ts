import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InputShowcase } from '@components/components/input/showcase/input.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-input',
	template: '<input-showcase></input-showcase>',
	imports: environment.webComponents ? [] : [InputShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class InputComponent {}
