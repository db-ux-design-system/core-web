import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/divider.json';
import { DefaultComponent } from '../default.component';
import { DBDivider } from '../../../../../../output/angular/src/components/divider/divider';
import { DBInfotext } from '../../../../../../output/angular/src/components/infotext';

@Component({
	selector: 'app-divider',
	templateUrl: './divider.component.html',
	imports: [DefaultComponent, DBDivider, DBInfotext],
	standalone: true
})
export class DividerComponent {
	variants = defaultComponentVariants;
}
