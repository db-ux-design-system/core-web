import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/tag.json';
import { DefaultComponent } from '../default.component';
import { DBTag } from '../../../../../../output/angular/src';

@Component({
	selector: 'app-tag',
	templateUrl: './tag.component.html',
	imports: [DefaultComponent, DBTag],
	standalone: true
})
export class TagComponent {
	variants = defaultComponentVariants;
	showAlert = (exampleName: string) => {
		// eslint-disable-next-line no-alert
		alert(exampleName);
	};
}
