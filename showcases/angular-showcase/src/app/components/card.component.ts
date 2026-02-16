import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardShowcase } from '@components/components/card/showcase/card.showcase';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-card',
	template: '<card-showcase></card-showcase>',
	imports: environment.webComponents ? [] : [CardShowcase],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class CardComponent {}
