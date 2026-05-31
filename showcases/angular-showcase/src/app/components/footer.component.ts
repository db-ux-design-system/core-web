import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterShowcase } from '@components/components/footer/showcase/footer.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-footer',
	template: '<footer-showcase></footer-showcase>',
	imports: environment.webComponents ? [] : [FooterShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class FooterComponent {}
