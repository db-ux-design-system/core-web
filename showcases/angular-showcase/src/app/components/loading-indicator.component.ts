import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoadingIndicatorShowcase } from '@components/components/loading-indicator/showcase/loading-indicator.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-loading-indicator',
	template: '<loading-indicator-showcase></loading-indicator-showcase>',
	imports: environment.webComponents ? [] : [LoadingIndicatorShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class LoadingIndicatorComponent {}
