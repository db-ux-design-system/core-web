import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/section.json';
import { DefaultComponent } from '../default.component';
import { DBSection } from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-section',
	templateUrl: './section.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBSection],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	standalone: true
})
export class SectionComponent {
	variants = defaultComponentVariants;
}
