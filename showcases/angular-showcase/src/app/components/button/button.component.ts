import { Component } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
	variant: 'primary' | 'secondary' | 'tertiary' | 'ghost' = 'primary';
}
