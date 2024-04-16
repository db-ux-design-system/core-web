import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/card.json';
import { DefaultComponent } from '../default.component';
import { DBCard } from '../../../../../../output/angular/src';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	imports: [DefaultComponent, DBCard],
	standalone: true
})
export class CardComponent {
	variants = defaultComponentVariants;
}
