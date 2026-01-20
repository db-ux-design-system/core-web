import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InfotextShowcase } from '@components/components/infotext/showcase/infotext.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-infotext',
	template: '<infotext-showcase></infotext-showcase>',
	imports: environment.webComponents ? [] : [InfotextShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class InfotextComponent {}
