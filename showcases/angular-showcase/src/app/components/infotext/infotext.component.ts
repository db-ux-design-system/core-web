import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/infotext.json';
import { DefaultComponent } from '../default.component';
import { DBInfotext } from '../../../../../../output/angular/src';

@Component({
	selector: 'app-infotext',
	templateUrl: './infotext.component.html',
	imports: [DefaultComponent, DBInfotext],
	standalone: true
})
export class InfotextComponent {
	variants = defaultComponentVariants;
}
