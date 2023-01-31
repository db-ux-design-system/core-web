import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
	COLOR_CONST,
	INVALID_INPUT_BACKGROUNDS
} from '../../../../../../packages/components/src/shared/constants';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent {
	warningBackground = false;
	constructor(private readonly route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((parameters) => {
			if (parameters[COLOR_CONST]) {
				this.warningBackground =
					(parameters[COLOR_CONST] &&
						Boolean(
							INVALID_INPUT_BACKGROUNDS.some((iBg) =>
								iBg.includes(parameters[COLOR_CONST] || '')
							)
						)) ||
					false;
			}
		});
	}

	onSubmit = () => {
		// eslint-disable-next-line no-console
		console.log('onSubmit');
	};
}
