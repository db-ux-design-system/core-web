import { Component, Input } from '@angular/core';
import { DBButton } from '../../../../../../../packages/ngx-core-components/src';

@Component({
	selector: 'app-form-wrapper',
	imports: [DBButton],
	templateUrl: './wrapper.component.html',
	standalone: true
})
export class WrapperComponent {
	@Input('plain') plain!: string | boolean | string[];
	@Input('model') model!: string | boolean | string[];
	@Input('control') control!: string | boolean | string[];
}
