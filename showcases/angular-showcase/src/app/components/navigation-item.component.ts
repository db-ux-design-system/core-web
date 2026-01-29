import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavigationItemShowcase } from '@components/components/navigation-item/showcase/navigation-item.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-navigation-item',
	template: '<navigation-item-showcase></navigation-item-showcase>',
	imports: environment.webComponents ? [] : [NavigationItemShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class NavigationItemComponent {}
