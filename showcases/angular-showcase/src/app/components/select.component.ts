import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SelectShowcase } from '@components/components/select/showcase/select.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-select',
	template: '<select-showcase></select-showcase>',
	imports: environment.webComponents ? [] : [SelectShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class SelectComponent {}
