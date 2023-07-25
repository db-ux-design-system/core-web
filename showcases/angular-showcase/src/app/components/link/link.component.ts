import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/link.json';

@Component({
	selector: 'app-link',
	templateUrl: './link.component.html'
})
export class LinkComponent {
	variants = defaultComponentVariants;
}
