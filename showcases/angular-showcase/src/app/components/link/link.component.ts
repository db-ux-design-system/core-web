import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/link.json';
import { DefaultComponent } from '../default.component';
import { DBLink } from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-link',
	templateUrl: './link.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBLink],
	standalone: true,
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LinkComponent {
	variants = defaultComponentVariants;
}
