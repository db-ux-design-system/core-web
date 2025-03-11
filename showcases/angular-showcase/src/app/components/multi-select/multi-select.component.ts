import { Component } from '@angular/core';
import { DefaultComponent } from '../default.component';
import defaultComponentVariants from '../../../../../shared/multi-select.json';
import { environment } from '../../../environments/environment';
import {
	DBInfotext,
	DBMultiSelect
} from '../../../../../../output/angular/src';

@Component({
	selector: 'app-multi-select',
	templateUrl: './multi-select.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBInfotext, DBMultiSelect],
	standalone: true
})
export class MultiSelectComponent {
	variants = defaultComponentVariants;
	protected readonly console = console;
}
