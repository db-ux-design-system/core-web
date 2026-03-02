import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IconShowcase } from '@components/components/icon/showcase/icon.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-icon',
	template: '<icon-showcase></icon-showcase>',
	imports: environment.webComponents ? [] : [IconShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class IconComponent {}
