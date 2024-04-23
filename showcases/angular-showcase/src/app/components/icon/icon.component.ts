import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/icon.json';
import { DefaultComponent } from '../default.component';
import { DBIcon, DBInfotext } from '../../../../../../output/angular/src';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	imports: [DefaultComponent, DBIcon, DBInfotext],
	standalone: true
})
export class IconComponent {
	variants = defaultComponentVariants;
}
