import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwitchShowcase } from '@components/components/switch/showcase/switch.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-switch',
	template: '<switch-showcase></switch-showcase>',
	imports: environment.webComponents ? [] : [SwitchShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class SwitchComponent {}
