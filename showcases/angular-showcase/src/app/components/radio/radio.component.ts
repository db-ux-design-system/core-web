import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/radio.json';
import { DefaultComponent } from '../default.component';
import { DBRadio } from '../../../../../../output/angular/src';

@Component({
	selector: 'app-radio',
	templateUrl: './radio.component.html',
	imports: [DefaultComponent, DBRadio],
	standalone: true
})
export class RadioComponent {
	variants = defaultComponentVariants;
}
