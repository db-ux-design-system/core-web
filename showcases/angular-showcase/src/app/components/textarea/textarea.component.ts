import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBTextarea } from '@db-ux/ngx-core-components/src';
import defaultComponentVariants from '../../../../../shared/textarea.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-textarea',
	templateUrl: './textarea.component.html',
	imports: [
		environment.webComponents
			? [DefaultComponent]
			: [DefaultComponent, DBTextarea]
	],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	standalone: true
})
export class TextareaComponent {
	variants = defaultComponentVariants;
}
