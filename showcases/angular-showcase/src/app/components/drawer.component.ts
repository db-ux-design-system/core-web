import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DrawerShowcase } from '@components/components/drawer/showcase/drawer.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-drawer',
	template: '<drawer-showcase></drawer-showcase>',
	imports: environment.webComponents ? [] : [DrawerShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class DrawerComponent {}
