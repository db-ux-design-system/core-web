import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBTag } from '@db-ux/ngx-core-components/src';
import defaultComponentVariants from '../../../../../shared/tag.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-tag',
	templateUrl: './tag.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBTag],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	standalone: true
})
export class TagComponent {
	variants = defaultComponentVariants;
	showAlert = (exampleName: string) => {
		// eslint-disable-next-line no-alert
		alert(exampleName);
	};
}
