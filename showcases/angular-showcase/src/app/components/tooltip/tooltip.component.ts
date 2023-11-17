import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/tooltip.json';

@Component({
	selector: 'app-tooltip',
	templateUrl: './tooltip.component.html'
})
export class TooltipComponent {
	variants = defaultComponentVariants;
}
