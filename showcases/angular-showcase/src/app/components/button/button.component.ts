import { Component } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html'
})
export class ButtonComponent {
	variant: 'outline' | 'primary' | 'transparent' | 'semi-transparent' =
		'outline';
}
