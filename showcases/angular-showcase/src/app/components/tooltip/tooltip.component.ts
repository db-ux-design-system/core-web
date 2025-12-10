import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBButton, DBTooltip } from '@components';
import defaultComponentVariants from '../../../../../shared/tooltip.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

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
