import { Component, OnInit } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/input';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
	variants = defaultComponentVariants;

	variantColors: any[] = [
		'informational',
		'warning',
		'critical',
		'successful'
	];

	ngOnInit() {
		for (const variant of defaultComponentVariants) {
			variant.examples[0].code =
				'<DBInput label="Label" description="Description" />';
		}

		for (const variant of this.variantColors) {
			const index = this.variantColors.indexOf(variant);
			defaultComponentVariants[0].examples[
				index
			].code = `<DBInput label="Label" description="Description" variant="${variant}" />`;
		}

		defaultComponentVariants[1].examples[1].code =
			'<DBInput label="Label" description="Description" value="Input Text" />';
		defaultComponentVariants[1].examples[2].code =
			'<DBInput label="Label" description="Description" value="123456" type="number" />';
		defaultComponentVariants[1].examples[3].code =
			'<DBInput label="Label" description="Description" min-length="5" [required]="true" />';
		defaultComponentVariants[1].examples[4].code =
			'<DBInput label="Label" description="Description" [disabled]="true" />';
		defaultComponentVariants[1].examples[5].code =
			'<DBInput label="Label" description="Description" [disabled]="true" value="Input Text" />';
		defaultComponentVariants[1].examples[6].code =
			'<DBInput label="Label" description="Description" [required]="true" value="Input Text" />';

		defaultComponentVariants[2].examples[1].code =
			'<DBInput label="Label" description="Description" icon="account" />';
		defaultComponentVariants[2].examples[2].code =
			'<DBInput label="Label" description="Description" icon="account" icon-after="edit"/>';
		defaultComponentVariants[2].examples[3].code =
			'<DBInput label="Label" description="Description" icon-after="edit" />';
		defaultComponentVariants[2].examples[4].code =
			'<DBInput label="Label" description="Description" icon-after="edit" variant="successful" />';
	}
}
