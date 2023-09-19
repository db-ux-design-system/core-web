import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/section.json';

@Component({
	selector: 'app-section',
	templateUrl: './section.component.html'
})
export class SectionComponent {
	variants = defaultComponentVariants;
}
