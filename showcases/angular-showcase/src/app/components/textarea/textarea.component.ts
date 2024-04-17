import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/textarea.json';
import { DefaultComponent } from '../default.component';
import { DBTextarea } from '../../../../../../output/angular/src';

@Component({
	selector: 'app-textarea',
	templateUrl: './textarea.component.html',
	imports: [DefaultComponent, DBTextarea],
	standalone: true
})
export class TextareaComponent {
	variants = defaultComponentVariants;
}
