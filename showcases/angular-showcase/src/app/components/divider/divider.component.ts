import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/divider.json';
import { DefaultComponent } from '../default.component';
import { DBDivider, DBInfotext } from '../../../../../../output/angular/src';

@Component({
	selector: 'app-divider',
	templateUrl: './divider.component.html',
	imports: [DefaultComponent, DBDivider, DBInfotext],
	standalone: true
})
export class DividerComponent {
	variants = defaultComponentVariants;
}
