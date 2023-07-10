import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/tag.json';

@Component({
	selector: 'app-tag',
	templateUrl: './tag.component.html'
})
export class TagComponent {
	variants = defaultComponentVariants;
	showAlert = (exampleName: string) => {
		// eslint-disable-next-line no-alert
		alert(exampleName);
	};
}
