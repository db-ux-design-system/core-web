import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/tag.json';
import { DefaultComponent } from '../default.component';
import { DBTag } from '@components';
import { environment } from '../../../environments/environment';

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
