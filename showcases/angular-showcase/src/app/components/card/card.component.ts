import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBCard } from '@db-ux/ngx-core-components/src';
import defaultComponentVariants from '../../../../../shared/card.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

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
