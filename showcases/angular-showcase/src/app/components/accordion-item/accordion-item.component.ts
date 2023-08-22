import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/accordion-item.json';

@Component({
	selector: 'app-accordion-item',
	templateUrl: './accordion-item.component.html'
})
export class AccordionItemComponent {
	variants = defaultComponentVariants;

	openId?: string;

	getId = (exampleIndex: number, variantIndex: number) =>
		`${variantIndex}${exampleIndex}`;

	toggle = (exampleIndex: number, variantIndex: number) => {
		this.openId =
			this.openId === this.getId(exampleIndex, variantIndex)
				? undefined
				: this.getId(exampleIndex, variantIndex);
	};

	isOpen = (exampleIndex: number, variantIndex: number, open?: boolean) =>
		this.openId === this.getId(exampleIndex, variantIndex) ? true : open;
}
