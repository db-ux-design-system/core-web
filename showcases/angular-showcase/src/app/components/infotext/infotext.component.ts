import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/infotext.json';
import { DefaultComponent } from '../default.component';
import { DBInfotext } from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-infotext',
	templateUrl: './infotext.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBInfotext],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class InfotextComponent {
	variants = defaultComponentVariants;
}
