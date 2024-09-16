import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/popover.json';
import { DefaultComponent } from '../default.component';
import {
	DBButton,
	DBPopover,
	DBSwitch
} from '../../../../../../output/angular/src';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-popover',
	templateUrl: './popover.component.html',
	imports: environment.webComponents
		? [DefaultComponent, DBPopover] // TODO: Remove DBPopover after stencil component works
		: [DefaultComponent, DBPopover, DBButton],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	standalone: true
})
export class PopoverComponent {
	variants = defaultComponentVariants;
}
