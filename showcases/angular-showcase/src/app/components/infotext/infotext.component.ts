import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBInfotext } from '../../../../../../packages/ngx-core-components/src';
import defaultComponentVariants from '../../../../../shared/infotext.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

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
