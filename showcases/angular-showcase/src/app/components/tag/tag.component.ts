import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/tag.json';
import { DefaultComponent } from '../default.component';
import { DBTag } from '../../../../../../output/angular/src/components/tag/tag';
import { DBButton } from '../../../../../../output/angular/src/components/button';
import { DBCheckbox } from '../../../../../../output/angular/src/components/checkbox/checkbox';
import { DBRadio } from '../../../../../../output/angular/src/components/radio/radio';
import { DBLink } from '../../../../../../output/angular/src/components/link';

@Component({
	selector: 'app-tag',
	templateUrl: './tag.component.html',
	imports: [DefaultComponent, DBTag, DBButton, DBCheckbox, DBRadio, DBLink],
	standalone: true
})
export class TagComponent {
	variants = defaultComponentVariants;
	showAlert = (exampleName: string) => {
		// eslint-disable-next-line no-alert
		alert(exampleName);
	};
}
