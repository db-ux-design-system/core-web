import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TabsShowcase } from '@components/components/tabs/showcase/tabs.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-tabs',
	template: '<tabs-showcase></tabs-showcase>',
	imports: environment.webComponents ? [] : [TabsShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class TabsComponent {}
