import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderShowcase } from '@components/components/header/showcase/header.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-header',
	template: '<header-showcase></header-showcase>',
	imports: environment.webComponents ? [] : [HeaderShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class HeaderComponent {}
