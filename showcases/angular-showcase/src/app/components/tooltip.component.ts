import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TooltipShowcase } from '@components/components/tooltip/showcase/tooltip.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-tooltip',
	template: '<tooltip-showcase></tooltip-showcase>',
	imports: environment.webComponents ? [] : [TooltipShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class TooltipComponent {}
