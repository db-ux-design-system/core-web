import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
	DBInput,
	InputTypeType,
	LabelVariantType,
	ValueLabelType
} from '@db-ux/ngx-core-components/src';
import defaultComponentVariants from '../../../../../shared/input.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	standalone: true,
	imports: [
		environment.webComponents
			? [DefaultComponent]
			: [DefaultComponent, DBInput]
	],
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class InputComponent {
	variants = defaultComponentVariants;

	getDataList = (
		variant?: LabelVariantType,
		type?: InputTypeType | string
	): string[] | ValueLabelType[] => {
		if (type === 'time') {
			return ['00:00', '12:00', '18:00', '23:59'];
		}

		if (type === 'color') {
			return ['#EC0016'];
		}

		if (variant === 'floating') {
			return ['Test 1', 'Test 2'];
		}

		return [
			{ value: 'test1', label: 'Test 1' },
			{ value: 'test2', label: 'Test 2' }
		];
	};
}
