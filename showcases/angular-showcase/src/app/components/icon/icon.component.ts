import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/icon.json';
import { DefaultComponent } from '../default.component';
import { DBIcon } from '../../../../../../output/angular/src/components/icon/icon';
import { DBInfotext } from '../../../../../../output/angular/src/components/infotext';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	imports: [DefaultComponent, DBIcon, DBInfotext],
	standalone: true
})
export class IconComponent {
	variants = defaultComponentVariants;
}
