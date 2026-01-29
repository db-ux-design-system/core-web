import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RadioShowcase } from '@components/components/radio/showcase/radio.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-radio',
	template: '<radio-showcase></radio-showcase>',
	imports: environment.webComponents ? [] : [RadioShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class RadioComponent {}
