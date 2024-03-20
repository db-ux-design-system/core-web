import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/tooltip.json';
import { DefaultComponent } from '../default.component';
import { DBButton } from '../../../../../../output/angular/src/components/button';
import { DBTooltip } from '../../../../../../output/angular/src/components/tooltip/tooltip';

@Component({
	selector: 'app-tooltip',
	templateUrl: './tooltip.component.html',
	imports: [DefaultComponent, DBTooltip, DBButton],
	standalone: true
})
export class TooltipComponent {
	variants = defaultComponentVariants;
}
