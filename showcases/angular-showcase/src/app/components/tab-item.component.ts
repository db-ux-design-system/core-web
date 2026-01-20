import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TabItemShowcase } from '@components/components/tab-item/showcase/tab-item.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-tab-item',
	template: '<tab-item-showcase></tab-item-showcase>',
	imports: environment.webComponents ? [] : [TabItemShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class TabItemComponent {}
