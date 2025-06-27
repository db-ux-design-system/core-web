import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBCard, DBSection } from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/section.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-section',
	templateUrl: './section.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBSection, DBCard],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	standalone: true
})
export class SectionComponent {
	variants = defaultComponentVariants;
}
