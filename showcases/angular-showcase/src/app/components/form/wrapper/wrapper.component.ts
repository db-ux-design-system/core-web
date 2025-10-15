import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-form-wrapper',
	imports: [],
	templateUrl: './wrapper.component.html',
	standalone: true
})
export class WrapperComponent {
	@Input('plain') plain!: string | boolean | string[];
	@Input('model') model!: string | boolean | string[];
	@Input('control') control!: string | boolean | string[];
}
