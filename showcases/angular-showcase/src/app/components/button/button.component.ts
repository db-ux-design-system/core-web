import { Component, OnInit } from '@angular/core';

import defaultComponentVariants from '../../../../../shared/button';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
	variants = defaultComponentVariants;

	ngOnInit() {
		for (const variant of defaultComponentVariants) {
			variant.examples[0].code = '<DBButton>Button</DBButton>';
		}

		defaultComponentVariants[0].examples[1].code =
			'<DBButton variant="primary">Button</DBButton>';
		defaultComponentVariants[0].examples[2].code =
			'<DBButton variant="transparent">Button</DBButton>';
		defaultComponentVariants[0].examples[3].code =
			'<DBButton variant="semi-transparent">Button</DBButton>';

		defaultComponentVariants[1].examples[1].code =
			'<DBButton state="loading">Button</DBButton>';

		defaultComponentVariants[2].examples[1].code =
			'<DBButton size="small">Button</DBButton>';

		defaultComponentVariants[3].examples[1].code =
			'<DBButton icon="account" [icntxt]="true">Button</DBButton>';
		defaultComponentVariants[3].examples[2].code =
			'<DBButton icon="account">Button</DBButton>';

		defaultComponentVariants[4].examples[1].code =
			'<DBButton width="full">Button</DBButton>';
	}
}
