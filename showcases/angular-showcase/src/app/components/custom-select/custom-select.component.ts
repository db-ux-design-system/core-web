import { Component } from '@angular/core';
import { DefaultComponent } from '../default.component';
import defaultComponentVariants from '../../../../../shared/custom-select.json';
import { environment } from '../../../environments/environment';
import {
	DBInfotext,
	DBCustomSelect
} from '../../../../../../output/angular/src';

@Component({
	selector: 'app-custom-select',
	templateUrl: './custom-select.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBInfotext, DBCustomSelect],
	standalone: true
})
export class CustomSelectComponent {
	variants = defaultComponentVariants;
	protected readonly console = console;

	getAriaLabel(exampleProps: any, exampleName: string): string {
		return `${exampleProps.id}-${exampleName}`;
	}
}
