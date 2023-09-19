import { Component, type OnInit, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import type {
	DefaultComponentProps,
	DefaultComponentVariants,
	DefaultComponentExample
} from '../../../../shared/default-component-data';
import {
	COLOR,
	COLOR_CONST,
	TONALITY,
	TONALITY_CONST
} from '../../../../../packages/components/src/shared/constants';

@Component({
	selector: 'app-default-component',
	templateUrl: './default.component.html'
})
export class DefaultComponent implements OnInit {
	@Input() title: DefaultComponentProps['title'] = '';
	@Input() variants: DefaultComponentProps['variants'] = [];
	@Input() exampleTemplate: TemplateRef<any>;

	tonality = TONALITY.REGULAR;
	color = COLOR.NEUTRAL;
	page: string;

	variantRef: DefaultComponentVariants | undefined;
	variantRefIndex: number;

	constructor(private readonly route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((parameters) => {
			if (parameters[TONALITY_CONST]) {
				this.tonality = parameters[TONALITY_CONST];
			}

			if (parameters['page']) {
				this.page = parameters['page'];

				const foundVariant = this.variants.find(
					(variant) => variant.name.toLowerCase() === this.page
				);

				this.variantRef = foundVariant;
				if (foundVariant) {
					this.variantRefIndex = this.variants.indexOf(foundVariant);
				}
			}

			if (parameters[COLOR_CONST]) {
				this.color = parameters[COLOR_CONST];
			}
		});
	}

	getLink = (variantName: string) => {
		let currentUrl = window.location.href;
		if (!currentUrl.includes('?')) {
			currentUrl += '?';
		}

		if (!currentUrl.includes('color=')) {
			currentUrl += `&color=${this.color || COLOR.NEUTRAL}`;
		}

		if (!currentUrl.includes('tonality=')) {
			currentUrl += `&tonality=${this.tonality || TONALITY.REGULAR}`;
		}

		return `${currentUrl}&page=${variantName.toLowerCase()}`;
	};

	getCodeSnippets = (examples: DefaultComponentExample[]) => {
		return examples
			.filter((example) => example.code)
			.map((example) => `/* ${example.name} */\n${example.code}`);
	};
}
