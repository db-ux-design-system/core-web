import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-form-wrapper',
	imports: [],
	templateUrl: './wrapper.component.html'
})
export class WrapperComponent {
	@Input('plain') plain!: string | boolean;
	@Input('model') model!: string | boolean;
	@Input('control') control!: string | boolean;
}
