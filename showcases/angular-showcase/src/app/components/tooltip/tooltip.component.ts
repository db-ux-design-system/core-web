import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/tooltip.json';
import { DefaultComponent } from '../default.component';
import { DBButton, DBTooltip } from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-tooltip',
	templateUrl: './tooltip.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBTooltip, DBButton],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	standalone: true
})
export class TooltipComponent {
	variants = defaultComponentVariants;
}
