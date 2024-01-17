import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/icon.json';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html'
})
export class IconComponent {
	variants = defaultComponentVariants;
}
