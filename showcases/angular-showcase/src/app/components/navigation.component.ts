import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavigationShowcase } from '@components/components/navigation/showcase/navigation.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-navigation',
	template: '<navigation-showcase></navigation-showcase>',
	imports: environment.webComponents ? [] : [NavigationShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class NavigationComponent {}
