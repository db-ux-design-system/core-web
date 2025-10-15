import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBButton, DBPopover } from '../../../../../../output/angular/src';
import defaultComponentVariants from '../../../../../shared/popover.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-popover',
	templateUrl: './popover.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBPopover, DBButton],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : [],
	standalone: true
})
export class PopoverComponent {
	variants = defaultComponentVariants;
}
