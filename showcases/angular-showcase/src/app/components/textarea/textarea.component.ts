import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/textarea.json';
import { DefaultComponent } from '../default.component';
import { DBTextarea } from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-textarea',
	templateUrl: './textarea.component.html',
	imports: [
		environment.webComponents
			? [DefaultComponent]
			: [DefaultComponent, DBTextarea]
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	standalone: true
})
export class TextareaComponent {
	variants = defaultComponentVariants;
}
