import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/textarea.json';

@Component({
	selector: 'app-textarea',
	templateUrl: './textarea.component.html'
})
export class TextareaComponent {
	variants = defaultComponentVariants;
}
