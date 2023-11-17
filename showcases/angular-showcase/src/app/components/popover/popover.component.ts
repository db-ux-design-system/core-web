import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/popover.json';

@Component({
	selector: 'app-popover',
	templateUrl: './popover.component.html'
})
export class PopoverComponent {
	variants = defaultComponentVariants;
}
