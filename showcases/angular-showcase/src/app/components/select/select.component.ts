import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/select.json';
import { DefaultComponent } from '../default.component';
import { DBSelect } from '../../../../../../output/angular/src';

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	imports: [DefaultComponent, DBSelect],
	standalone: true
})
export class SelectComponent {
	variants = defaultComponentVariants;
}
