import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CheckboxShowcase } from '@components/components/checkbox/showcase/checkbox.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-checkbox',
	template: '<checkbox-showcase></checkbox-showcase>',
	imports: environment.webComponents ? [] : [CheckboxShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class CheckboxComponent {}
