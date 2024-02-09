import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/section.json';
import { DefaultComponent } from '../default.component';
import { DBSection } from '../../../../../../output/angular/src/components/section/section';

@Component({
	selector: 'app-section',
	templateUrl: './section.component.html',
	imports: [DefaultComponent, DBSection],
	standalone: true
})
export class SectionComponent {
	variants = defaultComponentVariants;
}
