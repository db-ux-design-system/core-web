import { Component } from '@angular/core';
import { DBCustomSelect, DBInfotext } from '@components';
import { CustomSelectOptionType } from '@db-ux/core-components/src/components/custom-select/model';
import defaultComponentVariants from '../../../../../shared/custom-select.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

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

	getTransformSelectedLabels(selectedOptions?: any): string {
		return selectedOptions
			.map((option: any) => option.value.at(-1))
			.join(', ');
	}

	getSearchFilter(option: CustomSelectOptionType, _: string): boolean {
		return option.value === 'Option 1';
	}
}
