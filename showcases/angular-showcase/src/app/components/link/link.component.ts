import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBLink } from '@db-ux/ngx-core-components/src';
import defaultComponentVariants from '../../../../../shared/link.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-link',
	templateUrl: './link.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBLink],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class LinkComponent {
	variants = defaultComponentVariants;
}
