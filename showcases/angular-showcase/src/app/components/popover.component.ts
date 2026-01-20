import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PopoverShowcase } from '@components/components/popover/showcase/popover.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-popover',
	template: '<popover-showcase></popover-showcase>',
	imports: environment.webComponents ? [] : [PopoverShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class PopoverComponent {}
