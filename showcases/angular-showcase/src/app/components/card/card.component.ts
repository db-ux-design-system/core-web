import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/card.json';
import { DefaultComponent } from '../default.component';
import { DBCard } from '@components';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBCard],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class CardComponent {
	variants = defaultComponentVariants;
}
